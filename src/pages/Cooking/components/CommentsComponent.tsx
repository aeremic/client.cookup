import { HttpStatusCode } from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
import { IComment } from "../models/IComment";
import {
  addNewComment,
  getComments,
} from "../../../services/axios/endpoint-calls/recipes/comments";
import { INewComment } from "../models/INewComment";
import useCurrentUserIdentifier from "../../../hooks/UseCurrentUserIdentifier";
import { IUser } from "../../Profile/models/IUser";
import { getUserByGuid } from "../../../services/axios/endpoint-calls/users/users";

const CommentsComponent = () => {
  const { t } = useTranslation();

  const [queryParameters] = useSearchParams();

  const recipeIdQueryParam: string | null = queryParameters.get("recipeId");
  const recipeId: number =
    recipeIdQueryParam != null ? parseInt(recipeIdQueryParam) : -1;

  const currentUserGuid = useCurrentUserIdentifier();

  const [user, setUser] = useState<IUser>();

  const [comments, setComments] = useState<IComment[]>([]);
  const [commentsLoaded, setCommentsLoaded] = useState<boolean>(false);

  const [newCommentContent, setNewCommentContent] = useState<string>("");
  const [showAlertSuccess, setShowAlertSuccess] = useState<boolean>(false);
  const [showAlertFailure, setShowAlertFailure] = useState<boolean>(false);

  useEffect(() => {
    const fetchComments = async () => {
      if (recipeId != -1) {
        getComments(recipeId).then((res) => {
          if (res && res.status === HttpStatusCode.Ok && res.data) {
            setComments(res.data);
            setCommentsLoaded(true);
          }
        });
      }
    };

    fetchComments();
  }, [recipeId]);

  useEffect(() => {
    const fetchUser = async () => {
      if (currentUserGuid) {
        getUserByGuid(currentUserGuid).then((res) => {
          if (res && res.status === HttpStatusCode.Ok && res.data) {
            setUser(res.data);
          }
        });
      }
    };

    fetchUser();
  }, [currentUserGuid]);

  const handleNewCommentChange = (event: any) => {
    setNewCommentContent(event.target.value);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const modelToPost: INewComment = {
      recipeId: recipeId,
      content: newCommentContent,
      userGuid: currentUserGuid,
      rating: 3, // TODO: Fix ratings
    };

    const currentComments = [...comments];
    currentComments.push({
      user: {
        username: user?.username,
      },
      content: newCommentContent,
      rating: 3,
    });

    setComments(currentComments);
    setNewCommentContent("");

    const res: any = await addNewComment(modelToPost);
    if (res && res.status && res.status === HttpStatusCode.Ok && res.data) {
      setShowAlertFailure(false);
      setShowAlertSuccess(true);
    } else {
      setShowAlertSuccess(false);
      setShowAlertFailure(true);
    }
  };

  return (
    <div>
      <div className="w-auto sm:w-1/2 container">
        <div className="prose lg:prose-lg mb-3 text-center sm:text-left">
          <h3>{t("Comments")}</h3>
        </div>
        {commentsLoaded && comments.length > 0 ? (
          <div>
            <div className="gap-6 grid grid-cols-1">
              <div className="bg-base-100 shadow-xl card">
                <div className="mx-auto card-body container">
                  <div>
                    {comments.map((comment, index) => (
                      <div key={index}>
                        <div className="flex flex-row sm:mb-3 text-left">
                          <div className="mb-3 sm:mb-0 sm:basis-1/6 avatar placeholder">
                            <div className="bg-primary rounded-xl w-12 sm:w-16 text-neutral-content">
                              <span className="text-xl">
                                {comment.user?.username
                                  ? comment.user?.username[0]?.toUpperCase()
                                  : ""}
                              </span>
                            </div>
                          </div>
                          <div className="ml-5 sm:ml-0">
                            <div className="prose lg:prose-lg">
                              <h4>{comment.user.username}</h4>
                            </div>
                            <div className="sm:mt-1 rating rating-sm sm:rating-md">
                              <input
                                type="radio"
                                name="rating-5"
                                className="bg-red-400 mask mask-heart"
                                disabled={true}
                              />
                              <input
                                type="radio"
                                name="rating-5"
                                className="bg-red-400 mask mask-heart"
                                disabled={true}
                                checked
                              />
                              <input
                                type="radio"
                                name="rating-5"
                                className="bg-red-400 mask mask-heart"
                                disabled={true}
                              />
                              <input
                                type="radio"
                                name="rating-5"
                                className="bg-red-400 mask mask-heart"
                                disabled={true}
                              />
                              <input
                                type="radio"
                                name="rating-5"
                                className="bg-red-400 mask mask-heart"
                                disabled={true}
                              />
                            </div>
                          </div>
                        </div>
                        {comment.content.length > 0 ? (
                          <div className="bg-base-200 card">
                            <div className="mx-auto card-body container">
                              <div className="prose lg:prose-base">
                                <p>
                                  <i>{comment.content}</i>
                                </p>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <></>
                        )}
                        <div className="divider"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
        <div className="bg-base-100 shadow-xl mt-4 card">
          <div className="mx-auto card-body container">
            <div>
              <div className="flex flex-row sm:mb-3 text-left"></div>
              <div className="bg-base-200 card">
                <div className="mx-auto text-center card-body container">
                  <div>
                    <label className="form-control w-full">
                      <div className="label">
                        <div className="prose lg:prose-base">
                          <span className="label-text">
                            {t("LeaveYourComment")}
                          </span>
                        </div>
                      </div>
                      <form onSubmit={handleSubmit}>
                        <textarea
                          className="textarea-bordered w-full textarea"
                          placeholder="Comment"
                          onChange={handleNewCommentChange}
                          value={newCommentContent}
                        ></textarea>
                        <div className="mt-4 sm:mt-4 sm:text-left">
                          <div className="sm:mt-1 rating rating-md sm:rating-md">
                            <input
                              type="radio"
                              name="rating-5"
                              className="bg-red-400 mask mask-heart"
                              disabled={false}
                            />
                            <input
                              type="radio"
                              name="rating-5"
                              className="bg-red-400 mask mask-heart"
                              disabled={false}
                              checked
                            />
                            <input
                              type="radio"
                              name="rating-5"
                              className="bg-red-400 mask mask-heart"
                              disabled={false}
                            />
                            <input
                              type="radio"
                              name="rating-5"
                              className="bg-red-400 mask mask-heart"
                              disabled={false}
                            />
                            <input
                              type="radio"
                              name="rating-5"
                              className="bg-red-400 mask mask-heart"
                              disabled={false}
                            />
                          </div>
                        </div>
                        <button
                          className="shadow-xl mt-4 btn btn-md btn-primary"
                          type="submit"
                        >
                          <svg
                            className="w-6"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                          </svg>
                          {t("PostComment")}
                        </button>
                      </form>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showAlertSuccess ? (
        <div className="toast">
          <div className="alert alert-success">
            <span>{t("CommentSuccessfullyAdded")}</span>
          </div>
        </div>
      ) : (
        <></>
      )}
      {showAlertFailure ? (
        <div className="toast">
          <div className="alert alert-error">
            <span>{t("SomethingWentWrong")}</span>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default CommentsComponent;

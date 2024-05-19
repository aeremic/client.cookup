export interface INewComment {
  recipeId: number;
  userGuid: string | null;
  content: string;
  rating: number;
}

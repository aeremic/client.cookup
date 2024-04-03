import { useTranslation } from "react-i18next";

const LandingComponent = () => {
  const { t } = useTranslation();

  return (
    <div className="container w-auto">
      <div className="card sm:w-96 sm:h-auto bg-base-100 shadow-xl">
        <div className="card-body container mx-auto">
          <div className="m-7 mx-auto">Landing page</div>
        </div>
      </div>
    </div>
  );
};

export default LandingComponent;

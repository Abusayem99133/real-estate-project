import { TbFaceIdError } from "react-icons/tb";
const ErrorPage = () => {
  return (
    <div className="text-center font-extrabold text-[140px]">
      <h1>404.....!</h1>
      <div className="flex items-center ml-64">
        <h3 className="text-[80px]">Not Found....</h3>
        <p>
          <TbFaceIdError></TbFaceIdError>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;

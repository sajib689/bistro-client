import { FaGoogle } from "react-icons/fa6";

const SocialLogin = () => {
  return (
    <div>
      <div className="divider"></div>
      <div className="w-full text-center">
      <button className="btn btn-circle btn-outline">
        <FaGoogle></FaGoogle>
      </button>
      </div>
    </div>
  );
};

export default SocialLogin;

import { useContext } from "react";
import { FaGoogle } from "react-icons/fa6";
import { AuthContext } from "../../../Providers/AuthProviders";

const SocialLogin = () => {
    const {googleSign} = useContext(AuthContext)
   
    const handleGoogleSignIn = () => {
        googleSign()
        .then( result => {
            const loggedInUser = result.user
            console.log(`User ${loggedInUser}`)
        })
    }
  return (
    <div>
      <div className="divider"></div>
      <div className="w-full text-center">
      <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
        <FaGoogle></FaGoogle>
      </button>
      </div>
    </div>
  );
};

export default SocialLogin;

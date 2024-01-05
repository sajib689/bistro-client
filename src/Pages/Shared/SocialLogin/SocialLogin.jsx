import { useContext } from "react";
import { FaGoogle } from "react-icons/fa6";
import { AuthContext } from "../../../Providers/AuthProviders";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const {googleSign} = useContext(AuthContext)
   const navigate = useNavigate()
   const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const handleGoogleSignIn = () => {
        googleSign()
        .then( result => {
            const loggedInUser = result.user
            console.log(`User ${loggedInUser}`)
            navigate(from, {replace: true})
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

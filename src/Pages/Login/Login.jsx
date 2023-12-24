import { useContext, useEffect, useRef, useState } from 'react';
import authenticationImg from '../../assets/others/authentication1.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Providers/AuthProviders';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const Login = () => {
  const captchaRef = useRef(null)
  const [disbled, setDisabled] = useState(true)
  const {signIn} = useContext(AuthContext)
  const handleCaptcha = () => {
    const user_valid_captcha = captchaRef.current.value
    if(validateCaptcha(user_valid_captcha) === true) {
      setDisabled(false)
    } else {
      alert('Captcha not matched')
      setDisabled(true)
    }
  }
  useEffect(() => {
    loadCaptchaEnginge(6); 
  },[])
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then( result => {
          const user = result.user;
          if(user) {
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Login success!",
                showConfirmButton: false,
                timer: 1500
              });
        }
        form.reset()
        })
    }
  return (
    <>
    <Helmet><title>Bistro Boss | Login</title></Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col md:flex-row">
          <div className="text-center md:w-1/2 lg:text-left">
          
            <img src={authenticationImg} alt="" />
          </div>
          <div className="card shrink-0 md:w-1/2 max-w-sm shadow-2xl bg-base-100">
          <h1 className='text-5xl font-bold text-center mt-2'>Login now!</h1>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                <LoadCanvasTemplate />
                </label>
                <input
                ref={captchaRef}
                  type="text"
                  name="captcha"
                  placeholder="captcha"
                  className="input input-bordered"
                  required
                />
               
              </div>
              <button onClick={handleCaptcha} className="btn btn-xs">Valid</button>

              <div className="form-control mt-6">
              <input disabled={disbled} className="btn btn-primary" type="submit" value='Login'/>
              </div>
            </form>
            <p className='text-center'><small>New Here? <Link to='/signup'>Create an account</Link></small></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

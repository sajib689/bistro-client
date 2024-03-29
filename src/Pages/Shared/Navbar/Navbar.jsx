import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./../../../Providers/AuthProviders";
import { BsCartFill } from "react-icons/bs";
import useCart from "../../../hooks/useCart/useCart";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart()
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  const nav = (
    <>
      <li>
        <Link to="/">HOME</Link>
      </li>
      <li>
        <Link>CONTACT US</Link>
      </li>
      <li>
        <Link to='/dashboard'>DASHBOARD</Link>
      </li>
      <li>
        <Link to="/menu">OUR MENU</Link>
      </li>
      <li>
        <Link to="/order/salad">OUR SHOP</Link>
      </li>
      <li>
        <Link to='dashboard'>
          <BsCartFill />
          <div className="badge badge-secondary">+{cart?.length || 0}</div>
        </Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-black text-white max-w-screen-xl mx-auto fixed z-10 bg-opacity-30">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {nav}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">BISTRO BOSS</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{nav}</ul>
        </div>
        <div className="navbar-end uppercase">
          <div className="avatar">
            <div className="w-12 rounded-2xl">
              {user ? (
                <>
                  <img src={user.photoURL} />
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
          {user ? (
            <>
              <Link className="btn btn-ghost" onClick={handleLogOut}>
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link className="btn btn-ghost" to="/login">
                LOGIN
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

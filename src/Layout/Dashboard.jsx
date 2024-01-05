import { NavLink, Outlet } from "react-router-dom";
import { MdMenu, MdEmail } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaBagShopping, FaBook, FaUsers } from "react-icons/fa6";
import { FaShoppingCart, FaWallet, FaCalendar, FaHome,FaUtensils  } from "react-icons/fa";
import "../Layout/Dashboard/Dashboard.css";
import useCart from "../hooks/useCart/useCart";
const Dashboard = () => {
  const [cart] = useCart();
 
  // TODO: load data from the server to have dynamic isAdmin based on Data
  const isAdmin = true;
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col p-4">
          {/* Page content here */}
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side bg-[#D1A054]">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="uppercase text-white menu p-4 w-80 min-h-full">
            {/* Sidebar content here */}
            {isAdmin ? (
              <>
               <li>
              <NavLink to='/dashboard'><FaHome></FaHome>Admin Home</NavLink>
            </li>
            <li>
              <NavLink to=''><FaUtensils></FaUtensils>add items</NavLink>
            </li>
            <li>
              <NavLink><TfiMenuAlt ></TfiMenuAlt>manage items</NavLink>
            </li>
            <li>
              <NavLink to=''><FaBook></FaBook>Manage bookings </NavLink>
            </li>
            <li>
              <NavLink to='allusers'><FaUsers></FaUsers>all users</NavLink>
            </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/dashboard">
                    <FaHome></FaHome>User Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="">
                    <FaCalendar></FaCalendar>reservation
                  </NavLink>
                </li>
                <li>
                  <NavLink>
                    <FaWallet></FaWallet>payment history
                  </NavLink>
                </li>
                <li className="flex items-start">
                  <NavLink to="/dashboard/mycart">
                    <FaShoppingCart></FaShoppingCart>My Cart{" "}
                    <span className="badge badge-secondary">
                      +{cart?.length || 0}
                    </span>
                  </NavLink>
                </li>
              </>
            )}
            {/* bottom area menubar */}
            <div className="divider"></div>
            <li>
              <NavLink to="/">
                <FaHome></FaHome>Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/menu">
                <MdMenu></MdMenu>Menu
              </NavLink>
            </li>
            <li>
              <NavLink>
                <FaBagShopping></FaBagShopping>Shop
              </NavLink>
            </li>
            <li>
              <NavLink>
                <MdEmail></MdEmail>Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

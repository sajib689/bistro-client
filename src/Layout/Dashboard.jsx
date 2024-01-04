import {  NavLink, Outlet } from "react-router-dom";
import { MdMenu, MdEmail } from "react-icons/md";
import { FaBagShopping } from "react-icons/fa6";
import {FaShoppingCart, FaWallet, FaCalendar, FaHome,} from 'react-icons/fa'
import '../Layout/Dashboard/Dashboard.css';
const Dashboard = () => {
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
            <li>
              <NavLink to='/dashboard'><FaHome></FaHome>User Home</NavLink>
            </li>
            <li>
              <NavLink to=''><FaCalendar></FaCalendar>reservation</NavLink>
            </li>
            <li>
              <NavLink><FaWallet></FaWallet>payment history</NavLink>
            </li>
            <li>
              <NavLink to='/dashboard/mycart'><FaShoppingCart></FaShoppingCart>My Cart</NavLink>
            </li>
            <div className="divider"></div>
            <li><NavLink to='/'><FaHome></FaHome>Home</NavLink></li>
            <li><NavLink to='/menu'><MdMenu></MdMenu>Menu</NavLink></li>
            <li><NavLink><FaBagShopping></FaBagShopping>Shop</NavLink></li>
            <li><NavLink><MdEmail></MdEmail>Contact</NavLink></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

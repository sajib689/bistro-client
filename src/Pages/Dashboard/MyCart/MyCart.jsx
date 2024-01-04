import { Helmet } from "react-helmet-async";
import useCart from "./../../../hooks/useCart/useCart";
import SectionTitle from "./../../../Components/SectionTitle/SectionTitle";


const MyCart = () => {
  const [cart] = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);
  console.log(total);
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | My Cart</title>
      </Helmet>
      <SectionTitle
        heading="WANNA ADD MORE?"
        subHeading="---My Cart---"
      ></SectionTitle>
      <div className="flex justify-evenly font-semibold h-[60px] items-center uppercase">
        <h3 className="text-2xl">Total Items: {cart.length}</h3>
        <h3 className="text-2xl">Total Items: ${Math.floor(total)}</h3>
        <button className="btn bg-[#D99904] text-white">PAY</button>
      </div>
      <div className="overflow-x-auto rounded-t-lg mt-2">
        <table className="table">
          {/* head */}
          <thead className="bg-[#D99904] text-white">
            <tr>
            
              <th>No</th>
              <th>ITEM IMAGE</th>
              <th>ITEM NAME</th>
              <th>PRICE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
            
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">
                  Desktop Support Technician
                </span>
              </td>
              <td>Purple</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
           
          </tbody>
        
        </table>
      </div>
    </div>
  );
};

export default MyCart;

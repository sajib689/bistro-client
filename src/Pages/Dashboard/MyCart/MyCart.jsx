import { Helmet } from "react-helmet-async";
import useCart from "./../../../hooks/useCart/useCart";
import SectionTitle from "./../../../Components/SectionTitle/SectionTitle";
import { FaTrash } from "react-icons/fa6";
import Swal from "sweetalert2";

const MyCart = () => {
  const [cart, refetch] = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);
  const handleDelete = item => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
       fetch(`http://localhost:5000/carts/${item._id}`, {
        method: 'DELETE',
       })
       .then( res => res.json())
       .then(data => {
        if(data.deletedCount > 0) {
          refetch()
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
      
        }
       })
      }
    });
  }
  return (
    <div className="w-full">
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
            {/* item 1 */}
            {cart.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <th>
                  <button onClick={() => handleDelete(item)} className="btn text-white bg-[#B91C1C]">
                    <FaTrash />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;

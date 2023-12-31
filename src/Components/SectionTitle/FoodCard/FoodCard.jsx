import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const FoodCard = ({items}) => {
  const {user} = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  const handleAddToCart = items => {
    if(user) {
      fetch('http://localhost:5000/carts')
      .then(res => res.json())
      .then(data => {
        if(data.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Added successfully",
            showConfirmButton: false,
            timer: 1500
          });
        } else{
          Swal.fire({
            title: "Are you Login?",
            text: "Please Login!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Login"
          }).then((result) => {
            if (result.isConfirmed) {
              navigate('/login',{state: {from: location}});
            }
          });
          
        }
      })
    }
  }
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={items.image}
          alt="food"
        />
      </figure>
      <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">{items.price}</p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{items.name}</h2>
        <p>{items.recipe}</p>
        <div className="card-actions justify-start">
        <button onClick={() => handleAddToCart(items)} className="btn hover:bg-black uppercase text-orange-500">
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;

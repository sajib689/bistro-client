import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaUserShield } from "react-icons/fa6";

const AllUsers = () => {
   const {data: users = [], refetch} = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json()
    }
   })


   const handleDelete = user => {
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
       fetch(`http://localhost:5000/users/${user._id}`, {
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

  const handleMakeAdmin = user => {
        fetch(`http://localhost:5000/users/admin/${user._id}`,{
            method: 'PATCH',
        })
        .then( res => res.json())
        .then( data => {
            console.log(data);
            if(data.modifiedCount) {
                refetch()
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
  }
    return (
        <div className="w-full">
        <Helmet>
          <title>Bistro Boss | All Users</title>
        </Helmet>
        <SectionTitle
          heading="MANAGE ALL USERS"
          subHeading="---How many??---"
        ></SectionTitle>
        <div className="font-semibold h-[60px]  uppercase">
          <h3 className="text-2xl">Total Users: {users.length}</h3>
        </div>
        <div className="overflow-x-auto rounded-t-lg mt-2">
          <table className="table">
            {/* head */}
            <thead className="bg-[#D99904] text-white">
              <tr>
                <th>No</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>ROLE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {/* item 1 */}
              {users.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center gap-3">
                     {user.name}
                     </div>
                  </td>
                  <td>{user.email}</td>
                  <td>
                    {
                        user.role === 'admin' ? 
                        'admin'
                        :
                        <>
                        <button onClick={() => handleMakeAdmin(user)} className="btn text-white bg-[#D99904]">
                      <FaUserShield />
                    </button>
                        </>
                    }
                  
                  </td>
                  <th>
                    <button onClick={() => handleDelete(user)} className="btn text-white bg-[#B91C1C]">
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

export default AllUsers;
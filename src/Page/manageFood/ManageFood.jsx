
import useAxios from "../../hook/useAxios";
import useAuth from "../../hook/useAuth";
import Swal from "sweetalert2";
import Table from "./Table";
import { useQuery } from '@tanstack/react-query';
import Lottie from "lottie-react";
import animetionLoading from '../../../public/loading.json'

const ManageFood = () => {
  const axiosSecure = useAxios();
  const { user } = useAuth();


  const { data, error, isLoading ,refetch} = useQuery({
    queryKey: [user?.email], 
    queryFn: () => getData(), 
  });

  const getData = async () => {
    try {
      const res = await axiosSecure.get(`/manage-my-foods/${user?.email}`);
      return res.data;
    } catch (error) {
      throw new Error('Failed to fetch data');
    }
  };








  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/delete-food/${id}`)
          .then((res) => {
            if (res.data.acknowledged) {
              refetch()
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((err) => {
            Swal.fire({
              title: "Error",
              text: `${err}`,
              icon: "error",
            });
          });
      }
    });
  };

   if(isLoading){
        return   <div className="h-[80vh] flex justify-center items-center"> <Lottie className=" w-2/4" animationData={animetionLoading} loop={true} /></div>
    }

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Status</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* Render data */}
          {data?.map((tble) => (
            <Table
              key={tble._id}
              handleDelete={handleDelete}
              tble={tble}
            ></Table>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageFood;

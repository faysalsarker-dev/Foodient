import useAuth from "./../../hook/useAuth";
import useAxios from "../../hook/useAxios";
import { useQuery } from "@tanstack/react-query";

const FoodReq = () => {
  const { user } = useAuth();
  const axiosSecure = useAxios();
  

  const { data, isLoading, error } = useQuery({
    queryKey: [user?.email],
    queryFn: () => getData(),
  });

  const getData = async () => {
    try {
      const { data } = await axiosSecure.get(`/my-req-foods/${user?.email}`);
      return data;
    } catch (err) {
      throw new Error("Failed to fetch data");
    }
  };

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Food</th>
              <th>Doner name</th>
              <th>Expire Date</th>
              <th>Request Date</th>
              <th>Pickup Location</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((table) => (
              <tr key={table._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={table.img}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{table.name}</div>
                    </div>
                  </div>
                </td>
                <td>{table.Doner_name}</td>
                <td>{new Date(table.expiredate).toLocaleString()}</td>

                <td>{new Date(table.expiredate).toLocaleString()}</td>
                <td>{table.PickupLocation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FoodReq;

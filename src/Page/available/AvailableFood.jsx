import  {  useState } from "react";
import { Helmet } from "react-helmet-async";
import useAxios from "../../hook/useAxios";
import Card from "../../component/Card";
import { useQuery } from "@tanstack/react-query";

const AvailableFood = () => {
 
  const [layout, setLayout] = useState(false);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  const axiosSecure = useAxios();


  const { data, error, isLoading ,refetch} = useQuery({
    queryKey: ['available'], 
    queryFn: () => getData(), 
  });

  const getData = async () => {
    try {
      const res = await axiosSecure.get(`/Available-Foods?search=${search}&sort=${sort}`);
      return res.data;
    } catch (error) {
      throw new Error('Failed to fetch data');
    }
  };





  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await axiosSecure.get(
  //         `/Available-Foods?search=${search}&sort=${sort}`
  //       );
  //       setData(res.data);
  //     } catch (error) {
  //       console.error("Failed to fetch data:", error);
  //     }
  //   };
  //   fetchData();
  // }, [axiosSecure, search, sort]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.searchinput.value);
    refetch()
  };

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  return (
    <div>
      <Helmet>
        <title>Foodient | Available Food</title>
      </Helmet>
      <div className="flex items-center gap-4">
        <div>
          <select
            className="select select-bordered w-full max-w-xs"
            onChange={(e) =>( setSort(e.target.value),refetch())}
          >
            <option value="descending">Descending</option>
            <option value="ascending">Ascending</option>
          </select>
        </div>
        <div className="flex-grow">
          <form onSubmit={handleSearch}>
            <label className="input input-bordered flex items-center gap-2 rounded-full pr-0">
              <input
                name="searchinput"
                type="text"
                className="flex-1"
                placeholder="Search by Food name"
              />
              <button className="bg-[#E8751A] flex justify-center rounded-e-full py-3 text-white flex-1">
                Search
              </button>
            </label>
          </form>
        </div>
        <div>
          <button className="btn" onClick={() => (setLayout(!layout))}>
            Change layout
          </button>
        </div>
      </div>

      <div
        className={`grid ${
          layout ?"lg:grid-cols-2" :"lg:grid-cols-3"
        } md:grid-cols-2 grid-cols-1 gap-4 my-8`}
      >
        {data.map((pd) => (
          <Card key={pd._id} pd={pd}></Card>
        ))}
      </div>
    </div>
  );
};

export default AvailableFood;

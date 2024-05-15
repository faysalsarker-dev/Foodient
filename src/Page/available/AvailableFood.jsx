import { useState } from "react";
import { Helmet } from "react-helmet-async";
import useAxios from "../../hook/useAxios";
import Card from "../../component/Card";
import { useQuery } from "@tanstack/react-query";
import Lottie from "lottie-react";
import animationLoading from "../../../public/loading.json";
import { CiSearch } from "react-icons/ci";

const AvailableFood = () => {

  const [layout, setLayout] = useState(false);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  const axiosSecure = useAxios();

  
  const getData = async () => {
    try {
      const res = await axiosSecure.get(
        `/Available-Foods?search=${search}&sort=${sort}`
      );
      return res.data;
    } catch (error) {
      throw new Error("Failed to fetch data");
    }
  };

  
  const {
    data,
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["available"],
    queryFn: getData,
  });

 
  const handleSearch = (e) => {
    e.preventDefault();
    const val = e.target.searchinput.value;
    setSearch(val);
    refetch();
  };

  
  const handleReset = () => {
    setSearch('');
    setSort('');
    refetch();
  };

  if (isLoading)
    return (
      <div className="h-[80vh] flex justify-center items-center">
        <Lottie
          className="w-2/4"
          animationData={animationLoading}
          loop={true}
        />
      </div>
    );

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <Helmet>
        <title>Foodient | Available Food</title>
      </Helmet>
      
      {/* Search and filter options */}
      <div className="flex justify-center gap-4 flex-wrap">
        <div>
          <button className="btn border-[#FF5400] text-[#FF5400]" onClick={() => setLayout(!layout)}>
            Change Layout
          </button>
        </div>
        <div>
          <button className="btn" onClick={handleReset}>Reset</button>
        </div>
        <div>
          <select
            className="select select-bordered w-full max-w-xs"
            onChange={(e) => {
              setSort(e.target.value);
              refetch();
            }}
            defaultValue={sort}
          >
            <option value="" disabled>Filter By Expire Date</option>
            <option value="descending">Descending</option>
            <option value="ascending">Ascending</option>
          </select>
        </div>
        <div className="lg:w-1/3">
          <form onSubmit={handleSearch} className="flex">   
            <input type="text" name="searchinput" className="input w-full rounded-none rounded-l-full input-bordered" placeholder="Search" />
            <button type="submit" className="bg-[#FF5400] btn text-white rounded-none rounded-r-full">
              <CiSearch className="text-xl font-bold" />
            </button>
          </form>
        </div>
      </div>

      {/* Grid for displaying cards */}
      <div className={`grid ${layout ? "lg:grid-cols-2" : "lg:grid-cols-3"} md:grid-cols-2 grid-cols-1 gap-4 my-8`}>
        {/* Map through data and render Card component */}
        {data?.map((pd) => (
          <Card key={pd._id} pd={pd}></Card>
        ))}
      </div>
    </div>
  );
};

export default AvailableFood;

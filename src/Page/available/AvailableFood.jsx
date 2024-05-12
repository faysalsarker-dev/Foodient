import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

import useAxios from "../../hook/useAxios";

import Card from "../../component/Card";

const AvailableFood = () => {
  const [data, setData] = useState([]);
  const [layout,setLayout] = useState(false);
  const axiosSecure = useAxios();

  const [search,setSearch]=useState('')
  const [sort,setSort]=useState('')










  useEffect(() => {
    axiosSecure.get(`/Available-Foods?search=${search}&sort=${sort}`).then((res) => {
      console.log(res.data);
      setData(res.data);
      console.log('useeffect');
    });
  }, [axiosSecure,search,sort]);


const handleSeach=(e)=>{
  e.preventDefault()
  setSearch(e.target.searchinput.value)

}

console.log(sort);
  return (
    <div>
      <Helmet>
        <title>Foodient | Available Food</title>
      </Helmet>
      <div className="flex items-center  gap-4">
   <div>
          <select className="select select-bordered w-full max-w-xs" onChange={(e)=>setSort(e.target.value)}>
            <option disabled selected>
            Sorting by Food Expire Date
            </option>
            <option value='descending'>Descending</option>
            <option value='ascending'>ascending</option>
          </select>
   </div>
    <div className=" flex-grow">
         <form onSubmit={handleSeach}>
            <label className="input input-bordered flex items-center gap-2 rounded-full pr-0">
              <input name="searchinput" type="text" className="flex-1" placeholder="search by Food name" />
    
              <button className="bg-[#E8751A] flex justify-center rounded-e-full ml-20 py-3 text-white flex-1">
                seach
              </button>
            </label>
         </form>
    </div>

        <div>
          <button className="btn" onClick={()=>setLayout(!layout)}>Change layout</button>
        </div>
      </div>

      <div
        className={`grid lg:grid-cols-${layout?'2':'3'} md:grid-cols-2 grid-cols-1 gap-4 my-8`}
      >
        {data?.map((pd) => (
          <Card key={pd._id} pd={pd}></Card>
        ))}
      </div>
    </div>
  );
};

export default AvailableFood;

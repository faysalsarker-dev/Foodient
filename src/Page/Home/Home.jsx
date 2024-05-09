// import Slider from "../../component/Slider";
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
             <Helmet>
        <title>Foodient | Home</title>
       
      </Helmet>
            {/* <Slider></Slider> */}

            <div>
                <h3 className="text-3xl font-extrabold text-center">Featured Foods</h3>
            </div>

            
        </div>
    );
};

export default Home;
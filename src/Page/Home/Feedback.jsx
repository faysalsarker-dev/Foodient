import { useState } from "react";
import Rating from "react-rating";
import { toast } from "react-hot-toast";
import useAxios from "../../hook/useAxios"; // Assuming this is a custom hook for API calls

// Import Font Awesome icons
import "@fortawesome/fontawesome-free/css/all.min.css"; //
import useAuth from "./../../hook/useAuth";
import { useQuery } from "@tanstack/react-query";
import Lottie from "lottie-react";
import animetionLoading from "../../../public/loading.json";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

const Feedback = () => {
  const axiosSecure = useAxios();
  const { user } = useAuth();
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const getData = async () => {
    try {
      const { data } = await axiosSecure.get("/feedback");
      return data;
    } catch (err) {
      throw new Error("Failed to fetch data");
    }
  };

  const {
    data = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["feedback"],
    queryFn: () => getData(),
  });

  console.log(data);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const feedbackInfo = {
      rating,
      feedback,
      email: user?.email,
      userImg: user?.photoURL,
    };

    axiosSecure.post("/feedback", feedbackInfo).then((res) => {
      if (res.data) {
        toast.success("Thank you for your feedback!");
        setRating(0);
        setFeedback("");
        setIsOpen(false);
      } else {
        toast.error("An error occurred. Please try again later");
      }
    });
  };

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  return (
    <>
      <div>
        {error && <div>An error has occurred: +{error.message};</div>}
        {isLoading && (
          <div className="h-[80vh]  flex justify-center items-center">
            <Lottie
              className=" w-2/4"
              animationData={animetionLoading}
              loop={true}
            />
          </div>
        )}
      </div>

      <div className="my-6">
        <Swiper
          navigation={true}
          spaceBetween={30}
          centeredSlides={true}
          modules={[Autoplay, Navigation]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="mySwiper"
        >
          {data?.map((pd) => (
            <SwiperSlide key={pd._id}>
              <div className="flex flex-col p-4 justify-center items-center space-y-3">
                <div>
                  <div className="avatar">
                    <div className="w-20 rounded-full ring ring-[#FF5400] ring-offset-base-100 ring-offset-2">
                      <img src={pd.userImg} />
                    </div>
                  </div>
                </div>

                <div>
                  <Rating
                    className="text-[#FF5400] text-3xl"
                    initialRating={pd.rating}
                    emptySymbol="far fa-star"
                    fullSymbol="fas fa-star"
                    readonly={true}
                  />
                </div>

                <div>
                  <p>{pd.feedback}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div>
        <div className="text-center">
          {user ? (
            <button
              className="btn bg-[#FF5400] text-center text-white"
              onClick={handleOpenModal}
            >
              Provide Feedback
            </button>
          ) : (
            <Link to="/login">
              <button className="btn btn-outline">click here to login</button>
            </Link>
          )}
        </div>

        <dialog
          id="my_modal_5"
          className="modal modal-bottom sm:modal-middle"
          open={isOpen}
        >
          <div className="modal-box relative text-center">
            <h3 className="text-lg font-bold mb-4">Share your feedback</h3>

            <div className="flex flex-col gap-4">
              <div className="rating-container">
                <Rating
                  className="text-[#FF5400] text-3xl"
                  initialRating={rating}
                  emptySymbol="far fa-star"
                  fullSymbol="fas fa-star"
                  onChange={(newRating) => setRating(newRating)}
                />
              </div>

              <div className="feedback-textarea">
                <label htmlFor="feedback" className="text-gray-700 block mb-2">
                  Tell us what you think:
                </label>
                <textarea
                  id="feedback"
                  rows={5}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:border-[#FF5400]"
                  placeholder="Type your feedback here..."
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                />
              </div>
            </div>

            <div className="modal-action flex justify-end mt-4">
              <button
                type="button"
                className="btn btn-outline"
                onClick={handleCloseModal}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn bg-[#FF5400] text-white ml-2"
                onClick={handleSubmit}
              >
                Submit Feedback
              </button>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
};

export default Feedback;

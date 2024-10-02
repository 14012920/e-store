import { Search } from "lucide-react";
import React, { useState } from "react";
import AppRating from "./appRating";
import { Rating } from "react-simple-star-rating";
const ReviewList = () => {
  const [rating, setRating] = useState(0);

  // Catch Rating value
  const handleRating = (rate: number) => {
    setRating(rate);

    // other logic
  };
  return (
    <div className="flex justify-center items-center p-2 w-full bg-opacity-15 mt-4">
      <div className="w-full lg:w-full px-5 flex flex-col gap-2 p-5  lg:flex-row">
        <div className="flex flex-1 rounded-md items-baseline flex-col gap-2 px-2">
          <h3 className="text-md font-medium">Write a Reviews</h3>
          <form>
            <div>
              <Rating initialValue={2} onClick={handleRating} size={20} />
            </div>

            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              className="p-3 focus:outline-none w-full bg-white border my-4"
            />
            <textarea
              name="review"
              id="review"
              placeholder="Write a review"
              className="p-3 focus:outline-none w-full bg-white border"
            />

            <button className="p-2 bg-primary text-white rounded-sm mt-2">
              Submit
            </button>
          </form>
        </div>

        <div className="flex flex-col gap-3 flex-1 basis-1/3 border-t-[1px] border-r-0 lg:border-t-0  lg:border-l-[1px] px-6 ">
          <h1 className="pt-4 lg:pt-1 text-md font-medium">Customer Reviews</h1>
          <div className="flex flex-col gap-2  p-4 border-t-0 border border-r-0 border-l-0">
            <div className="flex justify justify-between">
              <div className="flex gap-1">
                <span className="font-medium text-nowrap">Jess Hopkins</span>
              </div>
              <div className="flex p-1">
                <Rating initialValue={3} readonly size={20} />
              </div>
            </div>

            <div>
              <p className="text-sm">
                {
                  "Gorgeous design! Even more responsive than the previous version. "
                }
              </p>
            </div>

            <div className="flex justify-between">
              <span className="font-light text-gray-500 text-sm">
                Feb 13, 2021
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4  p-4 border-t-0 border border-r-0 border-l-0">
            <div className="flex justify justify-between">
              <div className="flex gap-2">
                <span>Jess Hopkins</span>
              </div>
              <div className="flex p-1 gap-1 text-orange-300">
                <Rating initialValue={2} readonly size={20} />
              </div>
            </div>

            <div>
              Gorgeous design! Even more responsive than the previous version. A
              pleasure to use!
            </div>

            <div className="flex justify-between">
              <span>Feb 13, 2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewList;

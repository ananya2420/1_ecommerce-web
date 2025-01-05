import React from "react";
import BannerImg from "../../assets/women/women2.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
  return (
    <div className="min-h-[55vh] flex justify-center items-center py-12 sm:py-0">
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* Image Section */}
          <div data-aos="zoom-in" className="flex justify-center">
            <img
              src={BannerImg}
              alt="Banner"
              className="max-w-[400px] h-[350px] w-full object-cover drop-shadow-[-10px_10px_12px_rgba(0,0,0,0.2)]"
            />
          </div>

          {/* Text and Icon Details Section */}
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold">
                Winter Sale - Up to 50% Off
              </h1>
              <p
                data-aos="fade-up"
                className="text-sm text-gray-500 tracking-wide leading-5 mt-2"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
                reiciendis inventore iste ratione ex alias quis magni at optio.
              </p>
            </div>

            {/* Icon Features */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <GrSecure className="text-4xl h-12 w-12 shadow-sm p-2 rounded-full bg-violet-100 dark:bg-violet-400" />
                <p>Quality Products</p>
              </div>

              <div data-aos="fade-up" className="flex items-center gap-4">
                <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-2 rounded-full bg-orange-100 dark:bg-orange-400" />
                <p>Fast Delivery</p>
              </div>

              <div data-aos="fade-up" className="flex items-center gap-4">
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-2 rounded-full bg-yellow-100 dark:bg-yellow-400" />
                <p>Get Offers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

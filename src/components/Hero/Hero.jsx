import React from 'react';
import Image1 from '../../assets/hero/women.png';
import Image2 from '../../assets/hero/shopping.png';
import Image3 from '../../assets/hero/sale.png';
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Upto 50% off on all Men's Wear",
    description:
      "His Life will forever be Changed. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Image2,
    title: "30% off on all Women's Wear",
    description:
      "Who's there? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: Image3,
    title: "70% off on all Products Sale",
    description:
      "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Hero = ({ handleOrderPopup }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-grey-100 flex justify-center items-center dark:bg-grey-950 dark:text-white duration-200">
      
      {/* Background pattern */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-10"></div>

      {/* Hero section */}
      <div className="container mx-auto pb-8 sm:pb-0 px-4">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Text content section */}
              <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                <h1 data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true" className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                  {data.title}
                </h1>
                <p data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true" className="text-lg sm:text-xl text-gray-700 dark:text-gray-300">
                  {data.description}
                </p>
                <button
                  onClick={handleOrderPopup}
                  className="bg-gradient-to-r from-primary to-secondary text-white py-3 px-6 rounded-full mt-4 hover:scale-105 transform transition duration-200"
                >
                  Order Now
                </button>
              </div>

              {/* Image section */}
              <div className="flex justify-center items-center">
              <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10"
                  />
                <img src={data.img} alt={data.title} className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
      </div>
    
  );
};

export default Hero;


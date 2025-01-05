import React from "react";
import Img1 from "../../assets/shirt/shirt.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Casual Wear",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Img2,
    title: "Printed Shirt",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: Img3,
    title: "Women's Shirt",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const TopProducts = () => {
  return (
    <div className="container mx-auto p-6">
      {/* Header Section */}
      <div className="text-left mb-12">
        <p data-aos="fade-up" className="text-sm text-primary">
          Top Related Products
        </p>
        <h1 data-aos="fade-up" className="text-3xl font-bold">
          Best Products
        </h1>
        <p data-aos="fade-up" className="text-sm text-gray-400">
          Our biggest sale is here! Enjoy up to 70% off on all products. From
          essentials to luxury, shop your favorites before they’re gone.
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center">
        {ProductsData.map((product) => (
          <div
            key={product.id}
            className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-lg duration-300 group max-w-xs"
          >
            {/* Image Section */}
            <div className="h-[150px] flex justify-center items-center">
              <img
                src={product.img}
                alt={product.title}
                className="max-w-[140px] transform -translate-y-10 group-hover:scale-105 transition duration-300 drop-shadow-md"
              />
            </div>

            {/* Product Details */}
            <div className="p-4 text-center">
              {/* Star Rating */}
              <div className="w-full flex items-center justify-center gap-1 mb-2">
                {[...Array(4)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500" />
                ))}
              </div>

              <h2 className="text-xl font-bold mb-2">{product.title}</h2>
              <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                {product.description}
              </p>

              <button
                className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                onClick={() => alert(`Ordering ${product.title}`)}
              >
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProducts;

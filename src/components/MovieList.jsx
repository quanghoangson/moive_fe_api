import React from "react";
// import propTypes from "prop-types";
import ImgTemp from "../assets/temp-1.jpeg";

const MovieList = ({ title, data }) => {
  // console.log("check data", data.leghth);
  return (
    <div className="text-white p-10  mb-10">
      <h2 className="uppercase text-xl font-bold mb-4">{title}</h2>

      <div className="flex items-center space-x-4">
        {data.map((item) => (
          <div key={item.id} className="w-[250px] h-[400px]  relative group">
            <div className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full cursor-pointer">
              <div className="absolute top-0 left-0 w-full h-full bg-black/40  ">
                <img
                  src={`${import.meta.env.VITE_IMG_URL}${item.poster_path}`}
                  alt={item.title}
                  className="w-full h-full object-cover "
                />
                <div className="absolute bottom-8 left-6">
                  <p className="uppercase text-md ">
                    {item.title || item.original_title}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// MovieList.propTypes = {
//   title: propTypes.string,
//   data: propTypes.array,
// };

export default MovieList;

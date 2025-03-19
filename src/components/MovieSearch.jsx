import { useContext } from "react";
import { MovieContext } from "../Context/MovieProvider";

const MovieSearch = ({ title, data }) => {
  const { handleTrailers } = useContext(MovieContext);

  return (
    <div className="text-white p-10  mb-10">
      <h2 className="uppercase text-xl font-bold mb-4">{title}</h2>
    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 ">
        {data &&
          data.length > 0 &&
          data.map((item) => (
            <div
              key={item.id}
              className="w-[250px] h-[400px]  relative group mb-4"
              onClick={() => {
                handleTrailers(item.id);
              }}
            >
              <div className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full cursor-pointer">
                <div className="absolute top-0 left-0 w-full h-full bg-black/40 mb-4 ">
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

export default MovieSearch;

import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Modal from "react-modal";
import YouTube from "react-youtube";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 10,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 7,
  },
  tablet: {
    breakpoint: { max: 1200, min: 600 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 2,
  },
};

const opts = {
  height: "390",
  width: "640",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};

const MovieList = ({ title, data }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [trainler, setTrainler] = useState("");

  const handleTrailers = async (id) => {
    setTrainler("");
    try {
      const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };

      const movieKey = await fetch(url, options);
      const data = await movieKey.json();
      setTrainler(data.results[0].key);
      setModalIsOpen(true);
    } catch (error) {
      setModalIsOpen(false);
      console.log(error);
    }
  };

  return (
    <div className="text-white p-10  mb-10">
      <h2 className="uppercase text-xl font-bold mb-4">{title}</h2>

      <Carousel responsive={responsive} className="flex items-center space-x-4">
        {data.map((item) => (
          <div
            key={item.id}
            className="w-[250px] h-[400px]  relative group "
            onClick={() => {
              handleTrailers(item.id);
            }}
          >
            <div className="  group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full cursor-pointer">
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
      </Carousel>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            position: "fixed",
            zIndex: 1000,
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "transparent",
            border: "none",
          },
        }}
      >
        <YouTube videoId={trainler} opts={opts} />;
      </Modal>
    </div>
  );
};

export default MovieList;

import { useState } from "react";

const Header = ({ onSearch }) => {
  const [movieKey, setMovieKey] = useState("");

  // const handleKeySearch = async (e) => {
  //   console.log(e.target.value);
  //   setMovieKey("");
  //   try {
  //     setMovieKey(e.target.value);
  //     onSearch(movieKey);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <div className="p-4 bg-black flex items-center justify-between ">
      <div className="flex items-center space-x-4">
        <h1 className="text-[30px] uppercase font-bold text-red-700">Moive</h1>
        <nav className="flex items-center space-x-4">
          <a href="#" className="text-white">
            Home
          </a>
          <a href="#" className="text-white">
            About
          </a>
          <a href="#" className="text-white">
            Contact
          </a>
        </nav>
      </div>

      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Seacrch"
          className="p-3 text-black bg-white"
          onChange={(e) => setMovieKey(e.target.value)}
          value={movieKey}
        />
        <button
          className="p-2 text-white bg-red-600"
          onClick={() => onSearch(movieKey)}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Header;

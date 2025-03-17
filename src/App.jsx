import { useEffect, useState } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import MovieList from "./components/MovieList";

function App() {
  const [Moive, setMovie] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };
      const url =
        "https://api.themoviedb.org/3/movie/popular?language=vi&page=1";
      const response = await fetch(url, options);
      const data = await response.json();
      setMovie(data.results);
      console.log("check results", data.results);
    };
    fetchMovies();
  }, []);

  return (
    <>
      <div className="bg-black pb-10">
        <Header />
        <Banner />
        <MovieList title={"Phim Hot"} data={Moive.slice(0, 5)} />
      </div>
    </>
  );
}

export default App;

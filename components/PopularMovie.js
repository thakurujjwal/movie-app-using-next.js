import MovieCard from "./MovieCard";
import React, { useState, useEffect } from "react";

const PopularMovie = ({ movies }) => {
  const [searchTitle, setSearchTitle] = useState("");
 
  return (
    <>
      <input type="search"  className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-white-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-white-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 max-w-2xl mx-auto m-5" placeholder="Search here, movies & show..." required  onChange={(e) => setSearchTitle(e.target.value)}/> 
      <div className="bg-gray-700 container max-w-7xl mx-auto pb-10 px-4">
      <h1 className="text-white text-2xl mt-8 mb-5">What's Popular</h1>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {movies.filter((movie) => {
            if (searchTitle === "") {
              return movie;
            } else if (
              movie.title.toLowerCase().includes(searchTitle.toLowerCase())
            ) {
              return movie;
            }
          })
            .map((movie) => <MovieCard movie={movie} key={movie.id} />)}
      </div>
      </div>
      </>
  );
};

export default PopularMovie;
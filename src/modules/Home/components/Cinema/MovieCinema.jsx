import React, { useState, useEffect, useCallback } from "react";

import Cinema from "./components/Cinema";
import MovieCinemaAddress from "./components/MovieCinemaAddress";
import MovieCinemaDate from "./components/MovieCinemaDate";
const MovieCinema = () => {
  const [movieId, uscount] = useState("BHDStar");
  const [movieCinemaId,setmovieCinemaId] = useState("bhd-star-cineplex-bitexco")
  const getAddres = (movieId) => {
    uscount(movieId);
   
  };
  const getDate = (movieCinemaId) =>{
    setmovieCinemaId(movieCinemaId)
    console.log(movieCinemaId)
  }

  return (
    <div className="containerMovieShow" id="MovieShow">
      <div className="containerMovieFlex">
        <div className="MuiTabs-flexContainer1">
          <div className="containerCinemaMovie">
            <Cinema getAddres={getAddres} getDate={getDate}/>
            <MovieCinemaAddress getDate={getDate} movieId={movieId} />
          </div>
        </div>
          <MovieCinemaDate movieId={movieId} movieCinemaId={movieCinemaId} />
      </div>
    </div>
  );
};

export default MovieCinema;

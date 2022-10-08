import React, { useState } from "react";
import movieAPI from "apis/movieAPI";
import { useDispatch } from "react-redux";
import useRequest from "hooks/useRequest";
import CinemaFromMovie from "./component/CinemaFromMovie/CinemaFromMovie";
import TimeFromMovie from "./component/TimeFromMovie/TimeFromMovie";
import { Prev } from "react-bootstrap/esm/PageItem";
const Showtimes = ({ movieId }) => {
  const [movies, uscount] = useState([]);
  const [movieDateList, getMovieDateList] = useState([]);

  const handleCinema = (cinemaCode) => {
    uscount(cinemaCode);
  };

  const handleMovieDateList = (cinemaId) => {
    getMovieDateList(cinemaId);
  };

  const {
    data: cinema,
    isLoading,
    error,
  } = useRequest(() => movieAPI.getMovieShowtimeInformation(movieId));
  console.log(cinema);

  return (
    <div className="d-flex container m-5">
      <div className="col-1 border-end">
        {cinema?.heThongRapChieu?.map((cinema) => {
          return (
            <button
              onClick={() => handleCinema(cinema.cumRapChieu)}
              className="d-block cinema-logo mb-3"
              key={cinema.maHeThongRap}
            >
              <span className="MuiTab-wrapper">
                <div className="MuiAvatar-circle">
                  <img
                    alt="bhd-star-cineplex"
                    src={cinema.logo}
                    className="MuiAvatar-img cinema-scale w-100"
                  />
                </div>
              </span>
            </button>
          );
        })}
      </div>
      <div className="col-11 d-flex">
        <div className="col-4 cinema" >
          <CinemaFromMovie
            movies={movies}
            handleMovieDateList={handleMovieDateList}
          />
        </div>
        <div className="col-6 cinema">
          <TimeFromMovie movieDateList={movieDateList} />
        </div>
      </div>
    </div>
  );
};

export default Showtimes;

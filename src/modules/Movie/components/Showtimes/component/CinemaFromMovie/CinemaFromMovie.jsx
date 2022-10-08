import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useRequest from "hooks/useRequest";
import movieAPI from "apis/movieAPI";
const CinemaFromMovie = ({ movies, handleMovieDateList }) => {

  return (
    <div>
      {movies?.map((cinema) => {
        return (
          <div className="ps-4" key={cinema.maCumRap}>
            <button
              onClick={() => handleMovieDateList(cinema.lichChieuPhim)}
              style={{ backgroundColor: "transparent", display: "block" }}
              className="mb-3 movie-title "
            >
              <img
                className="rounded-3 MuiAvatar-circle me-3"
                src={cinema.hinhAnh}
                alt=""
              />
              <span className="fw-semibold">{cinema.tenCumRap}</span>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default CinemaFromMovie;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import movieAPI from "apis/movieAPI";
import useRequest from "hooks/useRequest";
import { useNavigate } from "react-router-dom";
const TimeFromMovie = ({ movieDateList, cinema }) => {
  // const {
  //   data: moviesShow,
  //   isLoading,
  //   error,
  // } = useRequest(() => movieAPI.getMovieDetails());
  var moment = require("moment");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleBooking = (timeId) => {
    dispatch({ type: "remove" });
    navigate(`/booking/${timeId}`);
  };
  return (
    <div>
      <div className=" ps-4">
        {movieDateList?.map((item) => {
          return (
            <div className="mb-3" key={item.maLichChieu}>
              
              <button
                onClick={() => handleBooking(item.maLichChieu)}
                className="showtimes d-inline-block "
              > 
                 {moment(item.ngayChieuGioChieu).format("DD/MM/yyyy")}
                 <p>
                 {moment(item.ngayChieuGioChieu).format("hh:mm A")}
                 </p>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TimeFromMovie;

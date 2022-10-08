import React from "react";
import useRequest from "hooks/useRequest";
import movieAPI from "../../../../../apis/movieAPI";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const MovieCinemaDate = ({ getDate, movieId, movieCinemaId }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    data: movie2,
    isLoading,
    error,
    clearCache,
  } = useRequest(() => movieAPI.getMovieCinemaDateDetails(movieId), {
    isManual: false,
    deps: [movieId],
  });

  const movieCinema1 = movie2?.map((it) => {
    return it.lstCumRap.filter((i, index) => {
      if (i.maCumRap === movieCinemaId) {
        return i;
      }
    });
  });

  const handleMovieShowing = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  const handleBooking = (timeId) => {
    dispatch({ type: "remove" });
    navigate(`/booking/${timeId}`);
  };
  // console.log(movieCinema1);
  return (
    <div className="jss424">
      {movieCinema1?.map((movieCinemaList) => {
        return (
          <div key={movieCinemaList}>
            {movieCinemaList.map((a) => {
              return (
                <div key={a.maCumRap}>
                  {a.danhSachPhim.map((item) => {
                    console.log(item);
                    return (
                      <div className="cardCinema" key={item.maPhim}>
                        <img
                          alt={item.tenPhim}
                          src={item.hinhAnh}
                          className="imgCinema"
                          onClick={() => handleMovieShowing(item.maPhim)}
                        />
                        <div className="jss171">
                          <h2 className="MuiTypography-cardCinema">
                            <span className="jss164">C18</span>
                            {item.tenPhim}
                          </h2>
                          <div className="cardCinema-date">
                            {item.lstLichChieuTheoPhim.map((showTimes) => {
                              return (
                                <a
                                  className="cardCinema-date-list"
                                  onClick={() =>
                                    handleBooking(showTimes.maLichChieu)
                                  }
                                  key={showTimes.maLichChieu}
                                >
                                  <div className="cardCinemaContent-date-list">
                                    <p>
                                      {" "}
                                      {showTimes.ngayChieuGioChieu.substring(
                                        0,
                                        10
                                      )}
                                    </p>
                                    <p> ~ </p>
                                    <h3>
                                      {showTimes.ngayChieuGioChieu.substring(
                                        11,
                                        16
                                      )}
                                    </h3>
                                  </div>
                                </a>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default MovieCinemaDate;

import React, { useState, useEffect } from "react";
import useRequest from "hooks/useRequest";
import movieAPI from "apis/movieAPI";
import { NavLink } from "react-router-dom";

const BookTicket = () => {
  var moment = require("moment");
  const [maPhim, setMaPhim] = useState({});
  const [thongTinPhim, setThongTinPhim] = useState([]);
  const [maCumRap, setMaCumRap] = useState();
  let [ngayChieu, setNgayChieu] = useState();
  let [maLichChieu, setMaLichChieu] = useState();

  const handleInput = (event) => {
    const maPhim = parseInt(event.target.value);
    setMaPhim(maPhim);
  };

  var handleInputCumRap = (event) => {
    const maCumRap = event.target.value;
    setMaCumRap(maCumRap);
  };

  var handleInputLichChieu = (event) => {
    const maLichChieu = event.target.value;
    setMaLichChieu(maLichChieu);
  };

  var handleInputNgayChieu = (event) => {
    const ngayChieu = event.target.value;
    setNgayChieu(ngayChieu);
  };

  const {
    data: movies,
    isLoading,
    error,
  } = useRequest(() => movieAPI.getMovies());

  const { data: movie1 } = useRequest(
    () => movieAPI.getMovieShowtimeInformation(maPhim),
    {
      isManual: false,
      deps: [maPhim],
    }
  );

  const renderDSPhim = () => {
    return movies?.map((film, index) => {
      return (
        <option value={film.maPhim} key={index}>
          {film.tenPhim}
        </option>
      );
    });
  };

  const renderCumRap = () => {
    return movie1?.heThongRapChieu?.map((rap) => {
      return rap.cumRapChieu?.map((cumRap, index) => {
        return (
          <option value={cumRap.maCumRap} key={index}>
            {cumRap.tenCumRap}
          </option>
        );
      });
    });
  };

  const groupBy = (array, key) => {
    // Return the end result
    return array.reduce((result, currentValue) => {
      // If an array already present for key, push it to the array. Else create an array and push the object
      (result[moment(currentValue[key]).format("yyyy-MM-DD")] =
        result[moment(currentValue[key]).format("yyyy-MM-DD")] || []).push(
        currentValue
      );
      // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
      return result;
    }, {}); // empty object is the initial value for result object
  };

  const renderNgayChieu = () => {
    return movie1?.heThongRapChieu?.map((rap) => {
      return rap.cumRapChieu.map((cumRap) => {
        if (maCumRap === cumRap.maCumRap) {
          const listLichChieu = groupBy(
            cumRap.lichChieuPhim,
            "ngayChieuGioChieu"
          );
          let entries = Object.entries(listLichChieu);
          let dataLayout = entries.map(([value], i) => {
            return (
              <option value={value} key={i}>
                {moment(value).format("DD-MM-yyyy")}
              </option>
            );
          });
          return dataLayout;
        } else {
          return null;
        }
      });
    });
  };

  const renderGioChieu = () => {
    return movie1?.heThongRapChieu?.map((rap) => {
      return rap.cumRapChieu?.map((cumRap) => {
        if (maCumRap === cumRap.maCumRap) {
          const listLichChieu = groupBy(
            cumRap.lichChieuPhim,
            "ngayChieuGioChieu"
          );
          let entries = Object.entries(listLichChieu);
          let dataLayout = entries.map(([index, value], i) => {
            return value.map((item) => {
              if (ngayChieu === index) {
                return (
                  <option value={item.maLichChieu} key={i}>
                    {moment(item.ngayChieuGioChieu).format("hh:mm A")}
                  </option>
                );
              } else {
                return null;
              }
            });
          });
          return dataLayout;
        }
      });
    });
  };

  const renderDatVe = () => {
    if (maLichChieu) {
      return (
        <NavLink to={`/booking/${maLichChieu}`}>
          <button className="btn-style draw-border" style={{height: 40 }}>ĐẶT VÉ</button>
        </NavLink>
      );
    } else {
      return <button className="btn-style-disable" style={{height: 40 }}>ĐẶT VÉ</button>;
    }
  };

  return (
    <div className="bookMovie" id="bookMovie">
      <div className="row">
        <div id="movie__dropdown" className="select__item col-md-2 col-xs-6">
          <div className="select__form">
            <select
              name="movie"
              id="slct"
              defaultValue={"DEFAULT"}
              onChange={handleInput}
            >
              <option value="DEFAULT">Chọn phim</option>
              {renderDSPhim()}
            </select>
          </div>
        </div>
        <div id="theater__dropdown" className="select__item col-md-2 col-xs-6">
          <div className="select__form">
            <select
              name="slct"
              id="slct"
              onChange={handleInputCumRap}
              defaultValue={"DEFAULT"}
            >
              <option value="DEFAULT">Chọn rạp</option>
              {renderCumRap()}
            </select>
          </div>
        </div>
        <div
          id="chooseday__dropdown"
          className="select__item col-md-2 col-xs-6"
        >
          <div className="select__form">
            <select
              name="slct"
              id="slct"
              onChange={handleInputNgayChieu}
              defaultValue={"DEFAULT"}
            >
              <option value="DEFAULT">Chọn ngày</option>
              {renderNgayChieu()}
            </select>
          </div>
        </div>
        <div id="showtime__dropdown" className="select__item col-md-2 col-xs-6">
          <div className="select__form">
            <select
              name="slct"
              id="slct"
              defaultValue={"DEFAULT"}
              onChange={handleInputLichChieu}
            >
              <option value="DEFAULT">Chọn giờ</option>
              {renderGioChieu()}
            </select>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 select__item button__form">
          {renderDatVe()}
        </div>
      </div>
    </div>
  );
};

export default BookTicket;

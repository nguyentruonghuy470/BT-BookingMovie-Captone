import React, { Fragment } from "react";
import useRequest from "hooks/useRequest";
import movieAPI from "apis/movieAPI";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import "../ChairList/css/css.css";
const ChairList = ({ timeId }) => {

  const {
    data: chairs,
    isLoading,
    error,
  } = useRequest(() => movieAPI.getChairList(timeId));
  const dispatch = useDispatch();
  const { bookingList } = useSelector((state) => state.movie);

  const handleBooking = (isBooking) => {
    dispatch({ type: "booking", isBooking });
  }

  const checkChairBooked = (id) => {
    const index = bookingList.findIndex((item) => item.maGhe === id);

    if (index === -1) {
      return false;
    }
    return true;
  };
  return (
    <>
      <div className=" py-4 d-flex">
        <div className="col-1">
          <div className="d-flex flex-column">
            <p className=" chair-col">A</p>
            <p className=" chair-col">B</p>
            <p className=" chair-col">C</p>
            <p className=" chair-col">D</p>
            <p className=" chair-col">E</p>
            <p className=" chair-col">F</p>
            <p className=" chair-col">G</p>
            <p className=" chair-col">H</p>
            <p className=" chair-col">I</p>
            <p className=" chair-col">J</p>
          </div>
        </div>
        <div className="col-11 d-flex flex-wrap">
          {chairs?.danhSachGhe?.map((chair, index) => {
            return (
              <button
                onClick={() => handleBooking(chair, chair.maGhe, index)}
                className="chairs"
                key={chair.maGhe}
                disabled={chair.daDat}
                style={{
                  backgroundColor: chair.daDat
                    ? "rgb(118, 118,118)"
                    : chair.loaiGhe === "Vip"
                    ? "#f4a200"
                    : checkChairBooked(chair.maGhe)
                    ? "#2f8100"
                    : "",
                  cursor: chair.daDat ? "not-allowed" : "pointer",
                  opacity: (chair.daDat) ? "0.5" : "1",
                  disabled : chair.daDat ? true : false,
                }}
              >
                {chair.stt}
              </button>
            );
          })}
        </div>
      </div>
      <div className="d-flex flex-row">
        <div className="me-3">
          <div
            style={{
              display: "inline-block",
              width: "24px",
              height: "24px",
              backgroundColor: "#514e4e",
            }}
            className="rounded-1"
          ></div>{" "}
          Ghế thường
        </div>
        <div className="me-3">
          <div
            style={{
              display: "inline-block",
              width: "24px",
              height: "24px",
              backgroundColor: "#f4a200",
            }}
            className="rounded-1"
          ></div>{" "}
          Ghế VIP
        </div>
        <div className="me-3">
          <div
            style={{
              display: "inline-block",
              width: "24px",
              height: "24px",
              opacity: 0.5,
              backgroundColor: "rgb(118, 118,118)",
            }}
            className="rounded-1"
          ></div>{" "}
          Ghế đã đặt
        </div>
        <div className="me-3">
          <div
            style={{
              display: "inline-block",
              width: "24px",
              height: "24px",
              backgroundColor: "#2f8100",
            }}
            className="rounded-1"
          ></div>{" "}
          Ghế đang chọn
        </div>
      </div>
    </>
  );
};

export default ChairList;

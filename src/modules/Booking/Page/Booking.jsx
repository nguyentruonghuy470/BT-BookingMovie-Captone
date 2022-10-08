import React from "react";
import ChairList from "../component/ChairList";
import { useParams } from "react-router-dom";
import BookingInfo from "../component/BookingInfo";
import Swal from "sweetalert2";
import { Navigate } from "react-router-dom";

const Booking = () => {
  const { timeId } = useParams();
  const info = JSON.parse(localStorage.getItem("user"));
  if (!info) {
    Swal.fire({
      icon: "warning",
      title: "Bạn chưa đăng nhập",
      buttons: "Ok",
    });
    return <Navigate to= '/login' />;;
  }
  // if (!info) {
  //   return navigate("/");
  // }
  return (
    <div className="containerBooking py-5 m-container d-flex">
      <div className="col-8">
        <h4 className="text-dark w-75 m-auto border-bottom border-4 text-center border-warning">
          MÀN HÌNH
        </h4>
        <ChairList timeId={timeId} />
      </div>
      <div className="col-4">
        <BookingInfo timeId={timeId} />
      </div>
    </div>
  );
};

export default Booking;

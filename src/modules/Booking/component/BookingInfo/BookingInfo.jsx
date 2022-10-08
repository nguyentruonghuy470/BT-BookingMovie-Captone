import React from "react";
import useRequest from "hooks/useRequest";
import movieAPI from "apis/movieAPI";

import { message, notification } from "antd";
import { useSelector } from "react-redux";

import Swal from "sweetalert2";
const BookingInfo = ({ timeId }) => {
  const { bookingList } = useSelector((state) => state.movie);

  const defaultValue = {
    maLichChieu: timeId,
    danhSachVe: bookingList,
  };
  const {
    data: chairs,
    isLoading,
    error,
  } = useRequest(() => movieAPI.getChairList(timeId));

  const totalPay = bookingList.reduce(
    (total, value) => (total += value.giaVe),
    0
  );

  const handleBooking = async (defaultValue) => {
    try {
      await movieAPI.getBooking(defaultValue);
      Swal.fire({
        icon: "success",
        title: "Đặt vé thành công",
        text: "Kiểm tra trong lịch sử đặt vé!",
      }).then((willDelete) => {
        if (willDelete) {
          Swal.fire("Thanh toán thành công! Chúc bạn xem phim vui vẻ", {
            icon: "success",
          });
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        } else {
          Swal.fire("Chọn lại nào!");
        }
      });
    } catch (error) {
      notification.warning({
        message: "Đặt vé thất bại",
      });
    }
  };
  return (
    <div className="bookinginfo border-dark border-2 p-3">
      <h4 className="py-3 border-bottom border-dark border-1 text-dark text-center">
        {chairs?.thongTinPhim.tenPhim}
      </h4>
      <div className="d-flex justify-content-between py-3 fw-semibold border-1 border-bottom border-dark">
        <span>Ngày khởi chiếu :</span>{" "}
        <span>
          {chairs?.thongTinPhim.ngayChieu} {chairs?.thongTinPhim.gioChieu}
        </span>{" "}
      </div>
      <div className="d-flex justify-content-between py-3 fw-semibold border-1 border-bottom border-dark">
        <span> Cụm Rạp :</span> <span></span>
        {chairs?.thongTinPhim.tenCumRap}
      </div>
      <div className="d-flex justify-content-between py-3 fw-semibold border-1 border-bottom border-dark">
        <span>Rạp : </span> <span>{chairs?.thongTinPhim.tenRap}</span>{" "}
      </div>
      <div className="d-flex justify-content-between py-3 fw-semibold border-1 border-bottom border-dark">
        <span>Ghế chọn :</span>{" "}
        <span>
          {bookingList?.map((chair) => {
            return <span key={chair.maGhe}>{chair.tenGhe}, </span>;
          })}
        </span>
      </div>
      <div className="d-flex justify-content-between py-3 fw-semibold border-1 border-bottom border-dark">
        <span>Ưu đãi : </span>
      </div>
      <div className="d-flex justify-content-between py-3 fw-semibold border-1 border-bottom border-dark">
        <span>Tổng Tiền :</span> <span>{totalPay}</span>
      </div>
      <button
        className="mt-3 btn-style w-100 fs-5"
        style={{height: 40 }}
        onClick={() => handleBooking(defaultValue)}
      >
        ĐẶT VÉ
      </button>
    </div>
  );
};

export default BookingInfo;

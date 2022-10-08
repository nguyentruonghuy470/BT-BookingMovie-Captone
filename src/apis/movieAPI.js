import axiosClient from "./axiosClient";
import { domain } from "../config/setting";

const movieAPI = {
  getMovies: () => {
    return axiosClient.get("QuanLyPhim/LayDanhSachPhim", {
      params: {
        maNhom: "GP01",
      },
    });
  },
  getBanners: () => {
    return axiosClient.get("QuanLyPhim/LayDanhSachBanner");
  },

  getMovieDetails: (movieId) => {
    return axiosClient.get("QuanLyPhim/LayThongTinPhim", {
      params: {
        maPhim: movieId,
      },
    });
  },
  getMovieCinema: () => {
    return axiosClient.get("QuanLyRap/LayThongTinHeThongRap");
  },

  getMovieCinemaDetails: (movieId) => {
    return axiosClient.get("QuanLyRap/LayThongTinCumRapTheoHeThong", {
      params: {
        maHeThongRap: movieId,
      },
    });
  },

  getMovieCinemaDateDetails: (movieId) => {
    return axiosClient.get("QuanLyRap/LayThongTinLichChieuHeThongRap", {
      params: {
        maHeThongRap: movieId,
      },
    });
  },

  getMovieShowtimeInformation: (movieId) => {
    return axiosClient.get(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movieId}`);
  },
  
  getChairList: (timeId) => {
    return axiosClient.get("QuanLyDatVe/LayDanhSachPhongVe", {
      params: {
        maLichChieu: timeId,
      },
    });
  },
  getBooking: (list) => {
    return axiosClient.post(`${domain}/QuanLyDatVe/DatVe`, list);
  },
};

export default movieAPI;

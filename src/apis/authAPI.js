import axiosClient from "./axiosClient";

const authAPI = {
  login: (values) => {
    return axiosClient.post("QuanLyNguoiDung/DangNhap", values);
  },

  register: (values) => {
    return axiosClient.post("QuanLyNguoiDung/DangKy", {
      ...values,
      maNhom: "GP01",
    });
  },
  infoUser: (values) => {
    return axiosClient.post("QuanLyNguoiDung/ThongTinTaiKhoan", values);
  },
  updateInfoUser: (values) => {
    return axiosClient.put("QuanLyNguoiDung/CapNhatThongTinNguoiDung", values);
  },
};

export default authAPI;

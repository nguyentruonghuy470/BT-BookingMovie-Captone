import React from "react";
import InfoTicketBooked from "./InfoTicketBooked/InfoTicketBooked";
import EditInformation from "./EditInformation/EditInformation";
import { useNavigate } from "react-router-dom";
import useRequest from "hooks/useRequest";
import authAPI from "apis/authAPI";
import { Table } from "@mantine/core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

const UserInformation = () => {
  const info = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const {
    data: infoUser,
    isLoading,
    error,
  } = useRequest(() =>
    authAPI.infoUser(JSON.parse(localStorage.getItem("user")))
  );

  if (!info) {
    return navigate("/");
  }
  return (
    <div className="profile container-fluid text-light">
      <div className="row"> 
        <div className="col-12 col-avt">
          <div className="img-avt p-5 text-center">
            <img src="https://i.ibb.co/PCjW83Y/avt.png" alt="hinhanh" />
          </div>
          <div className="tableInfo">
            <div className="row">
              <div className="col-md-4 col-sm-12 col-left bg-dark">
                <h2 className="info-title">Thông tin cá nhân</h2>
                <Table verticalSpacing="md" fontSize="md">
                  <thead className="tableInfoUser">
                    <tr>
                      <th>Tài khoản</th>
                      <th>{infoUser?.taiKhoan}</th>
                    </tr>
                    <tr>
                      <th>Họ tên</th>
                      <th> {infoUser?.hoTen}</th>
                    </tr>
                    <tr>
                      <th>Nhóm</th>
                      <th> {infoUser?.maNhom}</th>
                    </tr>
                    <tr>
                      <th>Email</th>
                      <th> {infoUser?.email}</th>
                    </tr>
                    <tr>
                      <th>Số điện thoại</th>
                      <th>{infoUser?.soDT}</th>
                    </tr>
                    <tr>
                      <th>
                        <FontAwesomeIcon
                          className="iconUser"
                          icon={faCircleUser}
                          color="#9e9e9e"
                        />
                      </th>
                      <th> {info.maLoaiNguoiDung}</th>
                    </tr>
                  </thead>
                </Table>
              </div>
              <div className="col-md-7 col-sm-12 col-right bg-dark">
                <div id="accordion">
                  <EditInformation infoUser={infoUser} />
                  <InfoTicketBooked infoUser={infoUser} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInformation;

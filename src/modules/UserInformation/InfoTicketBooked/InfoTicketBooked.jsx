import React, { useState, useEffect } from "react";

import { Button, Collapse } from "@mantine/core";
const InfoTicketBooked = ({ infoUser }) => {
  var moment = require("moment");
  const [opened, setOpened] = useState(false);
  
  const renderInfoBooking = () => {
    return infoUser?.thongTinDatVe?.map((ticket, index) => {
      return (
        <tr key={index}>
          <th scope="row">{"#" + Math.floor(Math.random() * 99999)}</th>
          <td>{ticket.tenPhim}</td>
          <td>
            {moment(ticket.ngayDat).format("DD-MM-yyyy")}
            <p>{moment(ticket.ngayDat).format("hh:mm A")}</p>
          </td>
          <td>
            <ul>
              {ticket.danhSachGhe?.map((ghe, index) => {
                return <li key={index}>Ghế: {ghe.tenGhe}</li>;
              })}
            </ul>
          </td>
        </tr>
      );
    });
  };
  return (
    <div className="card">
      <div className="card-header" id="headingOne">
        <h2 className="mb-0">
          <Button onClick={() => setOpened((o) => !o)}>Lịch sử đặt vé</Button>
        </h2>
      </div>
      <Collapse in={opened}>
        <div className="card-body">
          <table className="table table-hover">
            <thead className="bg-dark text-light">
              <tr>
                <th scope="col">Mã vé</th>
                <th scope="col">Tên phim</th>
                <th scope="col">Thời gian đặt</th>
                <th scope="col">Số ghế</th>
              </tr>
            </thead>
            <tbody>{renderInfoBooking()}</tbody>
          </table>
        </div>
      </Collapse>
    </div>
  );
};

export default InfoTicketBooked;

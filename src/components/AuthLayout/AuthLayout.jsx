import React from "react";
import { Col, Row } from "antd";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <Row>
      <Col span={8}>
        <Outlet />
      </Col>
    </Row>
  );
};

export default AuthLayout;

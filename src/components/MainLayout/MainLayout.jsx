import React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";

import Header from "../Header";
import Footer from "../Footer";
const MainLayout = () => {
  return (
    <Layout>
      <Header />
      <Layout.Content>
        {/* Nơi chứa component được định nghĩa trong router */}

        {/* component Outlet sẽ là nơi render ra các children route  */}
        <Outlet />
      </Layout.Content>
      <Footer />
    </Layout>
  );
};

export default MainLayout;

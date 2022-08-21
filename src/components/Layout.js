import { PageHeader } from "antd";
import { Content } from "antd/lib/layout/layout";
import React from "react";
import MainContain from "./MainContain";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <>
      <PageHeader className="site-page-header">
        <Navbar />
      </PageHeader>
      <Content className="content">
        <Sidebar />
        <MainContain />
      </Content>
    </>
  );
}

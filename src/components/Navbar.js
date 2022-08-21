import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Input } from "antd";
import React from "react";
import classes from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <div className={classes.TopNavbar}>
      <Input
        placeholder="Search Here"
        className={classes.search_class}
        prefix={<SearchOutlined />}
      ></Input>

      <div className={classes.LoginName}>
        <h3>Asraful Islam</h3>
        <Avatar size={40} icon={<UserOutlined />} />
      </div>
    </div>
  );
}

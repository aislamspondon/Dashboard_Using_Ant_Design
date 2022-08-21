import { React, useState } from "react";
import classes from "../styles/Sidebar.module.css";

export default function Sidebar() {
  const [toggle, setToggle] = useState(false);
  function toggleClick() {
    setToggle((toggle) => !toggle);
  }

  let toggleClassCheck = toggle ? "Sidebar_active__+r198" : "";
  return (
    <>
      <div className={classes.toggle} onClick={toggleClick}></div>
      <div className={`${classes.navigation} ${toggleClassCheck}`}>
        <ul>
          <li>
            <a href={<></>}>
              <span className={classes.icon}>
                <i class="fa-brands fa-pied-piper"></i>
              </span>
              <span className={classes.title}>Brand Name</span>
            </a>
          </li>
          <li>
            <a href={<></>}>
              <span className={classes.icon}>
                <i class="fa-solid fa-house-chimney"></i>
              </span>
              <span className={classes.title}>Dashboard</span>
            </a>
          </li>
          <li>
            <a href={<></>}>
              <span className={classes.icon}>
                <i class="fa-solid fa-users"></i>
              </span>
              <span className={classes.title}>Users</span>
            </a>
          </li>
          <li>
            <a href={<></>}>
              <span className={classes.icon}>
                <i class="fa-solid fa-shop"></i>
              </span>
              <span className={classes.title}>Shops</span>
            </a>
          </li>
          <li>
            <a href={<></>}>
              <span className={classes.icon}>
                <i class="fa-solid fa-basket-shopping"></i>
              </span>
              <span className={classes.title}>Products</span>
            </a>
          </li>
          <li>
            <a href={<></>}>
              <span className={classes.icon}>
                <i class="fa-solid fa-user"></i>
              </span>
              <span className={classes.title}>Admin Panel</span>
            </a>
          </li>
          <li>
            <a href={<></>}>
              <span className={classes.icon}>
                <i class="fa-solid fa-arrow-right-from-bracket"></i>
              </span>
              <span className={classes.title}>Log Out</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

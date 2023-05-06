import React from "react";
import "./topbar.css";
import { BsBell } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <h2 className="topbar_heading">Dashboard</h2>
        </div>
        <div className="topRight">
          <div className="searchBox">
            <input type="text" className="searchBar" placeholder="Search..." />
            <FiSearch className="searchIcon" />
          </div>
          <div className="topbarIconContainer">
            <BsBell />
          </div>
          <img
            src="https://images.pexels.com/photos/13394510/pexels-photo-13394510.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}

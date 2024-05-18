import React from "react";
import './header.css';
import config from "../config/appConfig.ts";
import {NavLink} from 'react-router-dom'

export default function Header() {
  return (
    <header className="header d-flex align-items-center sticked fixed-top stickied  border-bottom  justify-content-center align-items-center bg-white">
      <nav className="navbar navbar-expand-lg bg-body-white mx-lg-5" id="nav-header">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <h2>{config.APP_NAME}<span className="text-danger">.</span></h2>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center h6" id="navbarContent">
            <ul className="navbar-nav mb-2 mb-lg-0 gap-3">
              <li className="nav-item p-1">
                <a className="nav-link active" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item p-1">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item p-1">
                <a className="nav-link" href="#menu">
                  Menu
                </a>
              </li>
              <li className="nav-item p-1">
                <a className="nav-link" href="#events">
                  Events
                </a>
              </li>
              <li className="nav-item p-1">
                <a className="nav-link" href="#chefs">
                  Chefs
                </a>
              </li>
              <li className="nav-item p-1">
                <a className="nav-link" href="#galary">
                Gallery
                </a>
              </li>
              <li className="nav-item p-1 dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  href="#"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item p-1">
                <a className="nav-link" href="#contacts">
                  Contacts
                </a>
              </li>
            </ul>
          </div>
          <button className="btn btn-danger booking">Book a Table</button>
        </div>
      </nav>
    </header>
  );
}

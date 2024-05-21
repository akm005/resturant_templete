import React from "react";
import style from "./bookTable.module.css";
import SectionHeader from "../Utility/sectionHeader.tsx";
export default function BookTable() {
  return (
    <section id="book-a-table" className={style.booktable}>
      <div className="container">
        <SectionHeader
          title="Book a Table"
          description={["Book", "Your Stay", "With Us"]}
        />
        <div className="row gy-4">
          <div
            className={"col-lg-4 " + style["reservation-img"]}
            style={{ backgroundImage: `url(./assets/images/reservation.jpg)` }}
          ></div>
          <div className="col-lg-8 d-flex flex-column justify-content-center align-items-center" style={{backgroundColor:"rgba(55, 55, 63, 0.04)"}}>
            <form action="">
              <div className="row gy-4">
                <div className="col-lg-4 col-md-6">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    //   data-rule="minlen:4"
                    //   data-msg="Please enter at least 4 chars"
                  />
                  <div className="validate"></div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="email"
                    placeholder="Your Email"
                  />
                  <div className="validate"></div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <input
                    type="tel"
                    name="phone"
                    className="form-control"
                    id="phone"
                    placeholder="Your Phone"
                  />
                  <div className="validate"></div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <input
                    type="date"
                    name="date"
                    className="form-control"
                    id="date"
                    placeholder="Your DOB"
                  />
                  <div className="validate"></div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <input
                    type="time"
                    name="time"
                    className="form-control"
                    id="time"
                    placeholder="Your Time"
                  />
                  <div className="validate"></div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <input
                    type="number"
                    name="peoples"
                    className="form-control"
                    id="peoples"
                    placeholder="# of People"
                  />
                  <div className="validate"></div>
                </div>
              </div>
              <div className="form-group mt-3 w-100">
                <textarea
                  className="form-control"
                  name="message"
                  rows={5}
                  placeholder="Message"
                ></textarea>
                <div className="validate"></div>
              </div>
              <div className="mb-3">
                <div className="loading d-none">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message d-none">
                  Your booking request was sent. We will call back or send an
                  Email to confirm your reservation. Thank you!
                </div>
              </div>
              <div className="text-center ">
                <button className="btn btn-danger booking p-3 w-25" type="submit">
                  Book a Table
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

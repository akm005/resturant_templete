import React from "react";
import style from "./whyUs.module.css";

export default function WhyUs() {
  return (
    <section id="whyUs" className={style.sectionBG}>
      <div className={style.whyUs + " container"}>
        <div className="row">
          <div className="col-lg-4">
            <div className="why-box p-4 text-white bg-danger">
              <h3 className="mb-4 fw-bold fs-1 text-start">
                Why Choose Yummy?
              </h3>
              <p className="mb-4 text-start">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
                aute irure dolor in reprehenderit Asperiores dolores sed et.
                Tenetur quia eos. Autem tempore quibusdam vel necessitatibus
                optio ad corporis.
              </p>
              <div className="text-center mb-3">
                <a href="#" className={style["more-btn"]}>
                  Learn More <i className="bx bx-chevron-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-8 d-flex align-items-center">
            <div className="row gy-4">
              <div className="col-xl-4">
                <div className={style['icon-box'] + " d-flex flex-column justify-content-center align-items-center"}>
                  <i className="bi bi-clipboard-data mb-4"></i>
                  <h4 className="mb-4 fs-5">Corporis voluptates officia eiusmod</h4>
                  <p className="fs-6">
                    Consequuntur sunt aut quasi enim aliquam quae harum pariatur
                    laboris nisi ut aliquip
                  </p>
                </div>
              </div>
              <div className="col-xl-4">
              <div className={style['icon-box'] + " d-flex flex-column justify-content-center align-items-center"}>
                  <i className="bi bi-gem mb-4"></i>
                  <h4 className="mb-4 fs-5">Ullamco laboris ladore pan</h4>
                  <p className="fs-6">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                </div>
              </div>
              <div className="col-xl-4">
              <div className={style['icon-box'] + " d-flex flex-column justify-content-center align-items-center"}>
                  <i className="bi bi-inboxes mb-4"></i>
                  <h4 className="mb-4 fs-5">Labore consequatur incidid dolore</h4>
                  <p className="fs-6">Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

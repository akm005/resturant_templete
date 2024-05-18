import React from "react";
import style from "./heroSection.module.css";
export default function HeroSection() {
  return (
    <section
      id="hero"
      className={style.hero + " d-flex align-items-center " + style.section_bg}
    >
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
            <h2 className={style.bannerText}>
              {" "}
              Enjoy Your Healthy <br /> Delicious Food
            </h2>
            <p>
              Sed autem laudantium dolores. Voluptatem itaque ea consequatur
              eveniet. Eum quas beatae cumque eum quaerat.
            </p>
            <div className="d-flex m-2 justify-content-center align-items-center">
              <button className={style.buyNowButton + " btn btn-danger booking"}>Book a Table</button>
              <div className="d-flex mx-2">
              <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className=" d-flex align-items-center justify-content-center ">
              <i className={style['btn-watch-video'] + " bi bi-play-circle mx-2 fs-1"}></i>
                <span>Watch Video</span>
              </a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 order-1 order-lg-2 text-center text-lg-start">
            <img
              className="img-fluid"
              src="./assets/images/hero-img.png"
              alt="hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

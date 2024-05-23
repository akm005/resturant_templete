import React from "react";
import style from "./footer.module.css";
export default function Footer() {
  return (
    <footer id="footer" className={style.footer + ' bg-black pt-5'}>
      <div className="container d-flex flex-column text-white-50 position-relative">
        <div className="row gy-3 text-start mb-2">
          <div className="col-lg-3 col-md-6 d-flex align-items-start">
            <i className="bi bi-geo-alt icon fs-3 me-3"></i>
            <div>
              <h4 className="text-white fs-5">Address</h4>
              <p>
                A108 Adam Street <br />
                New York, NY 535022 - US
                <br />
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 d-flex align-items-start">
            <i className="bi bi-telephone icon fs-3 me-3"></i>
            <div>
              <h4 className="text-white fs-5">Reservations</h4>
              <p>
                <strong>Phone:</strong> +1 5589 55488 55
                <br />
                <strong>Email:</strong> info@example.com
                <br />
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 d-flex align-items-start">
            <i className="bi bi-clock icon fs-3 me-3"></i>
            <div>
              <h4 className="text-white fs-5">Opening Hours</h4>
              <p>
                <strong>Mon-Sat: 11AM</strong> - 23PM
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 d-flex align-items-start flex-column">
            <h4 className="text-white fs-5">Follow Us</h4>
            <div className="social-links d-flex position-relative fs-6">
              <a href="#" className={"twitter text-secondary rounded-circle " + style.socialContainer}>
                <i className="bi bi-twitter m-3"></i>
              </a>
              <a href="#" className={"facebook text-secondary rounded-circle " + style.socialContainer}>
                <i className="bi bi-facebook m-3"></i>
              </a>
              <a href="#" className={"instagram text-secondary rounded-circle " + style.socialContainer}>
                <i className="bi bi-instagram m-3"></i>
              </a>
              <a href="#" className={"linkedin text-secondary rounded-circle " + style.socialContainer}>
                <i className="bi bi-linkedin m-3"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="copyright fs-6">
        &copy; Copyright <strong><span>Yummy</span></strong>. All Rights Reserved
      </div>
      <div className="credits fs-6">
        Designed by <a className="text-decoration-none text-white fs-6" href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
      </div>
    </footer>
  );
}

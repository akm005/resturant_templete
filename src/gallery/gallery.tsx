import React from "react";
import style from "./gallery.module.css";
import './gallery.css'
import SectionHeader from "../Utility/sectionHeader.tsx";

let galeryImages = [
  "./assets/images/gallery/gallery-7.jpg",
  "./assets/images/gallery/gallery-8.jpg",
  "./assets/images/gallery/gallery-1.jpg",
  "./assets/images/gallery/gallery-2.jpg",
  "./assets/images/gallery/gallery-3.jpg",
  "./assets/images/gallery/gallery-4.jpg",
  "./assets/images/gallery/gallery-5.jpg",
  "./assets/images/gallery/gallery-6.jpg",
];
export default function Gallery() {
  return (
    <section className={style.gallerySection + " section-bg"} id="gallery">
      <div className="container">
        <SectionHeader title="Gallery" description={["Check", "Our Gallery"]} />
        <div id="galleryCarousel" className="carousel slide">
          <div className="carousel-indicators" style={{bottom:'-3.5em'}}>
            {galeryImages.map((_, i) => (
              <button
              key={i}
                type="button"
                data-bs-target="#galleryCarousel"
                data-bs-slide-to={`${i <= galeryImages.length ? `${i}` : "0"}`}
                className={`carouselIndicator ${i === 0 ? "active" : ""}`}
                aria-current={i === 0 ? "true" : "false"}
                aria-label={"Slide " + i}
              ></button>
            ))}
          </div>
          <div className="carousel-inner d-flex justify-content-center">
            {galeryImages.map((item,j)=>
            <div className={`carousel-item miniCard ${j === 0 ? "active" : ""}`} key={j}>
                 <img src={item} className="d-block w-100" alt="gallery"></img>
            </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

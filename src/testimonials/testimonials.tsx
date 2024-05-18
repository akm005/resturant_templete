import React from "react";
import SectionHeader from "./../Utility/sectionHeader.tsx";
import style from './testimonials.module.css';

const testamonialData = [
  {
    name: "Sara Wilsson",
    designation: "Designer",
    rating: 5,
    image: "./assets/images/testimonials/testimonials-2.jpg",
    comments:
      "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
  },
  {
    name: "Jena Karlis",
    designation: "Store Owner",
    rating: 5,
    image: "./assets/images/testimonials/testimonials-3.jpg",
    comments:
      "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
  },
  {
    name: "John Larson",
    designation: "Entrepreneur",
    rating: 5,
    image: "./assets/images/testimonials/testimonials-4.jpg",
    comments:
      "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid",
  },
  {
    name: "Saul Goodman",
    designation: "Ceo & Founder",
    rating: 5,
    image: "./assets/images/testimonials/testimonials-1.jpg",
    comments:
      "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className={style.testimonials + " section-bg"}>
      <div className="container">
      <SectionHeader
        title="Testimonials"
        description={["What Are They", "Saying About Us"]}
      />
      <div
        className={style.carousel + " carousel slide"}
        data-bs-ride="carousel"
        id="testimonialsCarousel"
      >
        <div className="carousel-indicators">
          {testamonialData.map((data,i)=><button
          key={data.name + i}
            type="button"
            data-bs-target="#testimonialsCarousel"
            data-bs-slide-to={i}
            className={`carouselIndicator ${(i===0)?" active":""}`}
            aria-current={(i===0)?"true":"false"}
            aria-label={"Slide " + (i+1)}
          ></button>)}
        </div>
        <div className="carousel-inner">
            {testamonialData.map((testa,j)=>
          <div className={`carousel-item ${(j===0)?"active":""}`} key={testa.comments + j}>
             <div className="testimonial-item">
                <div className="row gy-4 justify-content-center">
                  <div className="col-lg-6">
                    <div className="testimonial-content border-danger border-start ps-4 border-3 d-flex flex-column justify-content-start">
                      <p className="text-start">
                        <i className="bi bi-quote quote-icon-left fs-3 mx-2 text-danger"></i>
                        {testa.comments}
                        <i className="bi bi-quote quote-icon-right p-0 mx-2 text-danger rotateDown"></i>
                      </p>
                      <h3 className="text-start fs-5 fw-bold inter">{testa.name}</h3>
                      <h4 className="text-start fs-6 small text-secondary">{testa.designation}</h4>
                      <div className={style.stars + " text-start"}>
                        <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 text-center">
                    <img src={testa.image} className="img-fluid testimonial-img rounded-circle border border-white border-4" alt=""/>
                  </div>
                </div>
              </div> 
          </div>)}
        </div>
      </div>
      </div>
    </section>
  );
}

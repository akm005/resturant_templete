import React from "react";
import style from "./events.module.css";
import SectionHeader from "../Utility/sectionHeader.tsx";

const eventsData = [
  {
    name: "Custom Parties",
    price: 99,
    image: "./assets/images/events-1.jpg",
    description:
      "Quo corporis voluptas ea ad. Consectetur inventore sapiente ipsum voluptas eos omnis facere. Enim facilis veritatis id est rem repudiandae nulla expedita quas.",
  },
  {
    name: "Private Parties",
    price: 289,
    image: "./assets/images/events-2.jpg",
    description:
      "In delectus sint qui et enim. Et ab repudiandae inventore quaerat doloribus. Facere nemo vero est ut dolores ea assumenda et. Delectus saepe accusamus aspernatur.",
  },
  {
    name: "Birthday Parties",
    price: 499,
    image: "./assets/images/events-3.jpg",
    description:
      "Laborum aperiam atque omnis minus omnis est qui assumenda quos. Quis id sit quibusdam. Esse quisquam ducimus officia ipsum ut quibusdam maxime. Non enim perspiciatis.",
  },
];


let eventList = eventsData.map((item, j) => (
    <div
      className={` p-4 d-flex flex-column justify-content-end align-items-start text-white
       ${style.imageOverlay}`}
      key={item.name}
      style={{
        backgroundImage: `url(${item.image})`,
      }}
    >
      <h3 className="text-start fw-bold position-relative m-2">{item.name}</h3>
      <div className="price align-self-start text-start m-2 fs-2 fw-bold position-relative mb-2 border-bottom border-danger border-3">${item.price}</div>
      <p className="description text-start position-relative m-2">{item.description}</p>
    </div>
  ))

export default function Events() {
  return (
    <section id="events" className={style.events}>
      
        <SectionHeader
          title="Events"
          description={["share", "Your Moments", "In Our Resturent"]}
        />
        <div className="w-100 d-none d-lg-flex flex-row" style={{minHeight:"650px",gap:"3em"}}>
            {eventList}
        </div>
        <div
          className={" carousel w-100 slide d-flex d-lg-none justify-content-center align-items-center "}
          data-bs-ride="carousel"
          id="eventsCarousel"
        >
          <div className="carousel-indicators mt-2">
            {eventsData.map((data, i) => (
              <button
                key={data.name + i}
                type="button"
                data-bs-target="#eventsCarousel"
                data-bs-slide-to={i}
                className={`carouselIndicator ${i === 0 ? " active" : ""}`}
                aria-current={i === 0 ? "true" : "false"}
                aria-label={"Slide " + (i + 1)}
              ></button>
            ))}
          </div>
          <div className="carousel-inner w-100 d-flex flex-column flex-lg-row" style={{minHeight:"36em"}}>
            {eventList.map((list,i)=>
            <div className={`carousel-item ${i === 0 ? "active" : ""}`} key={i + "A"}>
                {list}
            </div>)}
          </div>
        </div>
      
    </section>
  );
}

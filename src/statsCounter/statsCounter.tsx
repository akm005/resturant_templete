import React from "react";
import style from "./statsCounter.module.css";

let statsData = [
  { counter: 232, name: "Clients" },
  { counter: 521, name: "Projects" },
  { counter: 1453, name: "Hours of Support" },
  { counter: 32, name: "Workers" },
];
export default function StatsCounter() {
  return (
    <section id="stats-counter" className={style["stats-counter"]}>
      <div className="container">
        <div className="row gy-4">
          {statsData.map((data) => (
            <div className="col-lg-3 col-md-6">
              <div className="stats-item p-4 text-center w-100 h-100">
                <span className="purecounter text-white display-5 fw-bold p-4">{data.counter}</span>
                <p className="text-white opacity-75 fs-6 fw-bold p-2">{data.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

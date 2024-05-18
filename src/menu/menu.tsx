import React from "react";
import style from "./menu.module.css";
import SectionHeader from "../Utility/sectionHeader.tsx";

const navItems = ["Starter", "Breakfast", "Lunch", "Dinner"];
const menuItem = [
  {
    title: "Magnam Tiste",
    description: "Lorem, deren, trataro, filede, nerada",
    price: 5.95,
    scr: "./assets/images/menu/menu-item-1.png",
  },
  {
    title: "Aut Luia",
    description: "Lorem, deren, trataro, filede, nerada",
    price: 14.95,
    scr: "./assets/images/menu/menu-item-2.png",
  },
  {
    title: "Est Eligendi",
    description: "Lorem, deren, trataro, filede, nerada",
    price: 8.95,
    scr: "./assets/images/menu/menu-item-3.png",
  },
  {
    title: "Eos Luibusdam",
    description: "Lorem, deren, trataro, filede, nerada",
    price: 12.95,
    scr: "./assets/images/menu/menu-item-4.png",
  },
  {
    title: "Eos Luibusdam",
    description: "Lorem, deren, trataro, filede, nerada",
    price: 12.95,
    scr: "./assets/images/menu/menu-item-5.png",
  },
  {
    title: "Laboriosam Direva",
    description: "Lorem, deren, trataro, filede, nerada",
    price: 9.95,
    scr: "./assets/images/menu/menu-item-6.png",
  },
];

export default function Menu() {
  return (
    <section id="menu" className={style.menu + " container"}>
      <SectionHeader title='Our Menu' description={['Check Our',"Yummy Menu"]}/>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <ul className="nav bg-body-white">
          {navItems.map((item, i) => (
            <li className="nav-item" key={item + i}>
              <a
                href={`#menu-${item}`}
                className={`nav-link ${(i===0)?"active" : ""}`}
                data-bs-toggle="tab"
                data-bs-target={`#menu-${item}`}
                aria-selected={(i===0)?true:false}
                role="tab"
              >
                <h4 className="fs-6 text-black font-weight-normal">{item}</h4>
              </a>
            </li>
          ))}
        </ul>
        <div className="tab-content">
          {navItems.map((item, j) => (
            <div
              className={`tab-pane fade ${(j===0)?"show active":"" } menu-${item}`}
              id={`menu-${item}`}
              key={item + j}
              role="tabpanel"
            >
              <div className="tab-header py-4 w-100 text-center mt-4">
                <p className="mb-0 text-secondary">Menu</p>
                <h3 className="fs-1 text-danger">{item}</h3>
              </div>
              <div className="row gy-5" key={item}>
                {menuItem.map((menu,i)=><div className="col-lg-4 menu-item" key={menu.title + i}>
                  <a
                    href={menu.scr}
                    className="glightbox"
                  >
                    <img
                      src={menu.scr}
                      className="menu-img img-fluid px-5"
                      alt=""
                    />
                  </a>
                  <h4 className="mt-2">{menu.title}</h4>
                  <p className="ingredients">
                    {menu.description}
                  </p>
                  <p className="price text-danger fs-5 fw-bold">${menu.price}</p>
                </div>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import style from "./chefs.module.css";
import SectionHeader from "../Utility/sectionHeader.tsx";
import Social from "./social.tsx";
let chefsData = [
  {
    name: "Walter White",
    designation: "Master Chef",
    image: "assets/images/chefs/chefs-1.jpg",
    description:
      "Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate.",
  },
  {
    name: "Sarah Jhonson",
    designation: "Patissier",
    image: "assets/images/chefs/chefs-2.jpg",
    description:
      "Quo esse repellendus quia id. Est eum et accusantium pariatur fugit nihil minima suscipit corporis. Voluptate sed quas reiciendis animi neque sapiente.",
  },
  {
    name: "William Anderson",
    designation: "Cook",
    image: "assets/images/chefs/chefs-3.jpg",
    description:
      "Vero omnis enim consequatur. Voluptas consectetur unde qui molestiae deserunt. Voluptates enim aut architecto porro aspernatur molestiae modi.",
  },
];

export default function Chefs() {
  return (
    <section id="chefs" className={style.chefs + " section-bg"}>
      <div className="container">
        <SectionHeader
          title="Chefs"
          description={["Our", "professional", "Chefs"]}
        />
        <div className="row gy-4">
          {chefsData.map((data, i) => (
            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch"
            >
              <div className={style.chefMember}>
                <div className={style.memberImg}>
                  <img
                    src={data.image}
                    className="img-fluid"
                    alt=""
                  />
                  <Social/>
                </div>
                <div className="member-info">
                  <h4 className="fw-bold">{data.name}</h4>
                  <span className="text-secondary fs-6 mb-3">{data.designation}</span>
                  <p className="fs-6 text-body-secondary openSans fst-italic mb-5">
                   {data.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react'
import style from './chefs.module.css'
export default function Social() {
  return (
    <div className={style.social + " d-flex flex-column align-items-center justify-content-center p-3"}>
    <a href=""><i className="bi bi-twitter fs-5 my-1 text-secondary"></i></a>
    <a href=""><i className="bi bi-facebook fs-5 my-1 text-secondary"></i></a>
    <a href=""><i className="bi bi-instagram fs-5 my-1 text-secondary"></i></a>
    <a href=""><i className="bi bi-linkedin fs-5 my-1 text-secondary"></i></a>
  </div>
  )
}

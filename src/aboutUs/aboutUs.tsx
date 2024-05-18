import React from 'react'
import style from './aboutUs.module.css'
import SectionHeader from '../Utility/sectionHeader.tsx'
export default function AboutUs() {
  return (
    <section id='about' className={style.about + ' container'}>
        <SectionHeader title='About Us' description={['Learn More',"About Us"]}/>
        <div className='row gy-4'>
            <div className={"col col-lg-7 position-relative " + style['about-img']}>
            <div className={style.callus + " position-absolute"}>
              <h4 className='fs-3'>Book a Table</h4>
              <p className='text-danger fs-2'>+1 5589 55488 55</p>
            </div>
            </div>
            <div className="col col-lg-5 d-flex align-items-end">
            <div className="content ps-0 ps-lg-5">
              <p className="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
              </p>
              <ul className='d-flex flex-column align-items-center justify-content-start'>
                <li><i className="bi bi-check2-all text-danger text-start "></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                <li><i className="bi bi-check2-all text-danger text-start "></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                <li><i className="bi bi-check2-all text-danger text-start "></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
              </ul>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
              </p>

              <div className="position-relative mt-4">
                <img src="./assets/images/about-2.jpg" className="img-fluid" alt=""/>
                <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className={"glightbox d-flex align-items-center justify-content-center " + style.playBtn}>
                <i className="bi bi-play-fill text-white fs-3"></i>
                </a>
              </div>
            </div>
            </div>
        </div>
    </section>
  )
}

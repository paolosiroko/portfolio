import React from "react";
import "./Project.css";
import Project1 from '../components/assets/ecommerce.PNG';
import Project2 from '../components/assets/blog.PNG';
import Project3 from '../components/assets/barber.PNG';
import Project4 from '../components/assets/documentfinder.PNG';
import Project5 from '../components/assets/tetris.PNG';
import Project6 from '../components/assets/dashboard.PNG';

function Project() {
  return (
    <div className="project component__space" id="Portfolio">
      <div className="heading">
        <h1 className="heading">Some of my Projects</h1>
        <p className="heading p__color">
          There are many variations of passages of Lorem Ipsum available,
        </p>
        <p className="heading p__color">
          but the majority have suffered alteration.
        </p>
      </div>
       <div className="container">
           <div className="row">

           <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project5} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">tetris game</h5>
                     <h4 className="project__text">simple html,css,Js tetris game NB: plays with keyboard </h4>
                     <a href="https://paolosirokohostingdomain.on.drv.tw/websites/www.paolo-tetris.com/" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>
             
             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project1} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Django ecommerce</h5>
                     <h4 className="project__text">Django,intergrated paypal API to checkout, buy and sell online</h4>
                     <a href="https://eccomerceapp.herokuapp.com/" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project2} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Simple Django blog</h5>
                     <h4 className="project__text">Django blog app</h4>
                     <a href="https://nairomagblog.herokuapp.com/" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project3} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">React Barbershop</h5>
                     <h4 className="project__text">market your shop</h4>
                     <a href="https://paolosiroko.vercel.app/" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project4} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Django Documentfinder</h5>
                     <h4 className="project__text">easily locate lost items <br/> username : user password: test12345 </h4>
                     <a href="https://eventsdashboard.herokuapp.com/" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>

             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project6} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Dashboard </h5>
                     <h4 className="project__text">Django dashboard <br/> username : user password: test12345 </h4>
                     <a href="https://eventsdashboard.herokuapp.com/" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>
             
             {/* <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
             <button className="view__more pointer btn">View more</button>
             </div> */}

           </div>
       </div>
    </div>
  );
}

export default Project;

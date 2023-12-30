import React, { useState } from "react";
import arrow_left from "../../../assets/images/arrow_left.svg"
import arrow_right from "../../../assets/images/arrow_right.svg"
import "../../../assets/styles/carousel.css"
const Carousel = ({ first_child, second_child, third_child }) => {
   const [img, setImg] = useState([first_child, second_child, third_child]);
   function slideLeft() {
      setImg([img[1], img[2], img[0]]);
   }

   function slideRight() {
      setImg([img[2], img[0], img[1]]);
   }


   return (
      <div className="portfolio_carousel">

         <img src={arrow_left} className="arrow_left_img" onClick={slideLeft}></img>

         <div className="carousel_images">

            <img src={img[0]} className="first_img" alt="stickers"></img>
            <img src={img[1]} className="second_img" alt="geometric"></img>
            <img src={img[2]} className="third_img" alt="march8"></img>

         </div>

         <img src={arrow_right} className="arrow_right_img" onClick={slideRight}></img>


      </div>
   )
}
export default Carousel
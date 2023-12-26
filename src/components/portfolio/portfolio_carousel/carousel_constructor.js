import React from "react";
import arrow_left from "../../../assets/images/arrow_left.svg"
import arrow_right from "../../../assets/images/arrow_right.svg"
import "../../../assets/styles/carousel.css"
const CarouselConstructor=({first_child, second_child, third_child}) => {
        return (
           <div className="portfolio_illustrator_carousel">

            <img src={arrow_left} className="arrow_left_img"></img>

            <div className="carousel_images">

            <img src={first_child} className="stickers_img"></img>
            <img src={second_child} className="geometric_img"></img>
            <img src={third_child} className="march8_img"></img>

            </div>

            <img src={arrow_right} className="arrow_right_img"></img>


           </div>
        )
}
export default CarouselConstructor 
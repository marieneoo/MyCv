import React from "react";
import arrow_left from "../../../assets/images/arrow_left.svg"
import arrow_right from "../../../assets/images/arrow_right.svg"
import "../../../assets/styles/carousel.css"
const CarouselConstructor=({first_child, second_child, third_child}) => {
        let img= [first_child,second_child,third_child];
        function  slide() {
         for(let i=0; i<img.length; i++) {

                img[0]=img[1];
                img[1]=img[2];
                img[2]=img[0];

        }
           return 
          
           
        }
        

        return (
           <div className="portfolio_carousel">

            <img src={arrow_left} className="arrow_left_img" onClick={slide}></img>

            <div className="carousel_images">

            <img src={img[0]} className="first_img"></img>
            <img src={img[1]} className="second_img"></img>
            <img src={img[2]} className="third_img"></img>

            </div>

            <img src={arrow_right} className="arrow_right_img"></img>


           </div>
        )
}
export default CarouselConstructor 
import React from "react";
import stickers from "../../../assets/images/stickers.jpg"
import geometric from "../../../assets/images/geometric.jpg"
import march8 from "../../../assets/images/march8.jpg"
import arrow_left from "../../../assets/images/arrow_left.svg"
import arrow_right from "../../../assets/images/arrow_right.svg"
class PortfolioIllustratorCarousel extends React.Component {
    render() {
        return (
           <div className="portfolio_illustrator_carousel">
            <img src={arrow_left} className="arrow_left_img"></img>

            <img src={stickers} className="stickers_img"></img>
            <img src={geometric} className="geometric_img"></img>
            <img src={march8} className="march8_img"></img>
            
            <img src={arrow_right} className="arrow_right_img"></img>


           </div>
        )
    }
}
export default PortfolioIllustratorCarousel
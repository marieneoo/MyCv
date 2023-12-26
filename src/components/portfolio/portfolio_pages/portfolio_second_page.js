import React from "react";
import { PortfolioTitlePhotoshop } from "../title.js";
import PhotoshopCarousel from "../portfolio_carousel/photoshop_carousel.js";
class PortfolioSecondPage extends React.Component {
    render() {
        return(
            <div className="portfolio_page">
                <PortfolioTitlePhotoshop/>
                <PhotoshopCarousel/>

            </div>
        )
    }
}

export default PortfolioSecondPage
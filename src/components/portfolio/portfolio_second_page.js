import React from "react";
import { PortfolioTitlePhotoshop } from "./title";
import PortfolioCarousel from "./illustrator_carousel";
class PortfolioSecondPage extends React.Component {
    render() {
        return(
            <div className="portfolio_second_page">
                <PortfolioTitlePhotoshop/>
                <PortfolioCarousel/>

            </div>
        )
    }
}

export default PortfolioSecondPage
import React from "react";
import { PortfolioTitleIllustrator } from "../title.js";
import PortfolioIllustratorCarousel from "../portfolio_carousel/illustrator_carousel.js";
class PortfolioFirstPage extends React.Component {
    render() {
        return(
           <div className="portfolio_first_page">
            <PortfolioTitleIllustrator/>
            <PortfolioIllustratorCarousel/>

           </div>
        )
    }
}

export default PortfolioFirstPage
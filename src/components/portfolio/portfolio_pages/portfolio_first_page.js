import React from "react";
import { PortfolioTitleIllustrator } from "../title.js";
import IllustratorCarousel from "../portfolio_carousel/illustrator_carousel.js";
class PortfolioFirstPage extends React.Component {
    render() {
        return(
           <div className="portfolio_page">
            <PortfolioTitleIllustrator/>
            <IllustratorCarousel/>

           </div>
        )
    }
}

export default PortfolioFirstPage

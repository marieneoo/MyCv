import React from "react";
import { PortfolioTitleIllustrator } from "./title";
import PortfolioCarousel from "./illustrator_carousel";
class PortfolioFirstPage extends React.Component {
    render() {
        return(
           <div className="portfolio_first_page">
            <PortfolioTitleIllustrator/>
            <PortfolioCarousel/>

           </div>
        )
    }
}

export default PortfolioFirstPage

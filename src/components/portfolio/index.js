import React from "react";
import "../../assets/styles/portfolio.css"
import PortfolioFirstPage from "../portfolio/portfolio_first_page"
import PortfolioSecondPage from "./portfolio_second_page";
class PortfolioIndex extends React.Component {
    render() {
        return(
            <div className="portfolio">
                
                <PortfolioFirstPage/>
                <PortfolioSecondPage/>

            </div>
        )
    }
}

export default PortfolioIndex
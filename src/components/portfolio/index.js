import React from "react";
import "../../assets/styles/portfolio.css"
import PortfolioFirstPage from "./portfolio_pages/portfolio_first_page.js"
import PortfolioSecondPage from "./portfolio_pages/portfolio_second_page.js";
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
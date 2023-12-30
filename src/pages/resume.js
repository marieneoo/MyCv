import React from "react";
import PortfolioIndex from "../components/portfolio/index.js"
import "../../src/assets/styles/resume.css"
class Resume extends React.Component {
    render() {
        return(
            <div className="resume">
                <a href="/resume.pdf" download ><button>Download</button></a>
            </div>
        )
    }
}

export default Resume

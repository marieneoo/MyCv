import React from "react";
import Pic from "./pic.js";
import Me from "./me.js";
import about_me from '../../assets/styles/about_me.css'
class AboutMeIndex extends React.Component {
    render() {
        return(
            <div className="about_me">
                <Pic/>
                <Me/>
            </div>
        )
    }
}
export default AboutMeIndex
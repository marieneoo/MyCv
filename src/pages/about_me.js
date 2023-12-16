import React from "react";
import AboutMeIndex from "../components/about_me/index.js";
import Menu from "../components/menu/index.js";
class AboutMe extends React.Component {
    render() {
        return(
            <div>
                <Menu/>
                <AboutMeIndex/>
            </div>
        )
    }
}

export default AboutMe;
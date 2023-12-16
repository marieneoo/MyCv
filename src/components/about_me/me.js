import React from "react";
import AboutMeTxt from "./about_me_txt.js";
import WhyMe from "./why_me.js";
class Me extends React.Component {
    render() {
        return(
            <div className="me">
                <AboutMeTxt/>
                <WhyMe/>
            </div>
        )
    }
}
export default Me
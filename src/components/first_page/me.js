import React from "react";
import AboutMe from "./about_me";
import WhyMe from "./why_me";
class Me extends React.Component {
    render() {
        return(
            <div className="me">
                <AboutMe/>
                <WhyMe/>
            </div>
        )
    }
}
export default Me
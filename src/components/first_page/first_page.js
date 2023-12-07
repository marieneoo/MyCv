import React from "react";
import Pic from "./pic";
import Me from "./me";
import first_page from '../../assets/styles/first_page.css'
class FirstPage extends React.Component {
    render() {
        return(
            <div className="first_page">
                <Pic/>
                <Me/>
            </div>
        )
    }
}
export default FirstPage
import React from "react";
import stickers from "../../../assets/images/stickers.jpg"
import geometric from "../../../assets/images/geometric.jpg"
import march8 from "../../../assets/images/march8.jpg"
import Carousel from "./carousel.js";
class IllustratorCarousel extends React.Component {
    render() {
        return(
            <div>
               <Carousel first_child={stickers} second_child={geometric} third_child={march8}/>

            </div>
        )
    }
}

export default IllustratorCarousel 
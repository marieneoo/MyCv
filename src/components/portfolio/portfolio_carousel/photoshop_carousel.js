import React from "react";
import "../../../assets/styles/carousel.css"
import enlightenment from "../../../assets/images/enlightenment.png"
import high_vibrations from "../../../assets/images/high_vibrations.png"
import reincarnation from "../../../assets/images/reincarnation.png"
import CarouselConstructor from "./carousel";
class PhotoshopCarousel extends React.Component {
    render() {
        return (
           <CarouselConstructor first_child={enlightenment} second_child={high_vibrations} third_child={reincarnation} />

        )
    }
}
export default PhotoshopCarousel
import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import stickers from "../../assets/images/stickers.jpg"
import geometric from "../../assets/images/geometric.jpg"
import march8 from "../../assets/images/march8.jpg"
class PortfolioCarousel extends React.Component {
    render() {
        const responsive = {
            superLargeDesktop: {

            breakpoint: {max: 4000, min: 3000 },
        items: 3
},
        desktop: {
            breakpoint: {max: 3000, min: 1024 },
        items: 2
},
        tablet: {
            breakpoint: {max: 1024, min: 464 },
        items: 1
},
        mobile: {
            breakpoint: {max: 464, min: 0 },
        items: 1
}
};
        return (
            <div className="carousel">
                <Carousel responsive={responsive}>
                    <div>
                        <img className="stickers" src={stickers}></img>
                    </div>

                    <div>
                        <img className="geometric" src={geometric}></img>
                    </div>

                    <div>
                        <img className="march8" src={march8}></img>
                    </div>
                </Carousel>;

            </div>
        )
    }
}
export default PortfolioCarousel
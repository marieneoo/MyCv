import React from "react";
import StarGreen from "../stars/star_green";
import "../../assets/styles/title.css"
const Title=({title})=> {
        return(
            <div className="title_div">
                <StarGreen className="star_green_bottom"/>
                    <h1 className="title_h1">
                        {title}
                    </h1> 
                    <StarGreen className="star_green_top"/>
                </div>
        )
    }

export default Title
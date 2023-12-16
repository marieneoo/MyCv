import React from "react";
import StarGreen from "../stars/star_green";
const Title=({title_div_className,title,title_h1_className,star_green_bottom_className,star_green_top_className})=> {
        return(
            <div className={title_div_className}>
                <StarGreen className={star_green_bottom_className}/>
                    <h1 className={title_h1_className}>
                        {title}
                    </h1> 
                    <StarGreen className={star_green_top_className}/>
                </div>
        )
    }

export default Title
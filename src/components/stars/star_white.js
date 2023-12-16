import React from 'react'
import starWhite from "../../assets/images/star_white.svg"
const StarWhite=({className})=> {
        return(
            <div className='star_white'>
               <img className={className} src={starWhite}/>
            </div>
        )
}

export default StarWhite
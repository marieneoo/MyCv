import React from 'react'
import starGreen from '../assets/images/star_green.svg'
const StarGreen=({className})=> {
        return(
            <div className='starG'>
               <img className={className} src={starGreen}/>
            </div>
        )
}

export default StarGreen
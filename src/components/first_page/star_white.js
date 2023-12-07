import React from 'react'
import starWhite from '../../assets/images/star_white.svg'
class StarWhite extends React.Component {
    render() {
        return(
            <div className='starWImgPic'>
               <img className='starWImg' src={starWhite}/>
            </div>
        )
    }
}

export default StarWhite
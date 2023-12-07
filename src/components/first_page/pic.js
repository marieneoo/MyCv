import React from 'react'
import back_big from '../../assets/images/back_big.jpg'
import front_end from '../../assets/images/front_end.jpg'
import front_start from '../../assets/images/front_start.jpg'
import StarWhite from '../star_white.js'
class Pic extends React.Component {
    render() {
        return(
            <div className='pic'>
                <StarWhite/>
                <img src={back_big}></img>
                <img src={front_end}></img>
                <img src={front_start}></img>
            </div>
        )
    }
}

export default Pic
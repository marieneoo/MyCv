import React from 'react'
import back_big from '../../assets/images/back_big.jpg'
import front_end from '../../assets/images/front_end.jpg'
import front_start from '../../assets/images/front_start.jpg'
import StarWhite from './star_white.js'
class Pic extends React.Component {
    render() {
        return(
            <div className='pic'>
                <img className='back_big' src={back_big}></img>
                <img className='front_end' src={front_end}></img>
                <img className='front_start' src={front_start}></img>
                <StarWhite/>
            </div>
        )
    }
}

export default Pic
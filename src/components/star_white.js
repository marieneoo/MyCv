import React from 'react'
import starWhite from '../assets/images/star_white.svg'
class StarWhite extends React.Component {
    render() {
        return(
            <div className='star'>
               <img className='starImg' src={starWhite}/>
            </div>
        )
    }
}

export default StarWhite
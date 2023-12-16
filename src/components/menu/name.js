import React from 'react'
import StarWhite from '../stars/star_white.js'
class Name extends React.Component{
    render() {
        return(
            <div className="name">
                <StarWhite className="star_white_menu"/>
                <h1 className='maria'>Maria Tonoyan</h1>

            </div>
        )
    }
}

export default Name
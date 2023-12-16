import React from 'react'
import StarWhite from '../stars/star_white.js'

class Bar extends React.Component{
    render() {
        return(
            <div className='bar'>
                <ul>
                    <li><a href='#'>About me</a></li>
                    <li><a href='#'>Portfolio</a></li>
                    <li><a href='#'>Resume</a></li>
                    <li><a href='#'>Get in touch</a></li>
                    
                </ul>
                <StarWhite className="star_white_menu"/>
            </div>
        )
    }
}

export default Bar
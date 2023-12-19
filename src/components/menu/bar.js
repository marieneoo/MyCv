import React from 'react'
import StarWhite from '../stars/star_white.js'
import {Link} from "react-router-dom"
class Bar extends React.Component{
    render() {
        return(
            <div className='bar'>
                <ul>
                    {/* <li><a href='#'>About me</a></li>
                    <li><a href='#'>Portfolio</a></li>
                    <li><a href='#'>Resume</a></li>
                    <li><a href='#'>Get in touch</a></li> */}
                    <li><Link to="/about_me">About me</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/resume">Resume</Link></li>
                    <li><Link to="/get_in_touch">Get in touch</Link></li>
                    
                </ul>
                <StarWhite className="star_white_menu"/>
            </div>
        )
    }
}

export default Bar
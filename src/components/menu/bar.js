import React from 'react'
import StarWhite from '../stars/star_white.js'
import {NavLink} from "react-router-dom"
class Bar extends React.Component{
    render() {
        return(
            <div className='bar'>
                <ul>
                    {/* <li><a href='#'>About me</a></li>
                    <li><a href='#'>Portfolio</a></li>
                    <li><a href='#'>Resume</a></li>
                    <li><a href='#'>Get in touch</a></li> */}
                    <li><NavLink activeClassname="active" to="/about_me">About me</NavLink></li>
                    <li><NavLink activeClassname="active" to="/portfolio">Portfolio</NavLink></li>
                    <li><NavLink activeClassname="active" to="/resume">Resume</NavLink></li>
                    <li><NavLink activeClassname="active" to="/get_in_touch">Get in touch</NavLink></li>
                    
                </ul>
                <StarWhite className="star_white_menu"/>
            </div>
        )
    }
}

export default Bar
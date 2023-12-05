import React from 'react'
import star from './star.js'

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
            </div>
        )
    }
}

export default Bar
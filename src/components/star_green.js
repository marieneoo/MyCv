import React from 'react'
import starGreen from '../assets/images/star_green.svg'
class StarGreen extends React.Component {
    render() {
        return(
            <div className='star'>
               <img className='starGImg' src={starGreen}/>
            </div>
        )
    }
}

export default StarGreen
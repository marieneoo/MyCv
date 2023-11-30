import React from 'react'
import star from '../../assets/images/star.svg'
class Star extends React.Component {
    render() {
        return(
            <div className='star'>
               <img src={star}/>
            </div>
        )
    }
}

export default Star
import React from 'react'
import pic from '../../assets/images/pic.png'
class Pic extends React.Component {
    render() {
        return(
            <div className='pic'>
                <img className='pic_1' src={pic}></img>

            </div>
        )
    }
}

export default Pic
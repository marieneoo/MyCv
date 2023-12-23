import React from 'react'
import Pic from '../../assets/images/pic.png'
import Title from "../title/index.js"
class AboutMeTxt extends React.Component {
    render() {
        return (
            <div className='about_me_txt_container'>
                <Title title="About me"/>
                <div className='hi'>
                    <p className='hi_txt'>Hi there! I'm Maria Tonoyan, a passionate 17-year-old graphic and web designer currently honing my skills at the Yerevan State College of Informatics. With a keen eye for aesthetics and a drive for innovation, I'm dedicated to crafting visually stunning designs that leave a lasting impression. </p>
                </div>

                <div className='hidden-pic-div'>
                    <img className='hidden-pic' src={Pic}></img>

                </div>
            </div>
        )
    }
}

export default AboutMeTxt

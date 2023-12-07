import React from 'react'
import StarGreen from '../star_green'
class AboutMe extends React.Component {
    render() {
        return(
            <div className='aboutMe'>
                <div className='about_me'>
                    <h1 className='about_me_txt'>
                        About me
                    </h1>
                    <StarGreen/>
                    <StarGreen/>
                </div>

                <div className='hi'>
                    <p className='hi_txt'>Hi there! I'm Maria Tonoyan, a passionate 17-year-old graphic and web designer currently honing my skills at the Yerevan State College of Informatics. With a keen eye for aesthetics and a drive for innovation, I'm dedicated to crafting visually stunning designs that leave a lasting impression. </p>
                        
                    

                </div>
            </div>
        )
    }
}

export default AboutMe

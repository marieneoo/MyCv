import React from 'react'
import menu from '../../assets/styles/menu.css'
import Star from './star.js'
import Name from './name.js'

class Menu extends React.Component {
    render() {
        return(
            <div className='menu'>
                <Star/>
                <Name/>

            </div>
        )
    }
}
  
  export default Menu;

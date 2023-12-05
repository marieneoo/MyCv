import React from 'react'
import menu from '../../assets/styles/menu.css'
import Star from './star.js'
import Name from './name.js'
import Bar from './bar.js'

class Menu extends React.Component {
    render() {
        return(
            <div className='menu'>
                <Star/>
                <Name/>
                <Bar/>

            </div>
        )
    }
}
  
  export default Menu;

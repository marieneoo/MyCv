import React from 'react'
import menu from '../../assets/styles/menu.css'
import Name from './name.js'
import Bar from './bar.js'

class Menu extends React.Component {
    render() {
        return(
            <div className='menu'>
                <Name/>
                <Bar/>

            </div>
        )
    }
}
  
  export default Menu;

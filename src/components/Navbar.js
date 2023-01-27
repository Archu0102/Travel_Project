import './NavbarStyle.css'

import React, { Component } from 'react'
import MenuItem from './MenuItem'
import { Link } from 'react-router-dom'

class Navbar extends Component{
    state = { clicked: false };
    handleClick = () =>{
        this.setState({ clicked: !this.state.clicked})
    }
  render(){
    return (
        <nav className='navbarItems'>
            <h1 className='navbar-logo'>Trippy</h1>

            <div className='menu-icons' onClick={this.handleClick} >
                <i className={ this.state.clicked ? "fas fa-times" : "fas fa-bars" }></i>
            </div>

            <ul className='nav-menu'>
                {MenuItem.map((item, index)=>{
                    return(
                            <li key={index}>
                                <a className={item.cName} href='/'><i className={item.icon}></i>{item.title}</a>
                            </li>
                        )
                    }
                )}

                <button>Sign Up</button>
            </ul>
        </nav>
    )
  }
}

export default Navbar
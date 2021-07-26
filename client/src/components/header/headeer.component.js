import React from 'react'
import './header.scss'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/crown (1).svg'
const Header = () => {
  return (
    <div className= "header">
      <Link to='/' className='logo-container'>
        <Logo className='logo' />
      </Link>
      <div className="options">
      <Link to='/' className='option'>
          Shop
        </Link>
      <Link to='/' className='option'>
         Contact
        </Link>
      </div>

    </div>
  )
}

export default Header

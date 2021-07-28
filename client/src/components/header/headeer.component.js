import React from 'react'
import './header.scss'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {ReactComponent as Logo} from '../../assets/crown (1).svg'
import {auth} from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

const Header = ({currentUser, hidden}) => {
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
      {
        currentUser ?
        <div className="option" onClick={()=> auth.signOut() }> Sign Out </div>
        :
        <Link className='option' to='/signIn' > Sign In </Link>
      }
      <CartIcon />
      </div>
      { 
        hidden ? null :
        <CartDropdown />
        }
    </div>
  )
}

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
      currentUser,
      hidden,

})

export default connect(mapStateToProps)(Header);

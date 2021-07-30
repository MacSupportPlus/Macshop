import React, {Component} from 'react'
import  {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import HomePage from './pages/homepage/homepage'
import CheckoutPage from './pages/checkout/checkout.component';
import ShopPage from './pages/shop/shop.component'

import ReactDOM from 'react-dom';
import {setCurrentUser} from './redux/user/user.actions'

import { Switch, BrowserRouter, Route, Redirect  } from 'react-router-dom';
import './index.css';

import Header from './components/header/headeer.component'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {selectCurrentUser} from './redux/user/user.selector'



  class App extends Component {
   

  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
            setCurrentUser ({
                id: snapShot.id,
                ...snapShot.data()
              })
            });
            
        
      }
      setCurrentUser(userAuth);

  
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/signin'
           render={()=>
            this.props.currentUser? (
            <Redirect to ='/'/> 
            ) : (
            <SignInAndSignUp /> 
            )
            } 
            />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})



export default connect(mapStateToProps, mapDispatchToProps)(App)

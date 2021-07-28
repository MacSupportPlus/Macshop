import React, {Component} from 'react'
import HomePage from './pages/homepage/homepage'
import  {connect} from 'react-redux'
import ReactDOM from 'react-dom';
import {setCurrentUser} from './redux/user/user.actions'
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Homepage from './pages/homepage/homepage'
import './index.css';
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/headeer.component'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import {auth, createUserProfileDocument} from './firebase/firebase.utils';

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
          <Route path='/signin' component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})



export default connect(null, mapDispatchToProps)(App)

import React,{Component} from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from './Page/HomePage';
import ShopPage from './Page/Shop';
import SignInSignUpPage from './Page/Sign-in-Sign-up';
import Header from './Components/header';
import {auth,createUserProfileDocument} from './firebase/firebase.utils';
import { setCurrentUser } from  './redux/user/actions';
class App extends Component {
  
  unsubscribeFormAuth=null;

  componentDidMount(){
    const {setCurrentUser}=this.props;
   this.unsubscribeFormAuth= auth.onAuthStateChanged(async userAuth=>{
      // this.setState({currentUser:user})
      // 
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot=>{
          
          setCurrentUser({
           id:snapShot.id,
           ...snapShot.data()
          })
        })
     
      }
      setCurrentUser(userAuth);
 
    })
    console.log(this.state)
  }
  componentWillUnmount(){
    this.unsubscribeFormAuth()
  }
  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route  path='/shop' component={ShopPage} />
          <Route  path='/signin' component={SignInSignUpPage} />
        </Switch>
  
      </div>
    );
  }

}

const mapDispatchToProps=dispatch=>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))
})
export default connect(null,mapDispatchToProps)(App);

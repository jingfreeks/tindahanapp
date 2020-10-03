import React,{Component} from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import HomePage from './Page/HomePage';
import ShopPage from './Page/Shop';
import SignInSignUpPage from './Page/Sign-in-Sign-up';
import Header from './Components/header';
import {auth,createUserProfileDocument} from './firebase/firebase.utils';

class App extends Component {
  constructor(){
    super();

    this.state={
      currentUser:null
    }
  }
  unsubscribeFormAuth=null;

  componentDidMount(){
   this.unsubscribeFormAuth= auth.onAuthStateChanged(async userAuth=>{
      // this.setState({currentUser:user})
      // 
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot=>{
          
          this.setState({
            currentUser:snapShot.id,
            ...snapShot.data()
          })
        })
     
      }
      this.setState({currentUser:userAuth})
 
    })
    console.log(this.state)
  }
  componentWillUnmount(){
    this.unsubscribeFormAuth()
  }
  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route  path='/shop' component={ShopPage} />
          <Route  path='/signin' component={SignInSignUpPage} />
        </Switch>
  
      </div>
    );
  }

}

export default App;

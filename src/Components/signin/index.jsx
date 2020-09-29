import React,{Component} from 'react';
import './styles.scss';
import FormInput from '../form-input';
import CustomButton from '../custom-button';
import {signInWithGoogle} from '../../firebase/firebase.utils';
class Signin extends Component{
    constructor(props){
        super(props);

        this.state={
            email:'',
            password:'',
        }

        this.setState({email:'',password:''});
    }
    handleSubmit=event=>{
        event.preventDefault();
        this.setState({email:'',password:''})
    }
    handleChange=event=>{
        const{value,name}=event.target;

        this.setState({[name]:value})
    }
    render(){
        const{email,password}=this.state;
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput label="email" name="email" type="email" value={email} required handleChange={this.handleChange}/>
                    <FormInput label="password" name="password" type="password" value={password} required handleChange={this.handleChange}/>

                    <div className="buttons">
                    <CustomButton type="submit">
                        Sign In
                    </CustomButton>

                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                        Sign In with google
                    </CustomButton>

                    </div>
        
                </form>
            </div>
        )
    }

}

export default Signin;
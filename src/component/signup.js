import React from 'react';
import axios from 'axios';

class Signup extends React.Component {
    constructor(props){
        super(props);
        this.state={
            firstname:"",
            email:"",
            password:"",
            mobile:"" ,
            firstnameError: false,
            emailError:false,
            passwordError:false,
            mobileError:false,


        }
        this.validateform=this.validateform.bind(this);
        this.onChangeInput=this.onChangeInput.bind(this);
    }
    validateform(){
        const firstname= this.state.firstname;
        const email= this.state.email;
        const password= this.state.password;
        const mobile= this.state.mobile;
       
        if(firstname)
        {
            this.setState({firstnameError:false});
        }
        else{
            this.setState({firstnameError:true});
        }

        if(email)
        {
            this.setState({emailError:false});
        }
        else{
            this.setState({emailError:true});
        }


        if(password)
        {
            this.setState({passwordError:false});
        }
        else{
            this.setState({passwordError:true});
        }

        if(mobile)
        {
            this.setState({mobileError:false});
        }
        else{
            this.setState({mobileError:true});
        }

        var signUpFormData={
            firstname :firstname,
            email :email,
            password :password,
            mobile :mobile

        }
        console.log("----<>--",signUpFormData);

        axios.post('http://localhost:3001/signup',signUpFormData)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

        


    }
    onChangeInput(event){
        const name=event.target.name;
        const value=event.target.value;
        this.setState({[name]:value})


      
    }
    
    render() {
        return (
            <div className="container register">
            <div className="row">
                <div className="col-md-3 register-left">
                    <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
                    <h3>Welcome</h3>
                    <h4>Ravitesh </h4>
                </div>
                <div className="col-md-9 register-right">
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab" >
                            <h3 className="register-heading">Apply as a Employee</h3>
                            <div className="row register-form">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" className="form-control" style={{border:(this.state.firstnameError)?"1px solid red":''}} value={this.state.firstname} name="firstname" placeholder="First Name *" onChange={(e)=>this.onChangeInput(e)}  />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" style={{border:(this.state.emailError)?"1px solid red":''}}  name="email" placeholder="Email *" onChange={(e)=>this.onChangeInput(e)} />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" style={{border:(this.state.passwordError)?"1px solid red":''}} name="password" placeholder="Password *"  onChange={(e)=>this.onChangeInput(e)} />
                                    </div>                             
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" className="form-control" style={{border:(this.state.mobileError)?"1px solid red":''}} name="mobile" placeholder="mobile # *" onChange={(e)=>this.onChangeInput(e)} />
                                    </div>
                                   
                                    <input type="submit" className="btnRegister"   value="Register" onClick={this.validateform}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        )
    }
}

export default Signup;

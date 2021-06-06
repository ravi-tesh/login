import React,{useEffect} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

class Signup extends React.Component {
    constructor(props){
        super(props);
        this.state={
            firstname:"",
            email:"",
            password:"",
            mobile:"" ,
            address:"",
            firstnameError: false,
            emailError:false,
            passwordError:false,
            mobileError:false,
            addressError:false,
            check:false,
            data:"local",


        }
        this.validateform=this.validateform.bind(this);
        this.onChangeInput=this.onChangeInput.bind(this);
    }

    validateform(){
        {this.state.data==="local"?this.setState({check:false}):this.setState({check:true})}
        const firstname= this.state.firstname;
        const email= this.state.email;
        const password= this.state.password;
        const mobile= this.state.mobile;
        const address=this.state.address;
        const data=this.state.data;
        const check=this.state.check;
        //this.setState({check:true});
      

       
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
        if(address)
        {
            this.setState({addressError:false});
        }
        else{
            this.setState({addressError:true});
        }

        var signUpFormData={
            firstname :firstname,
            email :email,
            password :password,
            mobile :mobile,
            data :data,
            address:address,

            
        }
        console.log(this.state.data+"this is data------")
        

        
        {
           !this.state.check? 
            localStorage.setItem("signUpFormData",JSON.stringify(signUpFormData)):axios.post('http://localhost:3001/signup',signUpFormData)
            
            .then(function (response) {
              Swal.fire('Wow!', 'Success', 'sucsess')
            })
            .catch(function (error) {
              console.log(error);
            });

        }
        console.log(this.state.check);


       
        
        

        

        


    }

    onChangeInput(event){
        const name=event.target.name;
        const value=event.target.value;
        this.setState({[name]:value})
        console.log(value);
        console.log(this.state.data);
        console.log("before");
        console.log(this.state.check);


      
    }
  
    
    render() {
        return (
    <div>     
    <div className="page-wrapper bg-gra-03 p-t-45 p-b-50">
    <div className="wrapper wrapper--w790">
        <div className="card card-5">
            <div className="card-heading">
                <h2 className="title">My Registration Form</h2>
            </div>
            <div className="card-body">
                
                    <div className="form-row m-b-55">
                        <div className="name">Name</div>
                        <div className="value">
                            <div className="row row-space">
                                <div className="col-2">
                                    <div className="input-group-desc">
                                        <input type="text" className="input--style-5" type="text"  style={{border:(this.state.firstnameError)?"1px solid red":''}} value={this.state.firstname} name="firstname" placeholder="First Name *" onChange={(e)=>this.onChangeInput(e)} />
                                      
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="name">Email</div>
                        <div className="value">
                            <div className="input-group">
                                <input type="text" className="input--style-5" style={{border:(this.state.emailError)?"1px solid red":''}}  name="email" placeholder="Email *" onChange={(e)=>this.onChangeInput(e)} />
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="name">Password</div>
                        <div className="value">
                            <div className="input-group">
                                <input type="password" className="input--style-5" style={{border:(this.state.passwordError)?"1px solid red":''}} name="password" placeholder="Password *"  onChange={(e)=>this.onChangeInput(e)} />
                            </div>
                        </div>
                    </div>
                    <div className="form-row m-b-55">
                        <div className="name">Phone</div>
                        <div className="value">
                            <div className="row row-refine">
                                
                                <div className="col-9">
                                    <div className="input-group-desc">
                                        <input className="input--style-5" type="text" style={{border:(this.state.mobileError)?"1px solid red":''}} name="mobile" placeholder="mobile # *" onChange={(e)=>this.onChangeInput(e)} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="name">Address</div>
                        <div className="value">
                            <div className="input-group">
                                <input className="input--style-5" type="text" style={{border:(this.state.addressError)?"1px solid red":''}} value={this.state.address} name="address" placeholder="Address *" onChange={(e)=>this.onChangeInput(e)} />
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="name">Select</div>
                        <div className="value">
                            <div className="custom-select" style={{width:"200px"}}>
                                <div className="rs-select2 js-select-simple select--no-search">
                                <select name="data" id="data" onChange={(e)=>{
                                e.target.value==="local"?this.setState({check:false}):this.setState({check:true})
                                this.onChangeInput(e) }} >
                                    <option value="local" >Local</option>
                                    <option value="database" >Database</option>
  
                                 </select>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <input type="submit" className="btnRegister"   value="Register" onClick={this.validateform} style={{backgroundColor:'lightblue', fontSize:'40 px',  padding: '15px 32px', textAlign: 'center',fontFamily: 'Arial'}}/>
                    </div>
                
            </div>
        </div>
    </div>
</div>

        )
    }
}

export default Signup;

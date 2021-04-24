import React, { Component } from 'react';
import Login from './Login';
import { Redirect } from 'react-router';



export default class SignupComp extends Component {
 

      constructor(props){
        super(props);
   
        this.state = { username: '' };
        this.state = { password: '' };
        
      }
      state = {
        redirect: false
      }
      handleChange = (event) => {
        const input = event.target;
        this.setState({ username: event.target.value });
        this.setState({ password: event.target.value });
       
     
      };

      handleFormSubmit = () => {
        const { username, password } = this.state;
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        this.setState({ redirect: true })
        alert(`${username}  Sign Up Successfully!`);
     
        const { redirect } = this.state;

     
      
          
          
         
      };
    render() {
     
        if (this.state.redirect) {
            return <Redirect to='/Login'/>;
          }
     
   
   
       
        return (
          
          
            <div>
              <div className="App container">
    <div className="card m-5 p-5">

     <h1 className="mt-3 mb-5 text-center"> Sign Up</h1>
             <form onSubmit={this.handleFormSubmit}  >
  <div class="form-group">
    <label for="exampleInputEmail1" className="align-left">Name</label>
    <input type="text" name="username" value={this.state.username}  onChange={this.handleChange} class="form-control" id="exampleInputEmail1" placeholder="Enter email" />
    
  </div>
 

  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} class="form-control" id="exampleInputPassword1" placeholder="Password" />
  </div>



  <div className="d-flex justify-content-center">

<button type="submit" class="btn btn-primary mt-4 pr-5 pl-5 text-center">Submit</button>
</div>
</form>   
    </div>
    </div>
            </div>
        )
    }
}

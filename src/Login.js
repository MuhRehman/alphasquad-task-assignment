import React, { Component } from 'react';
import { Redirect } from 'react-router';
import logo from './logo.svg';
import Posts from './Posts';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Login extends Component {
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
    const  StoreUsername = localStorage.getItem('username');
    const StorePassword = localStorage.getItem('password');
    this.setState({ StoreUsername, StorePassword });
    const { username, password } = this.state;

    
          if( username == StoreUsername || password == StorePassword ){
        alert(`${username} Login Successfully!`);
        this.setState({ redirect: true })
        const { redirect } = this.state;

          }else {

          alert("The user name or password is incorrect !");
                    
          }


    this.setState({ redirect: true })
    
 
    const { redirect } = this.state;
     
  };


  render() {
    if (this.state.redirect) {
      return <Redirect to='/Posts'/>;
    }

    return (
    <div className="App container">
    <div className="card m-5 p-5 ">

     <h1 className="mt-3 mb-5 text-center"> Login</h1>
  <form onSubmit={this.handleFormSubmit}>
  <div class="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="text" class="form-control"  name="username" value={this.state.username}  onChange={this.handleChange} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" value={this.state.password} onChange={this.handleChange} id="exampleInputPassword1" placeholder="Password" />
  </div>
  <div className="d-flex justify-content-center">

  <button type="submit" class="btn btn-primary mt-4 pr-5 pl-5 text-center">Submit</button>
  </div>
</form>   
    </div>
    </div>
  )
}
}


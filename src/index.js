import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
// import './index.css';
import Signup from './App';

import Posts from './Posts';

import Login from './Login';
import reportWebVitals from './reportWebVitals';
import App from './App';
import SignupComp from './SignupComp';

ReactDOM.render(
  <React.StrictMode>
    	<Router>
    <Switch>
    <Route exact path="/">
          <SignupComp />{" "}
					</Route>
					<Route exact path="/Login">
						<Login></Login>{" "}
					</Route>
         
					<Route exact path="/App">
          <App />{" "}
					</Route>
				
					<Route exact path="/Posts">
          <Posts />{" "}
					</Route>
				
    </Switch>
    </Router>
   
    
  
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

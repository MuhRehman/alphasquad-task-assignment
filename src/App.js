import logo from './logo.svg';
import Login from './Login';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App container">
    <div className="card m-5 p-5">

     <h1 className="mt-3 mb-5 text-center">  Sign Up</h1>
             <form >
  <div class="form-group">
    <label for="exampleInputEmail1" className="align-left">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
  </div>
  <div className="d-flex justify-content-center">

<button type="submit" class="btn btn-primary mt-4 pr-5 pl-5 text-center">Submit</button>
</div>
</form>   
    </div>
    </div>
  );
}

export default App;

import './App.css';
import {BrowserRouter,Switch, Route,Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className='flex justify-evenly'>
      <Link to={'/home'} className="">Home</Link>
      <Link to={'/login'} className="">Login</Link>
      <Link to={'/register'}>Register</Link>
    </div>
    </BrowserRouter>
   
  );
}

export default App;

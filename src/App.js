import React,{NavLink, Outlet} from "react-router-dom"
import './App.css';

function App() {

  return (
    <div className="out">
    <div className="App">
       <div className="logo">
          <h2>Info.Com</h2>
       </div> 

       <nav>
          <NavLink to = "/Home" > Home</NavLink>
          <NavLink to = "/about"> About </NavLink>
          <NavLink to = "/articles"> Articles </NavLink>
       </nav> 
      
    </div>

    <Outlet/>
    </div>
    
  );
}

export default App;

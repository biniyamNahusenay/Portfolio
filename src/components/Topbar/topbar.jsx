//import { BrowserRouter as Router } from "react-router-dom";
// we can use only one BrowserRouter in the indexjs 
import { Link } from "react-router-dom";
import "./topbar.css"

export default function topbar() {
  const user = false;
  return (
  
    <div className='top'>
       <div className="left">
         <i className="topIcon fa-brands fa-facebook"></i>
         <i className="topIcon fa-brands fa-x-twitter"></i>
         <i className="topIcon fa-brands fa-pinterest"></i>
         <i className="topIcon fa-brands fa-instagram"></i>
       </div>
       <div className="center">
        
        <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/">Home</Link>
            </li>
            <li className="topListItem">
            <Link className="link" to="/">About</Link>
            </li>
            <li className="topListItem">
             <Link className="link" to="/">Contact</Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/write">Write</Link>
            </li>
            <li className="topListItem">
              {user && "Logout"}
            </li>
          </ul>
             
       </div>
       <div className="right">
        {
          user ? (
            <img
            className="topImg"
            src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          ):   
             <ul className="topList">
                <li className="topListItem">
                <Link className="link" to="/login">Login</Link>
                </li>
                <li className="topListItem">
                <Link className="link" to="/register">Register</Link>
                </li>
              </ul>
             }
            <i className="searchIcon fa-sharp fa-solid fa-magnifying-glass"></i>
       </div>
     </div>
  
  )
}

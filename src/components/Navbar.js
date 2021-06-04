
import './Navbar.css';
import {NavLink} from 'react-router-dom';

const Navbar = (props) => {
    return(
        <nav id='navbar'>
          <ul>
          <NavLink to='/'><li>Home</li></NavLink>
          <NavLink to='/contact'><li>Contact</li></NavLink>
          <NavLink to='/about'><li>About</li></NavLink>

          </ul>
          <div className="nav-details">
            <p className="nav-username"> {props.username} </p>
          </div>
        </nav>
    )
}

export default Navbar;
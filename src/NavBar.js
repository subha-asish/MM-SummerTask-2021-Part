import React,{ useState } from 'react';
import logo from './logo.png'
import HomeIcon from '@material-ui/icons/Home';
import {Link} from 'react-router-dom';



function NavBar() {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <nav>
                <div className="logo"><img src={logo} alt="NaviNews" width="210px" height="193px"></img></div>
                <ul className="nav-links" 
                style={{transform : open ? "translateX(0px)" : ""}}>
                
                    <li className="ab"><Link class ="nav-link" to="/"><HomeIcon/>  Home</Link></li>
                    <li className="ab"><Link class ="nav-link" to="/Schedule">Schedule</Link></li>
                    <li className="ab"><Link class ="nav-link" to="/Reporter">Reoprter</Link></li>
                    <li className="ab"><Link class ="nav-link" to="/Contact">Contact</Link></li>
                    <li className="ab"><Link class ="nav-link" to="/Signup">Signup</Link></li>
                    <li className="ab"><Link class ="nav-link" to="/Login">Login</Link></li>
                </ul>
                <i onClick={ () => setOpen(!open)   }  class="fas fa-bars burger" ></i>
            </nav>

        </div>
    );
}

export default NavBar


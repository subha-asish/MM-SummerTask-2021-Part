import React,{ useState } from 'react';
import logo from './logo.png'
import HomeIcon from '@material-ui/icons/Home';



function NavBar() {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <nav>
                <div className="logo"><img src={logo} alt="NaviNews" width="210px" height="193px"></img></div>
                <ul className="nav-links" 
                style={{transform : open ? "translateX(0px)" : ""}}>
                
                    <li className="ab"><HomeIcon/>  Home</li>
                    <li className="ab">Schedule</li>
                    <li className="ab">Reoprter</li>
                    <li className="ab">Contact</li>
                    <li className="ab">Signup</li>
                </ul>
                <i onClick={ () => setOpen(!open)   }  class="fas fa-bars burger" ></i>
            </nav>

        </div>
    );
}

export default NavBar


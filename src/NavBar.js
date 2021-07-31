import React,{ useState } from 'react';
import logo from './logo.png'
import HomeIcon from '@material-ui/icons/Home';
import {Link} from 'react-router-dom';
import { Button } from '@material-ui/core';
import Login from './components/Login';





function NavBar() {
   const [open, setOpen] = useState(false)

const openLogin =() => {
    setOpen(true);
}





    return (
        <div>
            <nav>
                <div className="logo"><img src={logo} alt="NaviNews" width="210px" height="193px"></img></div>
                <ul className="nav-links" 
                style={{transform : open ? "translateX(0px)" : ""}}>
                    <Button variant="contained" className=" ab"><Link class ="nav-link" to="/"><HomeIcon/>Home</Link></Button >
                    <Button  variant="contained" className="ab"><Link class ="nav-link" to="/Schedule">Schedule</Link></Button >
                    <Button variant="contained" className="ab"><Link class ="nav-link" to="/Reporter">Reoprter</Link></Button >
                    <Button variant="contained" className="ab"><Link class ="nav-link" to="/Contact">Contact</Link></Button >
                    <Button variant="contained"     className="ab"><Link class ="nav-link" to="/Signup">Signup</Link></Button >
                    <Button variant="contained" onClick={() => openLogin()} className="ab"><Link class ="nav-link" to="/Login">Login</Link></Button >
                </ul>
                <i onClick={ () => setOpen(!open)   }  class="fas fa-bars burger" ></i>
                <Login open={open} setOpen={setOpen}/>
                
            </nav>

        </div>
    );
}


export default NavBar


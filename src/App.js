import React from "react";
import './App.css';
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import  Carousel from "./Carousel";
import Typography from '@material-ui/core/Typography';


function App(){
  return(
    <div>
      <NavBar/>
      <SearchBar/>
      <Typography gutterBottom variant="h1" component="h2" align="center" className="trending">
            Trending
          </Typography>
      <Carousel/>
    </div>
  );
}


export default App;

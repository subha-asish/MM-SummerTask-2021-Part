import React from "react";
import Typography from '@material-ui/core/Typography';
import Carousel from "../Carousel";
import Banner from "./Banner";
import '../App.css';
const Home = () =>{
    return(
    <div className ="container">
        <Banner/>
        <Typography gutterBottom variant="h1" component="h2" align="center" className="trending">
        Trending
       </Typography>
      <Carousel/>
    </div>
    )
}

export default Home;
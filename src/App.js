import React from "react";
import './App.css';
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import Carousel from "./Carousel";
import Typography from '@material-ui/core/Typography';
import Home from "./compoments/Home";
import Schedule from "./compoments/Schedule";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



function App() {
  return (

    <div>

      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/Schedule" component={Schedule}/>
        </Switch>
        <Home />
        <Schedule />
      </Router>
      <SearchBar />
      <Typography gutterBottom variant="h1" component="h2" align="center" className="trending">
        Trending
          </Typography>
      <Carousel />
    </div>

  );
}


export default App;

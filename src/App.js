import React from "react";
import './App.css';
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import Home from "./components/Home";
import Schedule from "./components/Schedule";



import Reporter from "./components/Reporter";
import Contact from "./components/Contact";
import Signup from "./components/Signup";
import Login from "./components/Login";
import FullArticle from "./FullArticle";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



function App() {
  return (
<Router>
<Switch>
    <div>
    <NavBar />
       
        <SearchBar />
        
          <Route exact path="/" component={Home}/>
          <Route exact path="/Schedule" component={Schedule}/>
          <Route exact path="/Reporter" component={Reporter}/>
          <Route exact path="/Contact" component={Contact}/>
          <Route exact path="/Signup" component={Signup}/>
          <Route exact path="/Login" component={Login}/>
          <Route exact path="/FullArticle" component={FullArticle}/>
        
    </div>
    </Switch>
</Router>
    
  );
}


export default App;

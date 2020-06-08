import React from 'react';
import Footer from './component/Footer/Footer'
import Contact from './component/Contact/Contact'
import About from './component/About/About'
import Service from './component/Service/Service'
import MobileCard from './component/FoodCard/MobileCard';
import Home from './containers/Home/Home';
import SignUp from './containers/Signup/Signup';
import {BrowserRouter ,Route, Switch } from 'react-router-dom';
import Login from "./containers/Login/Login";


function App() {
  return (
    <BrowserRouter>
    <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={Login} />
    <Route path="/signup" exact component={SignUp} />
    </Switch>
    </BrowserRouter>
  );
}


export default App;

import React from 'react';
import Home from './containers/Home/Home';
import SignUp from './containers/Signup/Signup';
import {BrowserRouter ,Route, Switch } from 'react-router-dom';
import Login from "./containers/Login/Login";
import Nav from './component/UI/Navigation/Nav/Nav';
import Service from './component/Service/Service';
import Admin from "./containers/Admin/Admin"


function App() {
  return (
    <BrowserRouter>
    <Nav />
    <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login"  component= {Login}/>
    <Route path="/signup"  component={SignUp} />
    <Route path="/admin" component={Admin} />
    <Route path="/service"  component={Service} />
    </Switch>
    </BrowserRouter>
  );
}


export default App;

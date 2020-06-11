import React from 'react';
import Home from './containers/Home/Home';
import SignUp from './containers/Signup/Signup';
import {BrowserRouter ,Route, Switch } from 'react-router-dom';
import Login from "./containers/Login/Login";
import Nav from './component/UI/Navigation/Nav/Nav';
import Service from './component/Service/Service';
import Admin from "./containers/Admin/Admin"
import About from './component/About/About';
import Profile from './containers/Profile/Profile';
import Search from './containers/Search/Search';
import Footer from './component/Footer/Footer';
import Error from "./component/Error/Error"


function App() {
  const routes = (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login"  component= {Login}/>
        <Route path="/signup"  component={SignUp} />
        <Route path="/admin" component={Admin} />
        <Route path="/service"  component={Service} />
      </Switch>
  );

  return (
    <BrowserRouter>
    <Nav />

    <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login"  component= {Login}/>
    <Route path="/signup"  component={SignUp} />
    <Route path="/admin" component={Admin} />
    <Route path="/service"  component={Service} />
    <Route path ="/about" component={About} />
    <Route path ="/profile" component={Profile} />
    <Route path ="/search" component={Search} />
    <Route component={Error} />
    {/* <Route path ="/orders" component={Search} /> */}


    </Switch>
{/* <Footer /> */}

    </BrowserRouter>
  );
}


export default App;


// NAVIGATION BAR IS FIXES SO WE HAVE TO GIVE MARGIN TOP AND MARGIN BOTTOM TO ENTIRE APP
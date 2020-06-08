import React from 'react';
import Footer from './component/Footer/Footer'
import Contact from './component/Contact/Contact'
import About from './component/About/About'
import Service from './component/Service/Service'
import MobileCard from './component/FoodCard/MobileCard';
import Home from './containers/Home/Home';
import SignUp from './containers/Signup/Signup';
import {BrowserRouter ,Route, Switch, Redirect} from 'react-router-dom';
import Login from "./containers/Login/Login";


function App() {
  return (
    <div>
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Login}/>
                <Route path='/signup' exact component={SignUp}/>
                <Route path='/signin' component={Login}/>
                <Redirect to='/'/>

            </Switch>
        </BrowserRouter>
    </div>
  );
}


export default App;



{/* <MobileCard /> */}
      {/* <Service />
      <About />
      <Contact />
      <Footer /> */}
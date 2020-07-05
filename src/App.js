import React from "react";
import { connect } from "react-redux";
import Home from "./containers/Home/Home";
import SignUp from "./containers/Signup/Signup";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./containers/Login/Login";
import Nav from "./component/UI/Navigation/Nav/Nav";
import Service from "./component/Service/SpecialService";
import Admin from "./containers/Admin/Admin";
import About from "./component/About/About";
import Profile from "./containers/Profile/Profile";
import Search from "./containers/Search/Search";
import Footer from "./component/Footer/Footer";
import Error from "./component/Error/Error";
import VegItems from "./containers/VegItems/VegItems";
import NonVegItems from "./containers/NonVegItems/NonVegItems";
import Cart from "./containers/Cart/Cart";
import Orders from "./containers/Orders/Orders";
import Details from "./containers/Details/Details";
import { toast } from "react-toastify";
import keys from './keys'
import OrderDetails from "./containers/OrderDetails/OrderDetails";

const signInRoutes = (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path={"/"+keys.adminRoute} component={Admin} />
    <Route path="/service" component={Service} />
    <Route path="/veg" component={VegItems} />
    <Route path="/details/:id" component={Details} />
    <Route path="/nonveg" component={NonVegItems} />
    <Route path="/cart" component={Cart} />
    <Route path="/orders" component={Orders} />
    <Route path="/about" component={About} />
    <Route path="/profile" component={Profile} />
    <Route path="/search" component={Search} />
    <Route path="/order-details/:id" component={OrderDetails}/>
  </Switch>
);
const signOutRoutes = (
  <Switch>
    <Route  path="/" exact component={Login} />
    <Route path="/signup" exact component={SignUp} />
    <Route path="/about" exact component={About}/>
    <Route path="/search" component={Search} />
    <Route component={Error} />
  </Switch>
);

toast.configure()
function App(props) {
  return (
    <BrowserRouter>
      <Nav />
      {!localStorage.getItem("signIn") ? signOutRoutes : signInRoutes}
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
      isSignIn : state.auth.isSignIn
  };
};

export default connect(mapStateToProps)(App);


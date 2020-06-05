import React from 'react';
import Footer from './Components/Footer/Footer'
import Contact from './Components/Contact/Contact'
import About from './Components/About/About'
import Service from './Components/Service/Service'
import MobileCard from './Components/FoodCard/MobileCard';


function App() {
  return (
    <div>
      {/* <MobileCard /> */}
      <Service />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

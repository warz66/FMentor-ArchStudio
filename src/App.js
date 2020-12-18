import './App.css';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import Home from 'views/home/Home';
import Portfolio from 'views/portfolio/Portfolio';
import AboutUs from 'views/about-us/AboutUs';
import Contact from 'views/contact/Contact';
import ScrollToTop from "components/scroll-to-top/ScrollToTop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LocationDesign from 'components/location-design/LocationDesign';
import React, { useState } from 'react';
/*import desktopHome from 'assets/design/desktop/Desktop-Home.jpeg';
import tabletHome from 'assets/design/tablet/Tablet-Home.jpeg';
import mobileHome from 'assets/design/mobile/Mobile-Home.jpeg';
import mobileMenu from 'assets/design/mobile/Mobile-Menu.jpeg';
import desktopPortfolio from 'assets/design/desktop/Desktop-Portfolio.jpeg';
import desktopPortfolioActiveStates from 'assets/design/desktop/Desktop-Portfolio-ActiveStates.jpeg';
import tabletPortfolio from 'assets/design/tablet/Tablet-Portfolio.jpeg';
import mobilePortfolio from 'assets/design/mobile/Mobile-Portfolio.jpeg';
import desktopAbout from 'assets/design/desktop/Desktop-About.jpeg';
import tabletAbout from 'assets/design/tablet/Tablet-About.jpeg';
import mobileAbout from 'assets/design/mobile/Mobile-About.jpeg';
import desktopContact from 'assets/design/desktop/Desktop-Contact.jpeg';
import tabletContact from 'assets/design/tablet/Tablet-Contact.jpeg';
import mobileContact from 'assets/design/mobile/Mobile-Contact.jpeg';*/

const App = () => {
  const [location, setLocation] = useState('');
  
  const assignLocation = (location) => {
    setLocation(location);
  }

  return (

    <div className="App">

      {/*<img src={desktopHome} alt="" style={{position: 'absolute', left:0, top:0, zIndex: 2, opacity: 0.3, margin: 0, width: '1440px'}}/>*/}
      {/*<img src={tabletHome} alt="" style={{position: 'absolute', left:0, top:0, zIndex: 2, opacity: 0.3, margin: 0, width: '768px'}}/>*/}
      {/*<img src={mobileHome} alt="" style={{position: 'absolute', left:0, top:0, zIndex: 2, opacity: 0.3, margin: 0, width: '375px'}}/>*/}
      {/*<img src={mobileMenu} alt="" style={{position: 'absolute', left:0, top:0, zIndex: 2, opacity: 0.3, margin: 0, width: '375px'}}/>*/}
      
      {/*<img src={desktopPortfolio} alt="" style={{position: 'absolute', left:0, top:0, zIndex: 2, opacity: 0.3, margin: 0, width: '1440px'}}/>*/}
      {/*<img src={desktopPortfolioActiveStates} alt="" style={{position: 'absolute', left:0, top:0, zIndex: 2, opacity: 0.3, margin: 0, width: '1440px'}}/>*/}
      {/*<img src={tabletPortfolio} alt="" style={{position: 'absolute', left:0, top:0, zIndex: 2, opacity: 0.3, margin: 0, width: '768px'}}/>*/}
      {/*<img src={mobilePortfolio} alt="" style={{position: 'absolute', left:0, top:0, zIndex: 2, opacity: 0.3, margin: 0, width: '375px'}}/>*/}

      {/*<img src={desktopAbout} alt="" style={{position: 'absolute', left:0, top:0, zIndex: 2, opacity: 0.3, margin: 0, width: '1440px'}}/>*/}
      {/*<img src={tabletAbout} alt="" style={{position: 'absolute', left:0, top:0, zIndex: 2, opacity: 0.5, margin: 0, width: '768px'}}/>*/}
      {/*<img src={mobileAbout} alt="" style={{position: 'absolute', left:0, top:0, zIndex: 2, opacity: 0.3, margin: 0, width: '375px'}}/>*/}

      {/*<img src={desktopContact} alt="" style={{position: 'absolute', left:0, top:0, zIndex: 2, opacity: 0.3, margin: 0, width: '1440px'}}/>*/}
      {/*<img src={tabletContact} alt="" style={{position: 'absolute', left:0, top:0, zIndex: 2, opacity: 0.5, margin: 0, width: '768px'}}/>*/}
      {/*<img src={mobileContact} alt="" style={{position: 'absolute', left:0, top:0, zIndex: 2, opacity: 0.3, margin: 0, width: '375px'}}/>*/}

      <LocationDesign location={location}/>

      <Router>

        <ScrollToTop/>

        <Header/>
        
        <Switch>

            <Route exact path="/">
              <Home assignLocation={assignLocation}/>
            </Route>
            
            <Route path="/portfolio">
              <Portfolio assignLocation={assignLocation}/>
            </Route>

            <Route path="/about-us">
              <AboutUs assignLocation={assignLocation}/>
            </Route>

            <Route path="/contact">
              <Contact assignLocation={assignLocation}/>
            </Route>

        </Switch>

        <Footer/>

      </Router>

    </div>
    
  );
}

export default App;

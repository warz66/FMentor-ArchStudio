import './App.css';
import Header from 'components/header/Header';
import { BrowserRouter as Router/*, Switch, Route*/ } from "react-router-dom";
/*import desktopHome from 'assets/design/desktop/Desktop-Home.jpeg';
import tabletHome from 'assets/design/tablet/Tablet-Home.jpeg';
import mobileHome from 'assets/design/mobile/Mobile-Home.jpeg';
import mobileMenu from 'assets/design/mobile/Mobile-Menu.jpeg';*/

function App() {
  return (
    <div className="App">
      {/*<img src={desktopHome} alt="" style={{position: 'absolute', left:0, top:0, zIndex: 2, opacity: 0.3, margin: 0, width: '1440px'}}/>*/}
      {/*<img src={tabletHome} alt="" style={{position: 'absolute', left:0, top:0, zIndex: 2, opacity: 0.3, margin: 0, width: '768px'}}/>*/}
      {/*<img src={mobileHome} alt="" style={{position: 'absolute', left:0, top:0, zIndex: 2, opacity: 0.3, margin: 0, width: '375px'}}/>*/}
      {/*<img src={mobileMenu} alt="" style={{position: 'absolute', left:0, top:0, zIndex: 2, opacity: 0.3, margin: 0, width: '375px'}}/>*/}
      <Router>
      <Header/>
        {/*<Switch>
          <Route path="/Country/:a3c" component={Country}/>
          <Route exact path="/" component={Home}/>
        </Switch>*/}
      </Router>
    </div>
  );
}

export default App;

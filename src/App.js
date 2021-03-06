import './App.css';

import Home from './components/Home';
import TechnicalStack from './components/TechnicalStack';
import Portfolio from './components/Portfolio';
import ContactUs from './components/ContactUs';

import { Route, BrowserRouter as Router } from "react-router-dom";
import NavBar from './components/NavBar';

// Import fontawesome icons for react.

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

// Need to do this here to load the icons
library.add(fab, fas);


function App() {


  return (
    <Router>
      {/* <Switch> */}
      <div>
        <header>
          <nav>
            <NavBar />

          </nav>
        </header>
        <div>
          <Route path="/TechnicalStack" component={TechnicalStack} />
          <Route path="/Portfolio" component={Portfolio} />
          <Route path="/ContactUs" component={ContactUs} />
          <Route exact path="/" component={Home} />
        </div>
      </div>
      {/* </Switch> */}
    </Router>
  );
}

export default App;

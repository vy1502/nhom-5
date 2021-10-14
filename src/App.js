
import './App.css';
import Footer from './components/Footer/Footer.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './components/Home/Home.js';
import Logout from './components/Logout/Logout.js';
import Menu from './components/Header/Menu/Menu';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/" component={Login} />
          <Route path="/logout" component={Logout} />
        </Switch>

        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;

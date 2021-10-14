import "./App.css";
import Footer from "./components/Footer/Footer.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home.js";
import Logout from "./components/Logout/Logout.js";
import Menu from "./components/Header/Menu/Menu";
import Book from "./components/Book/Book";

import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div style={{ minHeight: "100vh" }}>
          <Switch>
            <Route path="/home" exact component={Home} />
            <Route path="/" exact component={Login} />
            <Route path="/logout" exact component={Logout} />
            <Route path="/details/:id" exact component={Book} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

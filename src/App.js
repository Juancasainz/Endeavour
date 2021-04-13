import Navbar from "./components/Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Done from "./components/Done";
import About from './components/About'



function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;

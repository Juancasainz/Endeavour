import Navbar from './components/Navbar';
import Home from './Home';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Done from './components/Done';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Router>
       <Switch>
         <Route exact path="/">
           <Home/>
         </Route>
         <Route path="/done">
           <Done></Done>
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;

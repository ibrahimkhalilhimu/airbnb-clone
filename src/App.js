import './App.css';
import Home from './component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SearchPage from './component/SearchPage/SearchPage';
import Navbar from './component/Home/Navbar/Navbar';
import Footer from './component/Home/Footer/Footer';

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar/>
        <Switch>
        <Route path="/search">
            <SearchPage/>
          </Route>
          <Route path="/">
          <Home/>
          </Route>
         
        </Switch>
      <Footer/>
      </Router>
      
    </div>
  );
}

export default App;

import Topbar from './components/Topbar/Topbar';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Settings from './pages/Settings/Settings';
import Single from './pages/Single/Single';
import Write from './pages/Write/Write';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  const user = "";
  return (
    <Router>
      <Topbar/>
        <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/login">
              {user ? <Home/> : <Login/>}
            </Route>
            <Route exact path="/register">
              {user ? <Home/> : <Register/>}
            </Route>
            <Route exact path="/settings">
              {user ? <Settings/> : <Register/>}
            </Route>
            <Route exact path="/post/:postId">
              <Single/>
            </Route>
            <Route exact path="/write">
              {user ? <Write /> : <Register/>}
            </Route>
        </Switch>    
      </Router>
  );
}

export default App;

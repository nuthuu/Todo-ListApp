import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Route, Router, Switch } from 'react-router-dom';
import './App.css';
import './index.css'
import Home from './components/Home';
import Navbar from './components/Navbar';
import CreateList from './components/CreateList';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/create">
              <CreateList></CreateList>
            </Route>
          </Switch>
          </div>
      </div>
    </Router>
  );
}

export default App;

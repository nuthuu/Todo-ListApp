import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import './index.css'
import Home from './components/Home';
import Navbar from './components/Navbar';
import CreateList from './components/CreateList';
import TodoDetails from './components/TodoDetails';
import NotFound from './components/NotFound';

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
            <Route path="/Create">
              <CreateList></CreateList>
            </Route>
            <Route path="/Todo-details/:id">
              <TodoDetails></TodoDetails>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          </div>
      </div>
    </Router>
  );
}

export default App;

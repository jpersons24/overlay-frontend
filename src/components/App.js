import '../App.css';
// tool and library imports
import { Switch, Route } from 'react-router-dom'

// component imports
import Home from './Home'
import NavBar from './NavBar'
import Stories from './Stories'

function App() {
  return (
    <div className="App">
      <h3>This is SportsCenter</h3>
      <NavBar />
      <Switch>
        {/* Route will live inside Switch */}
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/news">
          <Stories />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

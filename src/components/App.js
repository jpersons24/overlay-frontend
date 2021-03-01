import '../App.css';
// tool and library imports
import { Switch, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// component imports
import Home from './Home'
import NavBar from './NavBar'
import Stories from './Stories'
import FavoriteStories from './FavoriteStories'

// import reducer function from userSlice
// import { newCurrentUser } from '../redux/userSlice'

function App() {

  // useSelector to set const variable to whatever state it at that time
  

  // set dispatch to useDispatch function for later use
  // const dispatch = useDispatch()


  // get all users
  // useEffect(() => {
  //   fetch("http://localhost:4000/users")
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data)  
  //   })
  // }, [])

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
        <Route exact path="/fav_stories">
          <FavoriteStories />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

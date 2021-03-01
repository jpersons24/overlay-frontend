import '../App.css';
// tool and library imports
import { Switch, Route } from 'react-router-dom'
// import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// component imports
import Home from './Home'
import NavBar from './NavBar'
import Stories from './Stories'
import FavoriteStories from './FavoriteStories'
import GamesContainer from './GamesContainer'

// import reducer function from userSlice
import { setCurrentUser } from '../redux/userSlice'

function App() {

  // useSelector to set const variable to whatever state it at that time
  const currentUserBox = useSelector((state) => state.user.currentUser)
  // console.log(currentUserBox)

  // set dispatch to useDispatch function for later use
  const dispatch = useDispatch()

  function handleLogout(event) {
    const action = setCurrentUser(null)
    dispatch(action)
    console.log("User logged out!")
  }

  function handleLogin(event) {
    fetch("http://localhost:4000/me")
    .then(res => res.json())
    .then(data => {
      const action = setCurrentUser(data)
      dispatch(action)
      console.log("Logging in user!")
    })
  }

  return (
    <div className="App">
      <h3>This is SportsCenter</h3>
      <button onClick={handleLogin}>Log in</button>
      <button onClick={handleLogout}>Log out</button>
      {currentUserBox ? <h5>Welcome, {currentUserBox.username}</h5> : null}
      <br></br>
      <br></br>
      <br></br>
      <NavBar />
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/news">
          <Stories />
        </Route>
        <Route exact path="/fav_stories">
          <FavoriteStories />
        </Route>
        <Route exact path="/games">
          <GamesContainer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

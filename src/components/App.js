import '../App.css';
// tool and library imports
import { Switch, Route } from 'react-router-dom'
// import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

// component imports
import Home from './Home'
import NavBar from './NavBar'
import Stories from './Stories'
import FavoriteStories from './FavoriteStories'
import GamesContainer from './GamesContainer'

// import reducer function from userSlice
import { setCurrentUser } from '../redux/userSlice'
import { displayPosts } from '../redux/postSlice'
import { displayStories } from '../redux/storySlice'
import { displayGames } from '../redux/gameSlice'

function App() {

  // useSelector to set const variable to whatever state it at that time
  const currentUserBox = useSelector((state) => state.user.currentUser)
  
  // const posts = useSelector((state) => state.post.displayedPosts)

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

  // stories
  useEffect(() => {
    fetch("http://localhost:4000/stories")
    .then(res => res.json())
    .then(data => {
       const action = displayStories(data)
       dispatch(action)
       console.log('Setting stories!')
    })
  }, [dispatch])

  // games
  useEffect(() => {
    fetch("http://localhost:4000/games")
    .then(res => res.json())
    .then(data => {
       // console.log(data)
       const action = displayGames(data)
       // console.log(action)
       dispatch(action)
       console.log("getting games!")
    })
  }, [dispatch])

    useEffect(() => {
      fetch("http://localhost:4000/posts")
      .then(res => res.json())
      .then(data => {
        const action = displayPosts(data)
        dispatch(action)
        console.log("getting posts")
      })
    }, [dispatch])


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

import '../index.css'

// tool and library imports
import { Switch, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

// component imports
import Home from './Home'
import NavBar from './NavBar'
import Stories from './Stories'
import FavoriteStories from './FavoriteStories'
import GamesContainer from './GamesContainer'

// import reducer action items
import { displayPosts } from '../redux/postSlice'
import { displayStories } from '../redux/storySlice'
import { displayGames, displayNhlGames } from '../redux/gameSlice'

function App() {

  // set dispatch to useDispatch function for later use
  const dispatch = useDispatch()

  // nhl games
  useEffect(() => {
    fetch("https://api.the-odds-api.com/v3/odds/?apiKey=e9f576a0a8b58da82e7708ac0b19346e&sport=icehockey_nhl&region=us&mkt=totals&dateFormat=iso")
    .then(res => res.json())
    .then(data => {
      const action = displayNhlGames(data.data)
      dispatch(action)
    })
  }, [dispatch])

  // stories from news api
  useEffect(() => {
    fetch("https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=c57acc4703364867840f0f90de339cf3")
    .then(res => res.json())
    .then(data => {
       const action = displayStories(data.articles)
       dispatch(action)
       console.log('Setting stories!')
    })
  }, [dispatch])

  // games
  useEffect(() => {
    fetch("http://localhost:4000/games")
    .then(res => res.json())
    .then(data => {
       const action = displayGames(data)
       dispatch(action)
       console.log("getting games!")
    })
  }, [dispatch])

  // posts
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
    <div>
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


// ******** styled components ********


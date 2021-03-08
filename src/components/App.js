// tool and library imports
import { Switch, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import styled from 'styled-components'

// component imports
import Home from './Home'
import NavBar from './NavBar'
import Stories from './Stories'
import FavoriteStories from './FavoriteStories'
import GamesContainer from './GamesContainer'
import GameShow from './GameShow'

// import reducer functions from slice's
import { setCurrentUser } from '../redux/userSlice'
import { displayPosts } from '../redux/postSlice'
import { displayStories } from '../redux/storySlice'
import { displayGames } from '../redux/gameSlice'

function App() {

  // useSelector to set const variable to whatever state it at that time
  const currentUserBox = useSelector((state) => state.user.currentUser)

  // set dispatch to useDispatch function for later use
  const dispatch = useDispatch()

  // andle user logout
  function handleLogout(event) {
    const action = setCurrentUser(null)
    dispatch(action)
    console.log("User logged out!")
  }

  // handle user login
  function handleLogin(event) {
    fetch("http://localhost:4000/me")
    .then(res => res.json())
    .then(data => {
      const action = setCurrentUser(data)
      dispatch(action)
      console.log("Logging in user!")
    })
  }

  // nhl games
  // useEffect(() => {
  //   fetch("https://api.the-odds-api.com/v3/odds/?apiKey=e9f576a0a8b58da82e7708ac0b19346e&sport=icehockey_nhl&region=us&mkt=totals&dateFormat=iso")
  //   .then(res => res.json())
  //   .then(data => {
  //     // console.log(data)
  //     const action = displayNhlGames(data.data)
  //     console.log(action)
  //     dispatch(action)
  //   })
  // }, [dispatch])

  // stories
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
    <Wrapper>
      <Header>
        <HeaderName>The Degenerate</HeaderName>
        <LoginContainer>
          {currentUserBox ? <WelcomeMess>Welcome, {currentUserBox.username}</WelcomeMess> : null}
          <button onClick={handleLogin}>Log in</button>
          <button onClick={handleLogout}>Log out</button>
        </LoginContainer>
      </Header>
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
        <Route exact path="/games/:id">
          <GameShow />
        </Route>
      </Switch>
    </Wrapper>
  );
}

export default App;


// ******** styled components ********

const Wrapper = styled.div`
  background-color: #F1F2F3;
  padding-bottom: 100px;
`

const Header = styled.div`
  display: inline;
`

const HeaderName = styled.h2`
  display: inline-block;
  padding-left: 5px;
  margin-top: 3px;
`

const LoginContainer = styled.div`
  display: inline-block;
  float: right;
  margin-bottom: 20px;
`

const WelcomeMess = styled.h5`
  margin: 0px;
  padding: 3px;
`

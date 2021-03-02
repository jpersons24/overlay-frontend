import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import styled from 'styled-components'
import { displayStories } from '../redux/storySlice'
import { displayGames } from '../redux/gameSlice'



function Home () {

   // useSelectors
   const homeStories = useSelector((state) => state.story.displayedStories)
   const homeGames = useSelector((state) => state.game.displayedGames)

   const dispatch = useDispatch()

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


   // map through story objects to display
   const displayHomeStories = homeStories.map((story) => {
      return (
         <StoryContainer key={story.id}>
            <h3>{story.title}</h3>
            <StoryImage src={story.url_to_image} alt={story.title}/>
         </StoryContainer>
      )
   })

   // map through story objects to display
   const displayGamePreview = homeGames.map((game) => {
      return (
         <GameContainer key={game.id}>
            <h4>{game.sport_nice}</h4>
            <p>{game.home_team}(h)</p>
            <p>{game.away_team}(a)</p>
            <p>Game time: {game.commence_time}</p>
            <p>Button here to go to game odds</p>
         </GameContainer>
      )
   })


   return (
      <div>
         <h2>This is the home page!!!</h2>
         <Wrapper>
            {displayHomeStories}
         </Wrapper>
         <Wrapper>
            {displayGamePreview}
         </Wrapper>
      </div>
   )
}

export default Home;


// ****** styling components *******

const Wrapper = styled.div`
   margin: auto;
   margin-top: 25px;
   margin-bottom: 50px;
   width: 80%;
   height: 300px;
   border-style: single;
   border-color: black;
   background-color: silver;
   padding: 20px;
   overflow: auto;
`

const StoryContainer = styled.div`
   margin: 30px 70px;
   display: inline-block;
   border-style: solid;
   border-color: red;
   border-radius: 15px;
`

const GameContainer = styled.div`
   display: inline-block;
   color: white;
   background: black;
   border-style: solid;
   border-color: red;
   border-radius: 15px;
   margin: 25px;
   height: 265px;
   width: 200px;
`

const StoryImage = styled.img`
   height: 100px;
   width: 100px;
`
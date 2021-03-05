import { useSelector } from 'react-redux'
import styled from 'styled-components'


function Home () {

   // useSelectors
   const homeStories = useSelector((state) => state.story.displayedStories)
   const homeGames = useSelector((state) => state.game.displayedGames)

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
      <Wrapper>
         <SubHeaders>Latest news headlines:</SubHeaders>
         <SubWrapper>
            {displayHomeStories}
         </SubWrapper>
         <SubHeaders>Today's events:</SubHeaders>
         <SubWrapper>
            {displayGamePreview}
         </SubWrapper>
      </Wrapper>
   )
}

export default Home;


// ****** styling components *******

const Wrapper = styled.div`
   margin-top: 30px;
`

const SubWrapper = styled.div`
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

const SubHeaders = styled.div`
   text-align: center;
`

const StoryContainer = styled.div`
   margin: 30px 70px;
   display: inline-block;
   border-style: solid;
   border-color: red;
   border-radius: 15px;
   padding: 20px;
`

const StoryTitle = styled.h3`
`

const StoryImage = styled.img`
display: block;   
margin-right: auto;
margin-left: auto;
height: 200px;
width: 50%;
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
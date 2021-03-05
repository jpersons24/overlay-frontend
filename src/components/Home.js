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
            <StoryTitle>{story.title}</StoryTitle>
            <StoryImage src={story.url_to_image} alt={story.title}/>
         </StoryContainer>
      )
   })

   // handle click of game details button
   function handleClick(event) {
      console.log(event.target)
   }

   // map through game objects to display
   const displayGamePreview = homeGames.map((game) => {

      // change date format from ISO -> milli -> standard
      // const newDate = new Date(Date.parse(game.commence_time))
      // console.log(newDate)

      return (
         <GameContainer key={game.id}>
            <h4>{game.sport_nice}</h4>
            <p>{game.home_team}(h)</p>
            <p>{game.away_team}(a)</p>
            <p>Game time: (show corrent format here)</p>
            <DetailsButton onClick={handleClick}>Event Details</DetailsButton>
         </GameContainer>
         
      )
   })


   return (
      <Wrapper>
         <SubHeaders>Top headlines:</SubHeaders>
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
   margin-top: 50px;
`

const SubWrapper = styled.div`
   margin: auto;
   margin-top: 25px;
   margin-bottom: 50px;
   width: 80%;
   height: 300px;
   border-style: ridge;
   border-color: #9C824A;
   background-color: #ED462F;
   padding: 20px;
   overflow: auto;
`

const SubHeaders = styled.div`
   text-align: center;
`

const StoryContainer = styled.div`
   margin: 30px 70px;
   display: inline-block;
   background-color: #F1F2F3;
   border-style: groove;
   border-color: #9C824A;
   border-radius: 15px;
   padding: 20px;
`

const StoryTitle = styled.h3`
   text-align: center;
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
   color: black;
   background: #F1F2F3;
   text-align: center;
   border-style: solid;
   border-color: #9C824A;
   border-radius: 15px;
   margin: 25px;
   height: 265px;
   width: 200px;
`

const DetailsButton = styled.button`
   color: white;
   background: #033474;
`
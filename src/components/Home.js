import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


function Home () {

   // useSelectors
   const homeStories = useSelector((state) => state.story.displayedStories)
   const homeGames = useSelector((state) => state.game.displayedGames)
   // const nhlGames = useSelector((state) => state.game.nhlGames)
   // console.log(nhlGames)

   // map through story objects to display
   const displayHomeStories = homeStories.map((story) => {
      return (
         <StoryContainer key={story.publishedAt}>
            <StoryTitle>{story.title}</StoryTitle>
            <StoryImage src={story.urlToImage} alt="Could not display article image, sorry!"/>
            <p>Add story url here</p>
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
            <p>{game.home_team} <em>(h)</em></p>
            <p>{game.away_team} <em>(a)</em></p>
            <p>Game time: </p>
            <Link to={`/games/${game.id}`}>
               <DetailsButton onClick={handleClick}>Game Details</DetailsButton>
            </Link>
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
   height: 375px;
   border-style: ridge;
   border-color: #9C824A;
   background-color: #474747;
   padding: 20px;
   overflow: auto;
   box-shadow: 5px 5px 5px #9C824A;
   content-align: center
`

const SubHeaders = styled.div`
   text-align: center;
`

const StoryContainer = styled.div`
   display: block;
   margin: 10px 0px;
   margin-right: auto;
   margin-left: auto;
   width: 60%;
   background-color: #F1F2F3;
   border-style: solid;
   border-color: #9C824A;
   border-radius: 15px;
   padding: 20px;
   box-shadow: 2px 2px 5px #9C824A;
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
   box-shadow: 2px 2px 5px #9C824A;
`

const DetailsButton = styled.button`
   color: white;
   background: #033474;
`
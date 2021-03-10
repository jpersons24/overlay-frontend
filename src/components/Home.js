import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
// import { Link } from 'react-router-dom'
// import GameShow from './GameShow'


function Home () {

   // useSelectors
   const homeStories = useSelector((state) => state.story.displayedStories)
   const nbaGames = useSelector((state) => state.game.displayedGames)
   const nhlGames = useSelector((state) => state.game.nhlGames)

   // map through story objects to display accordian feature
   const displayHomeStories = homeStories.map((story) => {

      const newDate = new Date (Date.parse(story.publishedAt))
      const displayDate = String(newDate)
      
      return (
         <Accordion key={story.title}>
            <Card>
               <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  <strong>{story.title}</strong>
                  </Accordion.Toggle>
               </Card.Header>
               <Accordion.Collapse eventKey="0">
                  <Card.Body>
                     <em>{story.description}</em>
                     <br></br>
                     <br></br>
                     <StoryImage src={story.urlToImage} alt="Sorry, no image to display!"/>
                     <br></br>
                     <p>{story.content}<a href={story.url}>Full Story</a></p>
                     <ul>
                        <li><strong>Source:</strong> {story.source.name}</li>
                        <li><strong>Author:</strong> {story.author}</li>
                        <li>Published <em>{displayDate}</em></li>
                     </ul>
                  </Card.Body>
               </Accordion.Collapse>
            </Card>
         </Accordion>
      )
   })

   // map through game objects to display
   const displayNbaGamePreview = nbaGames.map((game) => {

      const newDate = new Date (Date.parse(game.commence_time))
      const displayDate = String(newDate)

      return (
         <GameContainer key={game.id}>
            <h4>{game.sport_nice}</h4>
            <p>{game.home_team} <em>(h)</em></p>
            <p>{game.away_team} <em>(a)</em></p>
            <p><strong>Game time:</strong><br></br>{displayDate}</p>    
         </GameContainer>
      )
   })

   const displayNhlGamePreview = nhlGames.map((game) => {

      const awayTeam = game.teams.filter(team => team !== game.home_team)
      const newDate = new Date (Date.parse(game.commence_time))
      const displayDate = String(newDate)

      return (
         <Card 
            key={game.home_team} 
            style={{ 
               width: '60rem',
               margin: '15px 0px',
               display: 'block',
               marginRight: 'auto',
               marginLeft: 'auto',
            }}
            bg='dark'
            text='white'
         >
            <Card.Header>{game.sport_nice}</Card.Header>
            <Card.Body style={{ textAlign: 'center' }}>
               <Card.Text>
                  {game.home_team} <strong>(h)</strong>
                  <br></br>
                  VS 
                  <br></br>
                  {awayTeam} <strong>(a)</strong>
               </Card.Text>
               <Button>View Odds</Button>
            </Card.Body>
            <Card.Footer><em>{displayDate}</em></Card.Footer>
         </Card>
      )
   })

   return (
      <Wrapper>
         <SubHeader1>Top headlines:</SubHeader1>
         <StoryWrapper>
            {displayHomeStories}
         </StoryWrapper>
         <SubHeader2>Today's events:</SubHeader2>
         {/* <SubWrapper>
            {displayNbaGamePreview}
         </SubWrapper> */}
         <EventWrapper>
            {displayNhlGamePreview}
         </EventWrapper>
      </Wrapper>
   )
}

export default Home;


// ****** styling components *******

const Wrapper = styled.div`
   background-color: yellow;
`

const StoryWrapper = styled.div`
   margin: auto;
   margin-top: 25px;
   margin-bottom: 50px;
   width: 80%;
   height: 500px;
   border-style: ridge;
   border-color: #9C824A;
   background-color: #474747;
   overflow: auto;
   box-shadow: 5px 5px 5px #9C824A;
   content-align: center
`

const EventWrapper = styled.div`
   margin: auto;
   margin-top: 25px;
   margin-bottom: 50px;
   width: 80%;
   height: 500px;
   border-style: ridge;
   border-color: #9C824A;
   background-color: white;
   padding: 30px;
   overflow: auto;
   box-shadow: 5px 5px 5px #9C824A;
   content-align: center;
`

const SubHeader1 = styled.h2`
   padding-top: 50px;
   text-align: center;
`

const SubHeader2 = styled.h2`
   text-align: center;
`

const StoryImage = styled.img`
   display: block;   
   margin-right: auto;
   margin-left: auto;
   height: 250px;
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
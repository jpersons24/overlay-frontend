import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import NhlCarousel from './NhlCarousel'


function Home () {

   const homeStories = useSelector((state) => state.story.displayedStories)
   // const nbaGames = useSelector((state) => state.game.displayedGames)
   const nhlGames = useSelector((state) => state.game.nhlGames)

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

   return (
      <Wrapper>
         <SubHeader2>Upcoming events:</SubHeader2>
         <NhlCarousel nhlGames={nhlGames} />
         <SubHeader1>Top headlines:</SubHeader1>
         <StoryWrapper>
            {displayHomeStories}
         </StoryWrapper>
      </Wrapper>
   )
}

export default Home;


// ****** styling components *******

const Wrapper = styled.div`
   color: white;
   background-color: black;
   padding-bottom: 50px;
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

const SubHeader1 = styled.h2`
   padding-top: 50px;
   text-align: center;
`

const SubHeader2 = styled.h2`
   padding-top: 50px;
   text-align: center;
   margin-bottom: 30px;
`

const StoryImage = styled.img`
   display: block;   
   margin-right: auto;
   margin-left: auto;
   height: 250px;
   width: 50%;
`
import Carousel from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


function NhlCarousel({ nhlGames }) {

   const displayNhlGames = nhlGames.map((game) => {

      const awayTeam = game.teams.filter(team => team !== game.home_team)
      const newDate = new Date (Date.parse(game.commence_time))
      const displayDate = String(newDate)
      const gameDetails = {
         game: game,
         away_team: awayTeam[0],
         display_date: displayDate
      }
      const details = JSON.stringify(gameDetails)

      return (
         <Carousel.Item style={{textAlign: 'center',}}>
            <h3>{game.sport_nice}</h3>
            <br></br>
            <h5
               style={{
                  display: 'block',
                  marginRight: 'auto',
                  marginLeft: 'auto',
                  width: '70%',
               }}
            >{game.home_team} <em>(h)</em> VS {awayTeam} <em>(a)</em>
            </h5>
            <br></br>
            <GameTime>{displayDate}</GameTime>
            <Link to={`/game/${details}`}>View Game Details</Link>
         </Carousel.Item>
      )
   })

   return (
      <>
         <br></br>
         <br></br>
         <Carousel
            style={{
               height: '400px',
               marginRight: 'auto',
               marginLeft: 'auto',
               width: '60%',
               contentAlign: 'center',
               padding: '30px',
            }}
         >
            {displayNhlGames}
         </Carousel>
      </>
   )
}


export default NhlCarousel


const GameTime = styled.p`
   font-size: 12px;
`
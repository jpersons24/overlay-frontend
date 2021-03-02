import styled from 'styled-components'
// import { Link } from 'react-router-dom'
import GameShow from './GameShow'


function GameCard({ game, odds }) {

   console.log(odds)
   const sites = odds.map(site => {
      return (
         <div>
            <h3>{site.site_nice}</h3>
            <h6>Head 2 Head(home, away)</h6>
            <p>{site.odds}</p>
         </div>
      )
   })


   return (
      <Wrapper>
         <h3>{game.sport_nice}</h3>
         <p>{game.home_team} (h)</p>
         <p>{game.away_team} (a)</p>
         {/* <Link to="/game_show">
            Odds
         </Link> */}
         {sites}
         <p>Instead of a link, use button that then display odds information in div, with the scroll option</p>
      </Wrapper>
   )
};


export default GameCard;


const Wrapper = styled.div`
   display: inline-block; 
   color: black;
   background-color: yellow;  
   margin: auto;
   width: 50%;
   margin-bottom: 75px;
   border-style: double;
   border-color: black;
   border-radius: 10px;
   padding: 5px;
   height: 600px;
   overflow: auto;
`
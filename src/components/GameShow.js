import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import SitesCarousel from './SitesCarousel'

function GameShow() {

   const { details } = useParams()
   const gameObj = JSON.parse(details)
   console.log(gameObj)

   return (
      <Wrapper>
         <HomeTeam>{gameObj.game.home_team} (h)</HomeTeam>
         <AwayTeam>{gameObj.away_team} (a)</AwayTeam>
         <br></br>
         <br></br>
         <br></br>
         <SitesCarousel sites={gameObj.game.sites} gameObj={gameObj} />
         <br></br>
         <br></br>
         <br></br>
         <p 
            style={{
               marginRight: 'auto',
               marginLeft: 'auto',
               display: 'block',
               width: '35%',
            }}
         >
         {/* {gameObj.display_date} */}
         </p>
      </Wrapper>
   )
}

export default GameShow

const Wrapper = styled.div`
   color: white;
   background: black;
   padding-bottom: 130px;
`

const HomeTeam = styled.h2`
   display: inline-block;
   float: left;
   margin-left: 150px;
   margin-top: 50px;
`

const AwayTeam = styled.h2`
   display: inline-block;
   float: right;
   margin-right: 150px;
   margin-top: 50px;
`
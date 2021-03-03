import { useSelector } from 'react-redux'
import GameCard from './GameCard'
import styled from 'styled-components'

function GamesContainer() {

   const gamesToDisplay = useSelector((state) => state.game.displayedGames)

   const gameDisplay = gamesToDisplay.map((game) => {
      return (
         <GameCard key={game.id} game={game} odds={game.sites}/>
      )
   })

   return (
      <Wrapper>
         <h3>See all upcoming events here!</h3>
         {gameDisplay}
      </Wrapper>
   )
}


export default GamesContainer


const Wrapper = styled.div`
   margin: auto;
   width: 90%;
   height: 600px;
   background-color: ivory;
   border-style: solid;
   border-color: black;
   border-radius: 20px;
   margin-top: 50px;
   overflow: auto;
`
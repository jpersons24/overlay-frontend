import { useSelector } from 'react-redux'
import GameCard from './GameCard'
import styled from 'styled-components'

function GamesContainer() {

   const gamesToDisplay = useSelector((state) => state.game.displayedGames)

   const gameDisplay = gamesToDisplay.map((game) => {
      const newTime = new Date(Date.parse(game.commence_time))
      String(newTime)
      return (
         <GameCard key={game.id} game={game} time={newTime} odds={game.sites}/>
      )
   })

   return (
      <>
         <Wrapper1>
            {gameDisplay}
         </Wrapper1>
      </>
   )
}


export default GamesContainer


const Wrapper1 = styled.div`
   display: block;
   margin-top: 50px;
   margin-left: auto;
   margin-right: auto;
   width: 80%;
   padding: 20px;
   overflow-x: auto;
`


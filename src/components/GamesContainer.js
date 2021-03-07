import { useSelector } from 'react-redux'
import GameCard from './GameCard'
import styled from 'styled-components'
// import { Modal } from './modal/GameModal'

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
   border-style: ridge;
   border-color: #103474;  
   margin: auto;
   width: 85%;
   height: 300px;
   margin-top: 50px;
   margin-left: 45px;
   padding: 20px;
   overflow-x: auto;
`


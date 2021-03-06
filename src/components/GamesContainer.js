import { useSelector } from 'react-redux'
import GameCard from './GameCard'
import styled from 'styled-components'
// import { Modal } from './modal/GameModal'
// import { useState } from 'react'

function GamesContainer() {

   const gamesToDisplay = useSelector((state) => state.game.displayedGames)

   const gameDisplay = gamesToDisplay.map((game) => {
      console.log(game.sites, game.id)
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
   display: block;   
`

// Wrapper styling:
   // border
   // border-style: solid;
   // border-color: black;
   // border-radius: 20px;
   // background-color: ivory;
   // height: 550px;
   // overflow: auto;
   // margin: auto;
   // width: 90%;
   // height: 550px;
   // margin-top: 55px;
   // margin-bottom: 30px;
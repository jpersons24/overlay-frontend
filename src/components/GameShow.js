import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import Posts from './Posts'
import styled from 'styled-components'
import SitesCarousel from './SitesCarousel'


function GameShow() {

   // ID of game, gotten from params
   const { id } = useParams()
   const [gameSaved, setGameSaved] = useState(false)
   const apiNhlGames = useSelector((state) => state.game.nhlGames)
   console.log(apiNhlGames)
   const savedGames = useSelector((state) => state.game.savedGames)
   console.log(savedGames)
   
   // set constant equal to function
      // function findGameToDisplay
         // filter through savedGames, filter through apiNhlGames
         // is savedGames or apiNhlGames returns length > 0 
         // then display that game using the displaySingleGame constant


   // filter through all nhl games retreived from API and set to const
   const gameToDisplay = apiNhlGames.filter((game) => {
      return game.id === id 
   })
   console.log(gameToDisplay)

   // map through gameToDisplay (array with length of 1) and return information to render in carousel
   const displaySingleGame = gameToDisplay.map((game) => {
      // filter through teams array to create away_team variable
      const away_team = game.teams.filter(team => team !== game.home_team)
      return (
         <div key={game.id}>
            <HomeTeam>{game.home_team} (h)</HomeTeam>
            <AwayTeam>{away_team[0]} (a)</AwayTeam>
            <br></br>
            <br></br>
            <br></br>
            {game.sites ?
            <SitesCarousel sites={game.sites} game={game} />
            :
            "Loading game odds, just a second!"
            }
            <p 
               style={{
                  marginRight: 'auto',
                  marginLeft: 'auto',
                  display: 'block',
                  width: '35%',
               }}
            >
            </p>
            <Posts game={game} gameSaved={gameSaved} setGameSaved={setGameSaved} />
         </div>
      )
   })
   
   return (
      <Wrapper>
         {displaySingleGame}
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
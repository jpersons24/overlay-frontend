import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
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

   // debugger

   // check each saved game against id pased in from params
   const gameToDisplay = function getGameToDisplay(savedGames, apiNhlGames) {
         const savedGame = savedGames.filter(game => game.id === id)
         console.log(savedGame)
         if (savedGame.length < 1) {
            const apiGame = apiNhlGames.filter(game => game.id === id)
            console.log(apiGame)
            return apiGame
         } else {
            console.log(savedGame)
            setGameSaved(true)
            return savedGame
         }
   }
   console.log(gameSaved)
   
   console.log(gameToDisplay(savedGames, apiNhlGames))
   
   const displaySingleGame = gameToDisplay(savedGames, apiNhlGames).map((game) => {

      const away_team = function getAwayTeam() {
         if (game.away_team) {
            return game.away_team
         } else {
            const filteredTeam = game.teams.filter(team => team !== game.home_team)
            return filteredTeam[0]
         }
      }

      return (
         <div key={game.id}>
            <HomeTeam>{game.home_team} (h)</HomeTeam>
            <AwayTeam>{away_team} (a)</AwayTeam>
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
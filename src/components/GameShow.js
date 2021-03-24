import { useParams } from 'react-router-dom'
// import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Posts from './Posts'
import styled from 'styled-components'
import SitesCarousel from './SitesCarousel'


function GameShow() {

   // ID of game, gotten from params
   const { id } = useParams()
   // const [gameSaved, setGameSaved] = useState(false)
   const apiNhlGames = useSelector((state) => state.game.nhlGames)
   const savedGames = useSelector((state) => state.game.savedGames)
   const allGames = apiNhlGames.concat(savedGames)
   console.log(allGames)

   const gameToDisplay = allGames.filter(game => (game.id === id) && (game.sites.length > 0))
   
   const displaySingleGame = gameToDisplay.map((game) => {

      return (
         <div key={game.id}>
            <HomeTeam>{game.home_team} (h)</HomeTeam>
            <AwayTeam>
               {game.teams ?
                  game.teams.filter(team => team !== game.home_team)
                  :
                  game.away_team
               } (a)
            </AwayTeam>
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
            <Posts game={game} />
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
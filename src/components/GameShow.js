import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
// import { useEffect } from 'react'
import styled from 'styled-components'
import SitesCarousel from './SitesCarousel'
import { singleGame } from '../redux/gameSlice'

function GameShow({ apiNhlGames }) {

   const { id } = useParams()
   // const dispatch = useDispatch()
   const game = useSelector((state) => state.game.singleGame)
   console.log(game)

   let displaySingleGame
   if (game.away_team) {
      console.log("this game is already saved")
      console.log(game)
         return (
            <div key={game.id}>
               <HomeTeam>{game.home_team} (h)</HomeTeam>
               <AwayTeam>{game.away_team} (a)</AwayTeam>
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
            </div>
         )
   } else {
      const gameToDisplay = apiNhlGames.filter((game) => {
         return game.id === id 
      })
      console.log(gameToDisplay)

      displaySingleGame = gameToDisplay.map((game) => {

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
            </div>
         )
      })
   }

   // ***** FILTER THROUGH GAMES TO FIND ONE WITH MATCHING ID *****
   // const gameToDisplay = apiNhlGames.filter((game) => {
   //    return game.id === id 
   // })
   // console.log(gameToDisplay)
   // const action = singleGame(gameToDisplay)
   // console.log(action)

   // useEffect(() => {
   //    dispatch(action)
   // }, [])

   // const displaySingleGame = game.map((game) => {

   //    const away_team = game.teams.filter(team => team !== game.home_team)

   //    return (
   //       <div key={game.id}>
   //          <HomeTeam>{game.home_team} (h)</HomeTeam>
   //          <AwayTeam>{away_team[0]} (a)</AwayTeam>
   //          <br></br>
   //          <br></br>
   //          <br></br>
   //          {game.sites ?
   //          <SitesCarousel sites={game.sites} game={game} />
   //          :
   //          "Loading game odds, just a second!"
   //          }
   //          <p 
   //             style={{
   //                marginRight: 'auto',
   //                marginLeft: 'auto',
   //                display: 'block',
   //                width: '35%',
   //             }}
   //          >
   //          </p>
   //       </div>
   //    )
   // })

   
   // **** FETCH SAVED GAMES FROM DATABASE ****
   // useEffect(() => {
   //    fetch(`http://localhost:4000/games/${id}`)
   //    .then(res => res.json())
   //    .then(data => {
   //       const action = singleGame(data)
   //       dispatch(action)
   //    })
   // }, [dispatch, id])



   return (
      <Wrapper>
         {displaySingleGame}
         {/* <HomeTeam>{game.home_team} (h)</HomeTeam>
         <AwayTeam>{} (a)</AwayTeam>
         <br></br>
         <br></br>
         <br></br>
         {game.sites ?
         <SitesCarousel sites={game.sites} game={game} />
         :
         "Loading game odds, just a second!"
         }
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
         </p> */}
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
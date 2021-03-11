import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import styled from 'styled-components'
import SitesCarousel from './SitesCarousel'
import { singleGame } from '../redux/gameSlice'

function GameShow() {

   const { id } = useParams()
   const dispatch = useDispatch()
   const game = useSelector((state) => state.game.singleGame)
   console.log(game)
   console.log(game.sites)
   
   useEffect(() => {
      fetch(`http://localhost:4000/games/${id}`)
      .then(res => res.json())
      .then(data => {
         console.log(data)
         const action = singleGame(data)
         dispatch(action)
      })
   }, [dispatch, id])

   return (
      <Wrapper>
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
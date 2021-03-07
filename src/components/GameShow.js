import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import { singleGame } from '../redux/gameSlice'

function GameShow() {

   const { id } = useParams();
   const game = useSelector((state) => state.game.displayedSingleGame)

   const dispatch = useDispatch()

   useEffect(() => {
      fetch(`http://localhost:4000/games/${id}`)
      .then(res => res.json())
      .then(data => {
         const action = singleGame(data)
         dispatch(action)
      })
   }, [id, dispatch])

   return (
      <Wrapper>
         <h2>{game.sport_nice}</h2>
         <p>{game.home_team}</p>
         <p>{game.away_team}</p>
      </Wrapper>
   )
}

export default GameShow


//  ********* styled components *********


const Wrapper = styled.div`
   text-align: center;
   margin-top: 50px;
`
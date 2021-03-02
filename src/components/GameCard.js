import styled from 'styled-components'
// import { Link } from 'react-router-dom'
import GameShow from './GameShow'


function GameCard({ game, odds }) {

   console.log(odds)
   const sites = odds.map(site => {
      return (
         <div>
            <h3>{site.site_nice}</h3>
            <h6>Head 2 Head(home, away)</h6>
            <p>{site.odds}</p>
         </div>
      )
   })


   return (
         <Wrapper>
            <h3>{game.sport_nice}</h3>
            <p>{game.home_team} (h)</p>
            <p>{game.away_team} (a)</p>
            <button>See odds</button>
            <p>On click, show modal for that specific game!</p>
            {/* {sites} */}
            <PostForm>
               <form>
                  <label>What's up? </label>
                  <input type="text" name="post"/>
                  <br></br>
                  <br></br>
                  <input type="submit" value="Post" />
               </form>
            </PostForm>
         </Wrapper>
   )
};


export default GameCard;


const Wrapper = styled.div`
   display: inline-block; 
   color: black;
   background-color: yellow;  
   margin-right: 40px;
   width: 400px;
   height: 175px;
   margin-bottom: 75px;
   border-style: double;
   border-color: black;
   border-radius: 10px;
   padding: 5px;
   overflow: auto;
`

const PostForm = styled.div`
   border-style: solid;
   border-color: black;
   margin: 3px;
   padding: 5px;
`
import { useSelector } from 'react-redux'
import GameCard from './GameCard'
import styled from 'styled-components'

function GamesContainer() {

   const gamesToDisplay = useSelector((state) => state.game.displayedGames)

   const gameDisplay = gamesToDisplay.map((game) => {
      const newTime = new Date(Date.parse(game.commence_time))
      String(newTime)
      // console.log(newTime)
      return (
         <GameCard key={game.id} game={game} time={newTime} odds={game.sites}/>
      )
   })

   return (
      <>
         <Wrapper1>
            {gameDisplay}
         </Wrapper1>
         {/* <div>
                  <button onClick={handleOddsClick}>See odds</button>
                  <PostForm>
                     <div>
                        <PostContainerWrapper>
                           {postsToDisplay}
                           <form onSubmit={handleFormSubmit}>
                              <label htmlFor="post">What's up? </label>
                              <input type="text" name="post" value={postInput} onChange={getFormInput} />
                              <br></br>
                              <br></br>
                              <input type="submit" value="Post"/>
                           </form>
                        </PostContainerWrapper>
                        {show ? <Modal close={close} sites={sites} /> : null}
                     
                     </div>
                  </PostForm>
               </div> */}
      </>
   )
}


export default GamesContainer


const Wrapper1 = styled.div`
   border-style: ridge;
   border-color: #103474;
   display: flex; 
   flex-wrap: wrap;  
   margin-right: auto;
   width: 40%;
   margin-top: 50px;
   margin-left: 45px;
   padding: 20px;
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
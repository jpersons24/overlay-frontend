import { useSelector } from 'react-redux'

function GamesContainer() {

   const gamesToDisplay = useSelector((state) => state.game.displayedGames)
   console.log(gamesToDisplay)
   // gamestoDisplay --> should be mapped through to create each GameCard
      // GameCard will be complete with League, Team, Commence_date and 
      // <button> or <Link> to get to Game Show page -->
         //  --> Game Show page will show all details about the game
         // including odds, which can be contained in smaller container with scroll feature
      // leave a post feature -->
         // --> will save game to database, will save Post instance to database

   return(
      <div>
         <h3>This is the games container</h3>
      </div>
   )
}

export default GamesContainer
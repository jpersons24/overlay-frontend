import Carousel from 'react-bootstrap/Carousel'


function NhlCarousel({ nhlGames }) {

   // console.log(nhlGames)
   const displayNhlGames = nhlGames.map((game) => {

      const awayTeam = game.teams.filter(team => team !== game.home_team)
      const newDate = new Date (Date.parse(game.commence_time))
      const displayDate = String(newDate)

      return (
         <Carousel.Item key={game.home_team} style={{textAlign: 'center',}}>
            <h3>{game.sport_nice}</h3>
            <h5
               style={{
                  display: 'block',
                  marginRight: 'auto',
                  marginLeft: 'auto',
                  width: '70%',
               }}
            >{game.home_team} <em>(h)</em> VS {awayTeam} <em>(a)</em>
            </h5>
            <p>{displayDate}</p>
         </Carousel.Item>
      )
   })

   return (
      <>
         <div>
            <em>Click the 'Events' tab in the Navigation bar to see betting odds and chat with other degenerates!</em>
         </div>
         <br></br>
         <br></br>
         <Carousel
            style={{
               height: '400px',
               marginRight: 'auto',
               marginLeft: 'auto',
               width: '60%',
               contentAlign: 'center',
               padding: '30px',
            }}
         >
            {displayNhlGames}
         </Carousel>
      </>
   )
}


export default NhlCarousel
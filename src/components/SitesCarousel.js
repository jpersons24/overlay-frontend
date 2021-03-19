import Carousel from 'react-bootstrap/Carousel'
import styled from 'styled-components'
import Posts from './Posts'


function SitesCarousel({ sites, game }) {

   

   const displaySites = sites.map((site) => {
      // debugger
      const odds = site.odds.totals.odds
      const homeOdd = odds[0]
      const awayOdd = odds[1]

      const convertedUpdateDate = new Date (Date.parse(site.last_update))
      const convertedGameDate = new Date (Date.parse(game.commence_time))

      return (
         <Carousel.Item style={{textAlign: 'center'}} key={site.site_nice}>
            <h4>{site.site_nice}</h4>
            <ul
               style={{
                  display: 'block',
                  marginRight: 'auto',
                  marginLeft: 'auto',
                  width: '70%',
                  marginTop: '50px',
                  listStyle: 'none',
                  paddingLeft: '0px',
                  paddingBottom: '50px'
               }}
            >
               <li><strong>Head 2 Head Odds:</strong></li> 
               <li>{homeOdd}(h) , {awayOdd}(a)</li>
               {odds.length === 3 ? <li>{odds[2]}(moneyline)</li> : null}
            </ul>
            <p><strong>Last Update:</strong> {String(convertedUpdateDate)}</p>
            <p><strong>Event Time:</strong> {String(convertedGameDate)}</p>
         </Carousel.Item>
      )
   })


   return (
      <>
         <Carousel
            style={{
               height: '400px',
               marginRight: 'auto',
               marginLeft: 'auto',
               width: '80%',
               contentAlign: 'center',
               padding: '30px',
            }}
         >
         {sites.length === 0 &&
         <PTag>There are no odds for this game unfortunately. <br></br> Fortunately though, you can put the money you probably would have lost and stuff it in your mattress!</PTag>
         }
         {displaySites}
         </Carousel>
         <Posts />
      </>
   )
}

export default SitesCarousel


const PTag = styled.p`
   margin-right: auto,
   margin-left: auto,
   width: 30%,
   display: block;
   text-align: center;
   color: red;
   font-size: 20px;
   margin-top: 100px;
`


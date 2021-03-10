import Carousel from 'react-bootstrap/Carousel'
import styled from 'styled-components'
import GameCard from './GameCard'


function SitesCarousel({ sites, gameObj }) {

   console.log(sites)
   // debugger

   const displaySites = sites.map((site) => {

      console.log(site)
      const odds = site.odds.totals.odds
      const points = site.odds.totals.points
      const position = site.odds.totals.position

      return (
         <Carousel.Item style={{textAlign: 'center'}}>
            <h4
               style={{
                  display: 'block',
                  marginRight: 'auto',
                  marginLeft: 'auto',
                  width: '70%',
               }} 
            >
               {site.site_nice}
            </h4>
            <ul
               style={{
                  display: 'block',
                  marginRight: 'auto',
                  marginLeft: 'auto',
                  width: '70%',
                  marginTop: '50px',
                  listStyle: 'none'
               }}
            >
               <li>{odds[0]}_____{odds[1]}</li>
               <li>{points[0]} ~~~~~~ {points[1]}</li>
               <li>{position[0]}, {position[1]}</li>
            </ul>
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
         {sites.length === 0 ?
         <PTag>There are no odds for this game unfortunately. <br></br> Fortunately though, you can put the money you probably would have lost and stuff it in your mattress!</PTag>
         :
         {displaySites} 
         }
         </Carousel>
         <GameCard gameObj={gameObj} />
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


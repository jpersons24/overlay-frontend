import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const linkStyles = {
   width: "100px",
   padding: "12px",
   margin: "0 6px 6px",
   background: "#033474",
   textDecoration: "none",
   color: "white",
   borderStyle: "outset",
   borderColor: "#9C824A",
}

function NavBar() {
   return(
      <Wrapper>
         <NavLink
            to="/home"
            exact
            style={linkStyles}
            activeStyle={{
               background: "#9C824A",
               borderStyle: "inset"
            }}
         >
            Home
         </NavLink>
         <NavLink
            to="/news"
            exact
            style={linkStyles}
            activeStyle={{
               background: "#9C824A",
               borderStyle: "inset"
            }}
         >
            News
         </NavLink>
         <NavLink
            to="/fav_stories"
            exact
            style={linkStyles}
            activeStyle={{
               background: "#9C824A",
               borderStyle: "inset"
            }}
         >
            Favorite Stories
         </NavLink>
         <NavLink
            to="/games"
            exact
            style={linkStyles}
            activeStyle={{
               background: "#9C824A",
               borderStyle: "inset"
            }}
         >
            Games
         </NavLink>
      </Wrapper>
   )
}

export default NavBar



const Wrapper = styled.div`
   text-align: center;
`

import { NavLink } from 'react-router-dom'

const linkStyles = {
   width: "100px",
   padding: "12px",
   margin: "0 6px 6px",
   background: "red",
   textDecoration: "none",
   color: "white",
}

function NavBar() {
   return(
      <div>
         <NavLink
            to="/home"
            exact
            style={linkStyles}
            activeStyle={{
               background: "black"
            }}
         >
            Home
         </NavLink>
         <NavLink
            to="/news"
            exact
            style={linkStyles}
            activeStyle={{
               background: "black"
            }}
         >
            News
         </NavLink>
         <NavLink
            to="/fav_stories"
            exact
            style={linkStyles}
            activeStyle={{
               background: "black"
            }}
         >
            Favorite Stories
         </NavLink>
      </div>
   )
}

export default NavBar
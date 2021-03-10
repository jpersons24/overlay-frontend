import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentUser } from '../redux/userSlice'
import { Link } from 'react-router-dom'


function NavBar() {

   const currentUser = useSelector((state) => state.user.currentUser)
   const dispatch = useDispatch()

   // handle user logout
   function handleLogout(event) {
      const action = setCurrentUser(null)
      dispatch(action)
      console.log("User logged out!")
   }

   // handle user login
   function handleLogin(event) {
      fetch("http://localhost:4000/me")
      .then(res => res.json())
      .then(data => {
         const action = setCurrentUser(data)
         dispatch(action)
         console.log("Logging in user!")
      })
   }

   return(
      <>
         <Navbar bg="dark" variant="dark" sticky="top">
            <Navbar.Brand as={Link} to="/home">Overlay</Navbar.Brand>
            <Nav fill className="mr-auto">
               <Nav.Link as={Link} to="/home" className="mr-sm-3">Home</Nav.Link>
               <Nav.Link as={Link} to="/games" className="mr-sm-3">Events</Nav.Link>
               <Nav.Link as={Link} to="/news" className="mr-sm-3">News</Nav.Link>
               <Nav.Link as={Link} to="/fav_stories" className="mr-sm-3">Favorites List</Nav.Link>
               <Navbar.Collapse className="justify-content-end">
                  <Navbar.Text>
                     {currentUser ? <span className="mr-sm-5">Hello, <strong>{currentUser.username}</strong></span> : null}
                  </Navbar.Text>
               </Navbar.Collapse>
               {currentUser ? 
               <Button onClick={handleLogout} className="mr-sm-2" variant="outline-primary">Logout</Button>
               :
               <Button onClick={handleLogin} className="mr-sm-2" variant="outline-primary">Login</Button>
               }
            </Nav>
         </Navbar>
      </>
   )
}

export default NavBar

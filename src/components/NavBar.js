import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentUser } from '../redux/userSlice'
// import styled from 'styled-components'



function NavBar() {

   const currentUser = useSelector((state) => state.user.currentUser)
   console.log(currentUser)
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
         <Navbar bg="dark" variant="dark" sticky="top" expand="xl">
            <Navbar.Brand href="/home">The Degenerate</Navbar.Brand>
            <Nav>
               <Nav.Link href="/home">Home</Nav.Link>
               <Nav.Link href="/games">Events</Nav.Link>
               <Nav.Link href="/news">News</Nav.Link>
               <Nav.Link href="/fav_stories">Favorites List</Nav.Link>
               <Navbar.Collapse className="justify-content-end">
                  <Navbar.Text>
                     Signed in as: {currentUser ? <span><strong>{currentUser.username}</strong></span> : null}
                  </Navbar.Text>
               </Navbar.Collapse>
               <Button onClick={handleLogin} variant="outline-primary" className="justify-content-end">Login</Button>
               <Button onClick={handleLogout} variant="outline-primary" className="justify-content-end">Logout</Button>
            </Nav>
         {/*<Form inline>
               <FormControl type="text" placeholder="Search" className="mr-sm-2" />
               <Button variant="outline-info">Search</Button>
            </Form> */}
         </Navbar>
      </>
   )
}

export default NavBar

// ******* styled components *******

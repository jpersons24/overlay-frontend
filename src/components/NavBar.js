// import { NavLink } from 'react-router-dom'
// import styled from 'styled-components'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
// import NavDropdown from 'react-bootstrap/NavDropdown'
import { useSelector } from 'react-redux'

// const linkStyles = {
//    width: "100px",
//    padding: "12px",
//    margin: "0 6px 6px",
//    background: "#474747",
//    textDecoration: "none",
//    color: "white",
//    borderStyle: "outset",
//    borderColor: "#9C824A",
// }

function NavBar() {

   const currentUser = useSelector((state) => state.user.currentUser)

   return(
      <>
         {/* <Nav className="justify-content-center" activeKey="/home">
            <Nav.Item>
               <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
               <Nav.Link eventKey="link-1" href="/games">Games</Nav.Link>
            </Nav.Item>
            <Nav.Item>
               <Nav.Link eventKey="link-2" href="/news">News</Nav.Link>
            </Nav.Item>
            <Nav.Item>
               <Nav.Link eventKey="link-3" href="/fav_stories">Favorites List</Nav.Link>
            </Nav.Item>
         </Nav>    */}
         <Navbar bg="dark" variant="dark" sticky="top">
            <Navbar.Brand href="/home">The Degenerate</Navbar.Brand>
            <Nav className="mr-auto">
               <Nav.Link href="/home">Home</Nav.Link>
               <Nav.Link href="/games">Events</Nav.Link>
               <Nav.Link href="/news">News</Nav.Link>
               <Nav.Link href="/fav_stories">Favorites List</Nav.Link>
               <Navbar.Collapse className="justify-content-end">
                  <Navbar.Text>Signed in as: {currentUser ? <p>{currentUser.username}</p> : null}</Navbar.Text>
               </Navbar.Collapse>
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

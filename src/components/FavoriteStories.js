import { useEffect } from "react"
import { displayFavorites } from '../redux/favoritesSlice'
import { useDispatch, useSelector } from 'react-redux'
import FavoriteCard from './FavoriteCard'
import styled from 'styled-components'

function FavoriteStories() {

   const favsToDisplay = useSelector((state) => state.favorite.displayedFavorites)
   const currentUser = useSelector((state) => state.user.currentUser)

   const dispatch = useDispatch()

   useEffect(() => {
      fetch("http://localhost:4000/favorites_lists")
      .then(res => res.json())
      .then(data => {
         const action = displayFavorites(data)
         dispatch(action)
      })
   }, [dispatch])

   const display = favsToDisplay.map((fav) => {
      if (currentUser && currentUser.id === fav.user.id) {
         return (
            <FavoriteCard key={fav.id} fav={fav} />
         )
      } else {
         return (
            null
         )
      }
      })

   return (
      <Wrapper>
         {currentUser ? 
         <Header>These are your favorited stories, {currentUser.username}</Header>
         :
         <Header>Your favorited stories will be listed here!</Header>
         }
         {display}
      </Wrapper>
   )
}

export default FavoriteStories



// ****** styled components *******


const Wrapper = styled.div`
   padding-top: 50px;
   padding-bottom: 50px;
   background: black;
   color: white;
`

const Header = styled.h2`
   text-align: center
`
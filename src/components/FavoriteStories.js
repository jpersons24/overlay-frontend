import { useEffect } from "react"
import { displayFavorites } from '../redux/favoritesSlice'
import { useDispatch, useSelector } from 'react-redux'
import FavoriteCard from './FavoriteCard'

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
      <div>
         {currentUser ? 
         <h2>These are your favorited stories, {currentUser.username}</h2>
         :
         <h2>Your favorited stories will be listed here!</h2>
         }
         {display}
      </div>
   )
}

export default FavoriteStories
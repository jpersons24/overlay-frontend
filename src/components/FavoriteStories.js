import { useEffect } from "react"
import { displayFavorites } from '../redux/favoritesSlice'
import { useDispatch, useSelector } from 'react-redux'
import FavoriteCard from './FavoriteCard'

function FavoriteStories() {

   const favsToDisplay = useSelector((state) => state.favorite.displayedFavorites)

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
      // console.log(fav)
      return (
         <FavoriteCard key={fav.id} fav={fav} />
      )
   })

   return (
      <div>
         <h2>This is the favorites page</h2>
         {display}
      </div>
   )
}

export default FavoriteStories
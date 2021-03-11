import styled from 'styled-components'
// import { useSelector } from 'react-redux'

function FavoriteCard({ fav, updateFavStories }) {

   function handleRemoveClick(event) {
      console.log(fav.id)
      const id = fav.id
      updateFavStories(fav)
      removeFavoriteStory(id)
   }

   // delete favorite story from database
   function removeFavoriteStory(id) {
      fetch(`http://localhost:4000/favorites_lists/${id}`, {
         method: 'DELETE'
      })
   }
   
   // const favesToDisplay = useSelector((state) => state.favorite.displayedFavorites)
   // console.log(favesToDisplay)

   return (
      <Wrapper>
         <StoryTitle>{fav.story.title}</StoryTitle>
         <StoryDescription>{fav.story.description}</StoryDescription>
         <StoryImage src={fav.story.urlToImage} alt={fav.story.description} />
         <br></br>
         <p>{fav.story.content}<a href={fav.url}>Full Story</a></p>
         <FavoritesButton onClick={handleRemoveClick}>Remove</FavoritesButton>
      </Wrapper>
   )
}

export default FavoriteCard

const Wrapper = styled.div`
   background-color: #fff;
   color: #5c5c5c;
   border-radius: 15px;
   margin: auto;
   width: 75%;
   padding: 15px;
   margin-bottom: 15px;
   margin-top: 15px;
`

const StoryImage = styled.img`
   margin-right: auto;
   margin-left: auto;
   width: 70%;
   height: 400px;
   display: block;
`

const StoryTitle = styled.h2`
   text-align: center;
`

const StoryDescription = styled.p`
   font-size: 12px;
   text-align: center;
`

const FavoritesButton = styled.button`
   margin-right: auto;
   margin-left: auto;
   display: block;
   color: white;
   background-color: #307BFF;
   padding: 3px;
   border-radius: 5px;
   &:hover {
      transform: scale(1.1);
      transition: 0.5s;
   }
`
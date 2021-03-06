import styled from 'styled-components'
import { useSelector } from 'react-redux'

function StoryCard ({ story }) {

   // get current user
   const currentUser = useSelector((state) => state.user.currentUser)

   // handle favorite click
   function handleClick(event) {
      const favItem = {
         story_id: story.id,
         user_id: currentUser.id
      }
      // pass faveItem into helper function to post to database
      addToFavoritesList(favItem)
   }

   function addToFavoritesList(favItem) {
      console.log(favItem)
      fetch("http://localhost:4000/favorites_lists", {
         method: 'POST',
         headers: {'Content-Type': 'application/json'},
         body: JSON.stringify(favItem)
      })
      .then(res => res.json())
      .then(data => {
         console.log(data)
      })
   }

   return (
      <Wrapper>
         <h1>{story.title}</h1>
         <StoryImage src={story.url_to_image} alt={story.description} />
         <p>{story.content}</p>
         <h4>{story.description}</h4>
         {/* { story.author !== null } */}
         <p><strong>Author:</strong> {story.author}</p>
         <p><strong>Source:</strong> {story.source}</p>
         <a href={story.url}>Full story here!</a>
         <br></br>
         <br></br>
         <button onClick={handleClick}>Add to Favorites</button>
      </Wrapper>
   )
};

export default StoryCard

// ****** styled components ******

const Wrapper = styled.div`
   background: #9C824A;
   color: white;
   border-style: solid;
   border-color: black;
   border-radius: 10px;
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
   display: block;
`
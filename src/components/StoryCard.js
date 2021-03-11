import styled from 'styled-components'
import { useSelector } from 'react-redux'
import Alert from 'react-bootstrap/Alert'
import { useState } from 'react'

function StoryCard ({ story }) {

   const currentUser = useSelector((state) => state.user.currentUser)
   const [show, setShow] = useState(false)

   function handleFavoriteClick(event) {
      console.log(event.target)

      const newStory = {
         source: story.source.id,
         author: story.author,
         title: story.title,
         description: story.description,
         url: story.url,
         urlToImage: story.urlToImage,
         publishedAt: story.publishedAt,
         content: story.content
      }

      console.log(newStory)
      fetch("http://localhost:4000/stories", {
         method: 'POST',
         headers: {'Content-Type': 'application/json'},
         body: JSON.stringify(newStory)
      })
      .then(res => res.json())
      .then(data => {
         createFavoriteStory(data.id)
         console.log("saved story to database!")
      })
   }

   
   function createFavoriteStory(storyId) {
      const favItem = {
         story_id: storyId,
         user_id: currentUser.id
      }
      addToFavoritesList(favItem)
   }

   function addToFavoritesList(favItem) {
      console.log(favItem)
      fetch("http://localhost:4000/favorites_lists", {
         method: 'POST',
         headers: {'Content-Type': 'application/json'},
         body: JSON.stringify(favItem)
      })
      setShow(true)
   }

   return (
      <Wrapper>
         <StoryTitle>{story.title}</StoryTitle>
         <StoryDescription>{story.description}</StoryDescription>
         {story.urlToImage !== null ?
         <StoryImage src={story.urlToImage} alt="Article Picture" />
         :
         null
         }
         <br></br>
         <p>{story.content}<StoryLink href={story.url}>Full Story</StoryLink></p>
         <StoryList>
            <li><strong>Author:</strong> {story.author}</li>
            <li><strong>Source:</strong> {story.source.name}</li>
         </StoryList>
         <FavoritesButton onClick={handleFavoriteClick}>Add to Favorites</FavoritesButton>
         {!show ?
         null
         :
         <Alert 
            variant='success' 
            dismissible 
            onClose={() => setShow(false)}
            style={{
               margin: '15px auto',
               // marginBottom: '15px',
               display: 'block',
               textAlign: 'center',
               width: '50%',
            }}
         >
            This story has been added to your favorites list. Enjoy!!!
         </Alert>
         }
      </Wrapper>
   )
};

export default StoryCard

// ****** styled components ******

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

const StoryLink = styled.a`
   color: #307BFF;
`

const StoryDescription = styled.p`
   font-size: 12px;
   text-align: center;
`

const StoryList = styled.ul`
   list-style: none;
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
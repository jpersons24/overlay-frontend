import styled from 'styled-components'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addNewPost } from '../redux/postSlice'
import PostsDisplay from './PostsDisplay'
import { singleGame } from '../redux/gameSlice'


function Posts({ gameObj }) {

   const [postInput, setPostInput] = useState("")

   const dispatch = useDispatch()

   const currentUser = useSelector((state) => state.user.currentUser)
   // const games = useSelector((state) => state.game.displayedGames)
   const game = useSelector((state) => state.game.singleGame)

   function getFormInput(event){
      setPostInput(event.target.value)
   }

   function handleFormSubmit(event) {
      event.preventDefault()
      if(currentUser !== null) {
            const newGame = {
               sport_key: gameObj.game.sport_key,
               sport_nice: gameObj.game.sport_nice,
               away_team: gameObj.away_team,
               home_team: gameObj.game.home_team,
               commence_time: gameObj.game.commence_time,
            }
            
            fetch("http://localhost:4000/games", {
               method: "POST",
               headers: { "Content-Type": "application/json" },
               body: JSON.stringify(newGame)
            })
            .then(res => res.json())
            .then((data) => {
               console.log("Success:", data)
               const action = singleGame(data)
               dispatch(action)
               const newPost = {
                  user_id: currentUser.id,
                  game_id: data.id,
                  content: postInput,
                  likes: 0
               }
               createNewPost(newPost)
            })
            setPostInput("")
      } else {
         alert("You must be signed in to leave a post! No anonymous posting here!")
      }
   }

   function createNewPost(newPost) {
      console.log(newPost)
      fetch("http://localhost:4000/posts", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(newPost)
      })
      .then(res => res.json())
      .then(data => {
         const action = addNewPost(data)
         dispatch(action)
         console.log('Success:', data)
      })
   }



   return (
      <>
         <PreviewWrapper>
               <PostForm onSubmit={handleFormSubmit}>
                  <PostTextField name="post" value={postInput} onChange={getFormInput} placeholder="Share betting wisdom here..." wrap="hard"/>
                  <br></br>
                  <br></br>
                  <SubmitButton type="submit" value="Post"/>
               </PostForm>
               <PostsDisplay game={game}/>
         </PreviewWrapper>
      </>
   )
};


export default Posts;

// ******* styled components ********

const PostForm = styled.form`
   margin: 5px;
`

const PostTextField = styled.textarea`
   width: 60%;
   height: 100px;
`

const PreviewWrapper = styled.div` 
   margin: auto;
   margin-top: 25px;
   margin-bottom: 50px;
   width: 80%;
   height: 450px;
   background-color: black;
   padding: 20px;
   text-align: center;
   overflow: auto;
`

const SubmitButton = styled.input`
   margin-right: auto;
   margin-left: auto;
   display: block;
   color: white;
   background-color: #307BFF;
   padding: 3px 7px;
   border-radius: 5px;
   &:hover {
      transform: scale(1.1);
      transition: 0.5s;
   }
`
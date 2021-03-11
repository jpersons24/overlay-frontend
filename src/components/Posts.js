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
   const game = useSelector((state) => state.game.singleGame)
   console.log(game)

   function getFormInput(event){
      setPostInput(event.target.value)
   }

   function handleFormSubmit(event) {
      event.preventDefault()
      if(currentUser !== null) {
            
            const newPost = {
               user_id: currentUser.id,
               game_id: game.id,
               content: postInput,
               likes: 0
            }

            console.log(newPost)
            createNewPost(newPost)
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
            <PostHeader>What's the good word?</PostHeader>
               <PostsDisplay game={game}/>
               <PostForm onSubmit={handleFormSubmit}>
                  <PostTextField name="post" value={postInput} onChange={getFormInput} placeholder="Share betting wisdom here..." wrap="hard"/>
                  <br></br>
                  <br></br>
                  <SubmitButton type="submit" value="Post"/>
               </PostForm>
         </PreviewWrapper>
      </>
   )
};


export default Posts;

// ******* styled components ********

const PostForm = styled.form`
   margin: 5px;
   margin-right: auto;
   margin-left: auto;
   margin-top: 30px;
   display: block;
   width: 75%;
`

const PostHeader = styled.h3`
   margin-bottom: 20px;
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
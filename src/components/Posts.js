import styled from 'styled-components'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addNewPost } from '../redux/postSlice'
import PostsDisplay from './PostsDisplay'
import Alert from 'react-bootstrap/Alert'
// import { singleGame } from '../redux/gameSlice'


function Posts() {

   const [postInput, setPostInput] = useState("")
   const [show, setShow] = useState(false)

   const dispatch = useDispatch()

   const currentUser = useSelector((state) => state.user.currentUser)
   const game = useSelector((state) => state.game.singleGame)

   function getFormInput(event){
      setPostInput(event.target.value)
   }

   // Another function to create game instance called from handleFormSubmit
      // where is the best place for that function?

   function handleFormSubmit(event) {
      event.preventDefault()
      if (currentUser !== null) {

         // call function here that creates new Game instance in database
            
         // MOVE CREATION ON NEWPOST OBJECT AND 'createNewPost' call outside of this function and into another which is called here
            const newPost = {
               user_id: currentUser.id,
               game_id: game.id,
               content: postInput,
               likes: 0
            }

            createNewPost(newPost)
            setPostInput("")
      } else {
         setShow(true)
      }
   }

   function createNewPost(newPost) {
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
            <PostHeader>What's on your mind?</PostHeader>
            {!show ?
            null
            :
            <Alert 
               variant='warning' 
               dismissible 
               onClose={() => setShow(false)}
               style={{
                  margin: '15px auto',
                  display: 'block',
                  textAlign: 'center',
                  width: '50%',
               }}
            >
               You have to be logged in to leave a post!
            </Alert>
            }
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
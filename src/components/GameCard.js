import styled from 'styled-components'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addNewPost } from '../redux/postSlice'
import { Modal } from './modal/GameModal'


function GameCard({ game, odds }) {

   const [postInput, setPostInput] = useState("")
   const [show, setShow] = useState(false)

   const dispatch = useDispatch()

   const currentUser = useSelector((state) => state.user.currentUser)
   const posts = useSelector((state) => state.post.displayedPosts)

   const filteredPosts = posts.filter((post) => {
      if (post.game.id === game.id) {
         return post
      } else {
         return null
      }
   })

   const postsToDisplay = filteredPosts.map((post) => {
      return (
         <PostWrapper key={post.id}>
            <strong>{post.user.username}</strong>
            <br></br>
            <br></br>
            <PostBody>{post.content}</PostBody>
         </PostWrapper>
      )
   })

   function getFormInput(event){
      setPostInput(event.target.value)
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

   function handleFormSubmit(event) {
      event.preventDefault()
      if(currentUser !== null) {
         const newPost = {
            user_id: currentUser.id,
            game_id: game.id,
            content: event.target.post.value,
            likes: 0
         }

         createNewPost(newPost)
         setPostInput("")
      } else {
         alert("You must be signed in to leave a post! No anonymous posting here!")
      }
   }

   function handleOddsClick(event) {
      setShow(true)
   }

   function close() {
      setShow(false)
   }


   return (
      <>
         <PreviewWrapper>
            <GameInfo>
               <h3>{game.sport_nice}</h3>
               <p>{game.home_team} (h)</p>  
               <p>VS</p>  
               <p>{game.away_team} (a)</p>  
            <SeeOddsButton onClick={handleOddsClick}>See odds</SeeOddsButton>
            {show ? 
               <Modal close={close} odds={odds}/> 
               : 
               null
            }
            </GameInfo> 
            <PostContainerWrapper>
               <h3>Degenerate Revelations</h3>
               {postsToDisplay}
               <PostForm onSubmit={handleFormSubmit}>
                  {/* <label htmlFor="post" style={{color: "white"}}>What's up? </label> */}
                  <PostTextField name="post" value={postInput} onChange={getFormInput} placeholder="Say what you have to say..." wrap="hard"/>
                  <br></br>
                  <br></br>
                  <input type="submit" value="Post"/>
               </PostForm>
            </PostContainerWrapper>
         </PreviewWrapper>
      </>
   )
};


export default GameCard;

const PostForm = styled.form`
   margin: 5px;
`

const PostTextField = styled.textarea`
   width: 75%;
   height: 100px;
`

const PostBody = styled.p`
   margin-top: 0px;
   margin-bottom: 3px;
`

const PreviewWrapper = styled.div` 
   margin: auto;
   margin-top: 25px;
   margin-bottom: 50px;
   width: 80%;
   height: 450px;
   border-style: ridge;
   border-color: #9C824A;
   background-color: #474747;
   padding: 20px;
   text-align: center;
   overflow: auto;
   box-shadow: 5px 5px 5px #9C824A;
`

const GameInfo = styled.div`
   display: block;
   float: left;
   margin-right: auto;
   width: 50%;
   color: white;
`

const PostContainerWrapper = styled.div`
   border-style: outset;
   border-color: black;
   background-color: #9C824A;
   margin-bottom: 5px;
   margin-right: auto;
   width: 45%;
   height: 800px;
   display: inline-block;
   float: right;
   overflow: auto;
`

const PostWrapper = styled.div`
   color: white;
   border-style: outset;
   border-color: black;
   border-width: 2px;
   border-radius: 5px;
   background-color: #474747;
   margin: 1.5px 5px;
   padding: 10px;
   text-align: left;
`

const SeeOddsButton = styled.button`
   margin-right: auto;
   margin-left: auto;
   width: 20%;
   margin-bottom: 13px;
`

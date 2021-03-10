import styled from 'styled-components'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addNewPost } from '../redux/postSlice'


function Posts({ gameObj }) {

   const [postInput, setPostInput] = useState("")
   const [gameID, setGameID] = useState("")

   const dispatch = useDispatch()

   const currentUser = useSelector((state) => state.user.currentUser)
   const posts = useSelector((state) => state.post.displayedPosts)
   // console.log(posts)

   // const filteredPosts = posts.filter((post) => {
   //    if (post.game.id === gameObj.id) {
   //       return post
   //    } else {
   //       return null
   //    }
   // })

   // const postsToDisplay = filteredPosts.map((post) => {
   //    return (
   //       <PostWrapper key={post.id}>
   //          <strong>{post.user.username}</strong>
   //          <br></br>
   //          <br></br>
   //          <PostBody>{post.content}</PostBody>
   //       </PostWrapper>
   //    )
   // })

   function getFormInput(event){
      setPostInput(event.target.value)
      console.log(event.target.value)
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

   // function createNewGame(newGame) {
   //    fetch("http://localhost:4000/games", {
   //       method: "POST",
   //       headers: { "Content-Type": "application/json" },
   //       body: JSON.stringify(newGame)
   //    })
   //    .then(res => res.json())
   //    .then(data => {
   //       console.log(data)
   //    })
   // }

   function handleFormSubmit(event) {
      event.preventDefault()
      console.log(gameObj)
      if(currentUser !== null) {
            const newGame = {
               sport_key: gameObj.game.sport_key,
               sport_nice: gameObj.game.sport_nice,
               away_team: gameObj.away_team,
               home_team: gameObj.game.home_team,
               commence_time: gameObj.game.commence_time,
               // sites: JSON.stringify(gameObj.game.sites),
            }
            // console.log(newGame.sites)
            console.log(event.target.post.value)
            // createNewGame(newGame)
            fetch("http://localhost:4000/games", {
               method: "POST",
               headers: { "Content-Type": "application/json" },
               body: JSON.stringify(newGame)
            })
            .then(res => res.json())
            .then(data => {
               console.log("Success:", data)
               setGameID(data.id)
            })

            const newPost = {
               user_id: currentUser.id,
               game_id: gameID,
               content: event.target.post.value,
               likes: 0
            }
            createNewPost(newPost)
            setPostInput("")
         } else {
            alert("You must be signed in to leave a post! No anonymous posting here!")
         }
   }

   return (
      <>
         <PreviewWrapper>
               <h5>Check, Bet or Fold...what are you thinking?</h5>
               <PostForm onSubmit={handleFormSubmit}>
                  <PostTextField name="post" value={postInput} onChange={getFormInput} placeholder="Share what's on your mind with other sharks..." wrap="hard"/>
                  <br></br>
                  <br></br>
                  <input type="submit" value="Post"/>
               </PostForm>
               {/* {postsToDisplay} */}
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

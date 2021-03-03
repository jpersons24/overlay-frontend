import styled from 'styled-components'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addNewPost } from '../redux/postSlice'
// import GameShow from './GameShow'


function GameCard({ game, odds }) {

   const [postInput, setPostInput] = useState("")

   const dispatch = useDispatch()

   // useSelector to get currentUser id
   const currentUser = useSelector((state) => state.user.currentUser)
   const posts = useSelector((state) => state.post.displayedPosts)
   console.log(posts)

   // console.log(odds)
   const sites = odds.map(site => {
      return (
         <div>
            <h3>{site.site_nice}</h3>
            <h6>Head 2 Head(home, away)</h6>
            <p>{site.odds}</p>
         </div>
      )
   });

   // filter through original posts array to get posts with correct user_id and game_id
   // posts to display on GameCard --> [{post}, {post}, {post}]
   // map through postsToDisplay to render content and username for each
   const filteredPosts = posts.filter((post) => {
      if (post.user.id === currentUser.id && post.game.id == game.id) {
         return post
      } else {
         return null
      }
   })

   console.log(filteredPosts)

   const postsToDisplay = filteredPosts.map((post) => {
      // console.log(post)
      console.log(post.content)
      console.log(post.user.username)
      return (
         <PostWrapper>{post.content} ({post.user.username})</PostWrapper>
      )
   })

   function getFormInput(event){
      console.log(event.target.value)
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
         console.log(action)
         dispatch(action)
         console.log('Success:', data)
      })
   }

   function handleFormSubmit(event) {
      event.preventDefault()
      const newPost = {
         user_id: currentUser.id,
         game_id: game.id,
         content: event.target.post.value,
         likes: 0
      }

      createNewPost(newPost)
      setPostInput("")
   }


   // get all posts (in App), access them in here with useSelector -> filter through by matching gameID (leave user name with post)
         // --> cannot fill posts state with post objects array retrieved from database


   return (
         <Wrapper>
            <h3>{game.sport_nice}</h3>
            <p>{game.home_team} (h)</p>
            <p>{game.away_team} (a)</p>
            <PostForm>
               <button>See odds</button>
               <p>On click, show modal for that specific game!</p>
               {/* {sites} */}
               <div>
                  <p>No word yet, but be the one to speak up!</p>
                  <PostContainerWrapper>
                     {postsToDisplay}
                  </PostContainerWrapper>
               </div>
               
               <form onSubmit={handleFormSubmit}>
                  <label htmlFor="post">What's up? </label>
                  <input type="text" name="post" value={postInput} onChange={getFormInput} />
                  <br></br>
                  <br></br>
                  <input type="submit" value="Post"/>
               </form>
            </PostForm>
         </Wrapper>
   )
};


export default GameCard;


const Wrapper = styled.div`
   display: inline-block; 
   color: black;
   background-color: yellow; 
   width: 400px;
   height: 175px;
   margin-bottom: 75px;
   border-style: double;
   border-color: black;
   border-radius: 10px;
   padding: 5px;
   overflow: auto;
`

const PostForm = styled.div`
   border-style: solid;
   border-color: black;
   margin: 3px;
   padding: 5px;
`

const PostContainerWrapper = styled.div`
   border-style: outset;
   border-color: black;
   margin-bottom: 5px;
`

const PostWrapper = styled.div`
   border-style: dashed;
   border-color: red;
   margin: 5px;
   padding: 3px;
`
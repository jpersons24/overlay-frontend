import styled from 'styled-components'
import { useState } from 'react'
import { useSelector } from 'react-redux'
// import GameShow from './GameShow'


function GameCard({ game, odds }) {

   const [postInput, setPostInput] = useState("")

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

   function getFormInput(event){
      console.log(event.target.value)
      setPostInput(event.target.value)
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

      // console.log(newPost)
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
            <button>See odds</button>
            <p>On click, show modal for that specific game!</p>
            {/* {sites} */}
            <PostForm>
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
   margin-right: 40px;
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
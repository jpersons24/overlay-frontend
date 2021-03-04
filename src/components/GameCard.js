import styled from 'styled-components'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addNewPost } from '../redux/postSlice'
import { Modal } from './modal/GameModal'


function GameCard({ game, odds }) {

   const [postInput, setPostInput] = useState("")
   const [show, setShow] = useState(false)

   const dispatch = useDispatch()

   // useSelector to get currentUser id
   const currentUser = useSelector((state) => state.user.currentUser)
   const posts = useSelector((state) => state.post.displayedPosts)

   const sites = odds.map(site => {
      return (
         <div key={site.id}>
            <h3>{site.site_nice}</h3>
            <h6>Head 2 Head(home, away)</h6>
            <p>{site.odds}</p>
         </div>
      )
   });

   const filteredPosts = posts.filter((post) => {
      if (post.game.id === game.id) {
         return post
      } else {
         return null
      }
   })

   const postsToDisplay = filteredPosts.map((post) => {
      return (
         <PostWrapper>{post.content} (<em>{post.user.username}</em>)</PostWrapper>
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

   function handleOddsClick(event) {
      setShow(true)
   }

   function close() {
      setShow(false)
   }


   return (
         <Wrapper>
            <h3>{game.sport_nice}</h3>
            <p>{game.home_team} (h)</p>
            <p>{game.away_team} (a)</p>
            <PostForm>
               <button onClick={handleOddsClick}>See odds</button>
               {show ? <Modal key={game.id} close={close} sites={sites}/> : null}
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
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
         <PostWrapper key={post.id}>{post.content} (<em>{post.user.username}</em>)</PostWrapper>
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
      if(currentUser) {
         const newPost = {
            user_id: currentUser.id,
            game_id: game.id,
            content: event.target.post.value,
            likes: 0
         }

         createNewPost(newPost)
         setPostInput("")
      } else {
         alert("You must be signed in to leave a post! Sign up feature coming soon!")
      }
   }

   function handleOddsClick(event) {
      setShow(true)
   }

   function close() {
      setShow(false)
   }


   return (
         <Wrapper>
            <WrapperHeader>
               <League>{game.sport_nice}</League>
               <TeamsContainer>
                  <p>{game.home_team} (h)  VS  {game.away_team} (a)</p>
               </TeamsContainer>
            </WrapperHeader>
            <div>
               <button onClick={handleOddsClick}>See odds</button>
               <PostForm>
                  <div>
                     <PostContainerWrapper>
                        {postsToDisplay}
                        <form onSubmit={handleFormSubmit}>
                           <label htmlFor="post">What's up? </label>
                           <input type="text" name="post" value={postInput} onChange={getFormInput} />
                           <br></br>
                           <br></br>
                           <input type="submit" value="Post"/>
                        </form>
                     </PostContainerWrapper>
                     {show ? <Modal close={close} sites={sites} /> : null}
                  
                  </div>
               </PostForm>
            </div>
         </Wrapper>
   )
};


export default GameCard;


const Wrapper = styled.div`
   display: block; 
   color: black;
   background-color: yellow; 
   margin: 35px 0px;
   margin-right: auto;
   margin-left: auto;
   width: 65%;
   height: 300px;
   margin-bottom: 75px;
   border-style: double;
   border-color: black;
   border-radius: 10px;
   padding: 5px;
   overflow: auto;
`

const WrapperHeader = styled.div`
   margin-bottom: 65px;
`
const League = styled.h3`
   display: block;
   float: left;
`

const TeamsContainer = styled.div`
   display: block;
   float: right;
   margin-bottom: 20px;
`

const PostForm = styled.div`
   margin: 3px;
   padding: 5px;
`

const PostContainerWrapper = styled.div`
   border-style: outset;
   border-color: red;
   margin-bottom: 5px;
   margin-right: auto;
   width: 45%;
   display: block;
   float: left;
`

const PostWrapper = styled.div`
   border-style: dashed;
   border-color: red;
   margin: 5px;
   padding: 3px;
`

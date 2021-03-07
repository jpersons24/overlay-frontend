import styled from 'styled-components'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addNewPost } from '../redux/postSlice'
import { Modal } from './modal/GameModal'


function GameCard({ game, odds }) {

   const [postInput, setPostInput] = useState("")
   const [show, setShow] = useState(false)
   const [showPosts, setShowPosts] = useState(false)

   const dispatch = useDispatch()

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
      console.log(event.target)
   }

   function close() {
      setShow(false)
   }

   function handlePostsClick(event) {
      console.log(event.target)
      setShowPosts(true)
   }

   function hidePosts() {
      setShowPosts(false)
      console.log(showPosts)
   }


   return (
      <>
         <PreviewWrapper>
            <WrapperHeader>
               <h3>{game.sport_nice}</h3>
               <p>{game.home_team} (h)</p>  
               <p>VS</p>  
               <p>{game.away_team} (a)</p>   
            </WrapperHeader>
            <button onClick={handleOddsClick}>See odds</button>
            {show ? <Modal close={close} sites={sites} /> : null}
            {showPosts === false ?
               <button onClick={handlePostsClick}>See Posts</button>
               :
               <button onClick={hidePosts}>Hide Posts</button>
            }
            {showPosts === true ? 
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
                  </div>
               </PostForm>
            :
            null
            }
         </PreviewWrapper>
      </>
   )
};


export default GameCard;


const PreviewWrapper = styled.div`
   display: inline-block;  
   color: white;
   background-color: #9C824A; 
   margin: 35px 0px;
   margin: 5px 20px;
   width: 240px;
   height: 150px;
   margin-bottom: 75px;
   border-style: double;
   border-color: black;
   border-radius: 10px;
   padding: 5px;
`

const WrapperHeader = styled.div`
   margin-bottom: 65px;
`

const PostForm = styled.div`
   margin: 3px;
   padding: 5px;
`

const PostContainerWrapper = styled.div`
   border-style: outset;
   border-color: #103474;
   margin-bottom: 5px;
   margin-right: auto;
   width: 45%;
   display: block;
   float: left;
`

const PostWrapper = styled.div`
   color: white;
   border-style: dashed;
   border-color: #103474;
   margin: 5px;
   padding: 3px;
`

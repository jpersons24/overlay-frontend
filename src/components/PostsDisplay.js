import { useSelector } from 'react-redux'
import styled from 'styled-components'

function PostsDisplay({ gameID }) {

   console.log(gameID)
   const posts = useSelector((state) => state.post.displayedPosts)

   const filteredPosts = posts.filter((post) => {
      // console.log(post)
      if (post.game.id === gameID) {
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

   // console.log(postsToDisplay)

   return(
      <div>
         display posts here
         {postsToDisplay}
      </div>
   )
}

export default PostsDisplay


const PostBody = styled.p`
   margin-top: 0px;
   margin-bottom: 3px;
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

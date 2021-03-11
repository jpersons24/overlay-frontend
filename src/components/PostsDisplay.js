import { useSelector } from 'react-redux'
import styled from 'styled-components'

function PostsDisplay({ game }) {

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
            <PostUser><strong>{post.user.username}</strong></PostUser>
            <br></br>
            <PostBody>{post.content}</PostBody>
         </PostWrapper>
      )
   })

   return(
      <div>
         {postsToDisplay}
      </div>
   )
}

export default PostsDisplay


const PostBody = styled.p`
   margin-top: 0px;
   padding-bottom: 5px;
   text-align: center;
`

const PostUser = styled.h4`
   padding-left: 7px;
   display: inline-block;
`

const PostWrapper = styled.div`
   color: black;
   border-style: outset;
   border-color: white;
   border-width: 5px;
   border-radius: 5px;
   background-color: #CCE5FF;
   margin-bottom: 15px;
   padding: 10px;
   text-align: left;
   margin-right: auto;
   margin-left: auto;
   display: block;
   width: 55%;
`

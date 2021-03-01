import { displayStories } from '../redux/storySlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import styled from 'styled-components'



function Home () {

   const homeStories = useSelector((state) => state.story.displayedStories)
   console.log(homeStories)
   const dispatch = useDispatch()


   useEffect(() => {
      fetch("http://localhost:4000/stories")
      .then(res => res.json())
      .then(data => {
         const action = displayStories(data)
         console.log(action)
         dispatch(action)
      })
   }, [dispatch])


   // map through story objects to display
   const displayHomeStories = homeStories.map((story) => {
      return (
         <StoryContainer key={story.id}>
            <h3>{story.title}</h3>
            <StoryImage src={story.url_to_image} alt={story.title}/>
         </StoryContainer>
      )
   })



   return (
      <div>
         <h2>This is the home page!!!</h2>
         <Wrapper>
            {displayHomeStories}
         </Wrapper>
      </div>
   )
}

export default Home;


// ****** styling components *******

const Wrapper = styled.div`
   margin: auto;
   margin-top: 25px;
   margin-bottom: 50px;
   width: 80%;
   height: 300px;
   border-style: single;
   border-color: black;
   background-color: silver;
   padding: 20px;
   overflow: auto;
`

const StoryContainer = styled.div`
   margin: 30px 70px;
   border-style: solid;
   border-color: red;
`

const StoryImage = styled.img`
   height: 100px;
   width: 100px;
`
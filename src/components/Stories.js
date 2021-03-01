import { useEffect } from 'react'
// import dispatch and selector methods 
import { useDispatch, useSelector } from 'react-redux'
// import displayStories action method from storySlice file
import { displayStories } from '../redux/storySlice'
// import StoryCard component
import StoryCard from './StoryCard'




function Stories() {

   // define state using selector
   const storiesToDisplay = useSelector((state) => state.story.displayedStories)
   console.log(storiesToDisplay)
   // define dispatch
   const dispatch = useDispatch();

   // call useEffect function to fetch stories data from rails DB
   // then display information to the stories/news page (stories container)
   useEffect(() => {
      fetch("http://localhost:4000/stories")
      .then(res => res.json())
      .then(data => {
         const action = displayStories(data)
         // console.log(action)
         dispatch(action)
      })
   }, [dispatch])


   // map through styled components to create Story Card for each
   // then call function in return statement
   const storyCardComponents = storiesToDisplay.map(story => {
      return(
         <StoryCard 
            key={story.id} 
            story={story}
         /> 
      )
   })


   return (
      <div>
         <h2>This is where the stories go!</h2>
         <div>
            {storyCardComponents}
         </div>
      </div>
   )
}

export default Stories
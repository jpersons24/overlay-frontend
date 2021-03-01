// import { useEffect } from 'react'
import { useSelector } from 'react-redux'
// import { displayStories } from '../redux/storySlice'
import StoryCard from './StoryCard'




function Stories() {
   // useSelectors
   const storiesToDisplay = useSelector((state) => state.story.displayedStories)
   console.log(storiesToDisplay)
   // define dispatch
   // const dispatch = useDispatch();


   // map through story objects to create StoryCard for each
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
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import StoryCard from './StoryCard'



function Stories() {
   // useSelectors
   const storiesToDisplay = useSelector((state) => state.story.displayedStories)

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
      <Wrapper>
         <Header>Today's top stories</Header>
         <div>
            {storyCardComponents}
         </div>
      </Wrapper>
   )
}

export default Stories


// ******* styled components ********


const Wrapper = styled.div`
   margin-top: 50px;
`

const Header = styled.div`
   text-align: center;
`

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
            key={story.url} 
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
   background-color: black;
   color: white;
   padding-top: 50px;
`

const Header = styled.h2`
   text-align: center;
   text-shadow: 10px 0px 20px #fff;
`

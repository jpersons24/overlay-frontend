import styled from 'styled-components'

function StoryCard ({ story }) {

   console.log(story)
   

   return (
      <Wrapper>
         <h1>{story.title}</h1>
         <StoryImage src={story.url_to_image} alt={story.description} />
         <h4>{story.description}</h4>
         <p>Story Content needs to render here.</p>
         <p><strong>Author:</strong> {story.author}</p>
         <p><strong>Source:</strong> {story.source}</p>
         <a href={story.url}>Full story here!</a>
      </Wrapper>
   )
};

export default StoryCard

const Wrapper = styled.div`
   background: gray;
   border-style: single;
   border-color: black;
   border-radius: 10px;
   margin: auto;
   width: 75%;
   padding: 15px;
   margin-bottom: 15px;
   margin-top: 15px;
`

const StoryImage = styled.img`
   height: 300px; 
   margin: auto;
`
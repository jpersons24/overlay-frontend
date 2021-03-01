import styled from 'styled-components'

function StoryCard ({ story }) {

   // console.log(story)

   function handleClick(event) {
      console.log(event.target)
      // let favStory = story.id
      console.log(story.id)
   }

   return (
      <Wrapper>
         <h1>{story.title}</h1>
         <StoryImage src={story.url_to_image} alt={story.description} />
         <p>{story.content}</p>
         <h4>{story.description}</h4>
         <p><strong>Author:</strong> {story.author}</p>
         <p><strong>Source:</strong> {story.source}</p>
         <a href={story.url}>Full story here!</a>
         <br></br>
         <button onClick={handleClick}>Add to Favorites</button>
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
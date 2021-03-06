import styled from 'styled-components'

function FavoriteCard({ fav }) {

   return (
      <Wrapper>
         <h1>{fav.story.title}</h1>
         <StoryImage src={fav.story.url_to_image} alt={fav.story.description} />
         <p>{fav.story.content}</p>
         <h4>{fav.story.description}</h4>
         <p><strong>Author:</strong> {fav.story.author}</p>
         <p><strong>Source:</strong> {fav.story.source}</p>
         <a href={fav.story.url}>Full story here!</a>
      </Wrapper>
   )
}

export default FavoriteCard

const Wrapper = styled.div`
   background: #9C824A;
   color: white;
   border-style: solid;
   border-color: black;
   border-radius: 10px;
   margin: auto;
   width: 75%;
   padding: 15px;
   margin-bottom: 15px;
   margin-top: 15px;
`

const StoryImage = styled.img`
margin-right: auto;
margin-left: auto;
width: 70%;
display: block;
`
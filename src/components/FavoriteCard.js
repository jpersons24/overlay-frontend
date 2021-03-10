import styled from 'styled-components'

function FavoriteCard({ fav }) {

   return (
      <Wrapper>
         <StoryTitle>{fav.story.title}</StoryTitle>
         <StoryDescription>{fav.story.description}</StoryDescription>
         <StoryImage src={fav.story.urlToImage} alt={fav.story.description} />
         <br></br>
         <p>{fav.story.content}<a href={fav.url}>Full Story</a></p>
      </Wrapper>
   )
}

export default FavoriteCard

const Wrapper = styled.div`
   background-color: #fff;
   color: #5c5c5c;
   border-radius: 15px;
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
   height: 400px;
   display: block;
`

const StoryTitle = styled.h2`
   text-align: center;
`

const StoryDescription = styled.p`
   font-size: 12px;
   text-align: center;
`
import React from 'react'
import styled from 'styled-components'

export const Modal = ({ close, sites }) => {
   return (
      <PopUpWrapper>
         <div>
            <XBtn onClick={close}>X</XBtn>
            <h3>Game Modal</h3>
         </div>
         <div>
            {sites}
         </div>
         <button onClick={close}>Close</button>
      </PopUpWrapper>
   )
};


// ***** styled components *****


const PopUpWrapper = styled.div`
   border-style: solid;
   border-color: black;
   background-color: ivory;
`

const XBtn = styled.button`
   display: block;
   float: right;
   margin-right: 15px;
   border-style: outset;
   border-radius: 5px;
   border-color: black;
   color: red;
   padding: 1px 2px;
`
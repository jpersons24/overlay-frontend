import React from 'react'
import styled from 'styled-components'
// import { useState } from 'react'

export const Modal = ({ close, odds }) => {

   const sites = odds.map(site => {
      return (
         <SingleSite key={site.id}>
            <h3>{site.site_nice}</h3>
            <h6>h2h - (home, away)</h6>
            <p>{site.odds}</p>
         </SingleSite>
      )
   });

   return (
      <PopUpWrapper>
         <div>
            <XBtn onClick={close}>X</XBtn>
            <OddsHeader>Odds</OddsHeader>
         </div>
         <OddsContainer>
            {sites}
         </OddsContainer>
         <CloseButton onClick={close}>Close</CloseButton>
      </PopUpWrapper>
   )
};


// ***** styled components *****

const CloseButton = styled.button`
   margin-bottom: 5px;
`

const PopUpWrapper = styled.div`
   z-index: 1;
   border-style: solid;
   border-color: black;
   background-color: #9C824A;
   margin: auto;
   width: 70%;
   color: white;
`

const XBtn = styled.button`
   display: block;
   float: right;
   margin-right: 10px;
   border-style: outset;
   border-radius: 5px;
   border-color: black;
   color: red;
   padding: 1px 2px;
`

const OddsHeader = styled.h3`
   text-align: center;
`

const OddsContainer = styled.div`
   padding-left: 13px;
   height: 508px;
   overflow: auto;
   margin-bottom: 15px;
`

const SingleSite = styled.div`
   border-style: solid;
   border-color: black;
   border-width: 2px;
   border-radius: 5px;
   background-color: #474747;
   margin-right: 13px;
   margin-bottom: 1.5px;
`
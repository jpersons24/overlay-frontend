import React from 'react'

export const Modal = ({ close, sites }) => {
   return (
      <div >
         <div>
         <h1>Game Modal</h1>
         </div>
         <div>
            {sites}
         </div>
         <button onClick={close}>Close</button>
      </div>
   )
};
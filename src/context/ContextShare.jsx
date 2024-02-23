import React, { createContext, useState } from 'react'

export const addProjectresponeContext=createContext()

function ContextShare({children}) {
//children is a predefined props used to share data between components
//create a state that need to be shared
const [addProjectRespone,setAddProjectResponse]=useState({})


  return (
  <>
  <addProjectresponeContext.Provider value={{addProjectRespone,setAddProjectResponse}}>
    {children}
  </addProjectresponeContext.Provider>
  </>
  )
}

export default ContextShare
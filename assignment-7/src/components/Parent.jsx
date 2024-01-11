import React, { useState } from 'react'

import Child from "./Child"

export const Parent = () => {

    const [colour , setColour] = useState(null);

    const getColoue = (colour) => {
        setColour(colour)
    }

  return (
    <>
    <div style={{backgroundColor: `${colour}`}}>
        
    </div>
    <child getColoue={getColoue}/>
    </>
  )
}

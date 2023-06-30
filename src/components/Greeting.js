import React, { useState } from 'react'
import Output from './Output'

const Greeting = () => {
    const [changedText,setChangedText] = useState(false)

    const textChangeHandler=()=>{
        setChangedText(true)
    }
  return (
    <div>
        <h2>hello world!</h2>
      {!changedText && <Output>its good to see</Output>}
      {changedText && <Output>changed!</Output>}
        <button onClick={textChangeHandler}>Change Text</button>
    </div>
  )
}

export default Greeting
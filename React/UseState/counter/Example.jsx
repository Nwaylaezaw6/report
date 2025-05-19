import React ,{useState} from 'react'

const Example = () => {
    const [text,setText]=useState("HelloWorld");
  return (
    <div>
      <h1>{text}</h1>
      <input  onChange={(e)=>setText(e.target.value)}  type='text'/>
    </div>
  )
}

export default Example;

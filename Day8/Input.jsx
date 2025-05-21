import React from 'react'
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";
function Input  ({input,setInput,handleAdd,editIndex,})  {
  return (
    <div>
        <input  className='w-50 mr-60 ml-1 border bg-red-200 ml-20' 
                        value={input} onChange={(e)=>setInput(e.target.value)}
                        placeholder="Enter item"/>
                        <button className='border w-fix mr-10  rounded-md bg-teal-300'onClick={handleAdd}>
                        {editIndex!==null?<FaEdit  className="w-12 h-8"/>:<FaPlus  className="w-12 h-8"/>}
                         </button>
      
    </div>
  )
}

export default Input;

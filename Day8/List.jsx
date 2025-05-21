import React from 'react'
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";
function List({items, toggleDone, handleDElete, handleEdit}) {
  return (
    <div>
         {items.map((item,index)=>(
                                <li key={index}><input className='ml-30' type="checkbox" checked={item.done}
                                onChange={()=>toggleDone(index)}/>
                               <span style={{textDecoration:item.done?'line-through':'none',marginLeft:'8px',}}>
                                {item.text}</span>
                                <button className='border w-fix ml-65 rounded-md bg-teal-300'
                                onClick={()=>handleEdit(index)}><FaEdit className="w-12 h-8"/></button>{''}
                                <button className='border w-fix rounded-md bg-teal-300' 
                                onClick={()=>handleDElete(index)}><FaTrash  className="w-12 h-8"/></button>
                        </li>)
                    )}
    </div>
  )
}

export default List

import { useState } from "react"
import React from 'react'

function Crud() {
    const [items,setItems]=useState([]);
    const[input,setInput]=useState('');
    
    const[editIndex,setEditIndex]=useState(null);
   
    const handleAdd=()=>{
        if (input.trim()==='')return;
        if(editIndex!=null){
            const updatedItems=[...items];
            updatedItems[editIndex]=input;
            setItems(updatedItems);
            setEditIndex(null);}
            else{
                setItems([...items,input]);
            }
            setInput('');
        };
        const handleEdit=(index)=>{setInput(items[index]);
            setEditIndex(index);
        };
        const handleDElete=(index)=>{
            const filteredItems=items.filter((_,i)=>i !==index);
            setItems(filteredItems);
            if(editIndex===index){
                setEditIndex(null);
                setInput('');
            }
        };
        return(
            <div>
                <h2>React CRUD with useState</h2>
                <input value={input} onChange={(e)=>setInput(e.target.value)}
                placeholder="Enter item"/>

                <button onClick={handleAdd}>{editIndex!==null?'Update':'Add'}</button>
                <ul>
                     {items.map((item,index)=>(
                                <li key={index}>{item}{''}
                                <button onClick={()=>handleEdit(index)}>Edit</button>{''}
                                <button onClick={()=>handleDElete(index)}>Delete</button>
                        </li>)
                    )}
                </ul>
            </div>
        );
        
    }
export default Crud;

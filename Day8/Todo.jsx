import { useState } from "react"
import React from 'react'
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";
import List from "./List";
import Input from "./Input";

function Todo() {
    const [items,setItems]=useState([]);
    const[input,setInput]=useState('');
    
    const[editIndex,setEditIndex]=useState(null);
   
    const handleAdd=()=>{
        if (input.trim()==='') return;
        if(editIndex!=null){
            const updatedItems=[...items];
            updatedItems[editIndex].text=input;
            setItems(updatedItems);
            setEditIndex(null);}
            else{
                setItems([...items,{text:input,done:false}]);
            }
            setInput('');
        };
        const handleEdit=(index)=> {
             setInput(items[index].text);
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
        const toggleDone=(index)=>{
            const updatedItems=[...items];
            updatedItems[index].done= !updatedItems[index].done;
            setItems(updatedItems);
        };
        return(
            <div>
                <h2 className='text-center text-2xl '>TO DO LIST</h2>
                <br></br>

                <Input input={input}    ///Input Component from input.jsx
                setInput={setInput} 
                handleAdd={handleAdd}
                 editIndex={editIndex}/>

               <br></br>
               <br></br>
                <ul>

                <List items= {items}     //List component from list.jsx
                    handleEdit={handleEdit} 
                    handleDElete={handleDElete} 
                    handleAdd={handleAdd} 
                    toggleDone={toggleDone}
                    />
                  
                </ul>
            </div>
        );
        
    }
export default Todo;

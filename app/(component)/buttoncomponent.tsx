import {useState} from 'react'



export default function ButtonComp(props:buttonType){
    
  
    return(
        <>
        
<button onClick={props.onclickHandler} className="bg-transparent hover:bg-blue-500 text-green-700 font-semibold hover:text-white py-9 px-9 border border-green-500 hover:border-transparent rounded ">
 {props.title}
</button>
</>
)}
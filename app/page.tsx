// import { Html } from 'next/document'
'use client'
import React from 'react';
import {useState} from 'react'; 

import ButtonComp from './(component)/buttoncomponent';
export default function Home() {
  let count:number=0
  const names=["Mahmood","khan","Umer","Abdul","Asad"]
  const [arr,setArray]=useState(0)
  function nextName(){
    setArray(arr+1)
  }
  function prevName(){
    setArray(arr-1)
  }
  function reset(){
    setArray(0)
  }
  
  return(
   <>
    <h1 className='flex items-center justify-center'> Counter App </h1>

    <section className='h-screen flex items-center justify-center'>
    
    
    {names[arr]?<div className='bg-transparent text-green-700 hover:text-black py-2 px-4 border border-blue-500 hover:border-black rounded py-9 px-9 '>
    <h1>{names[arr]}</h1>
     
   </div> :
   
   <ButtonComp title='Reset?' onclickHandler={reset}/> }
   <br />
   
   <ButtonComp title='Previous'onclickHandler={prevName}/>
     <ButtonComp title='Next' onclickHandler={nextName}/>
     </section>
     </>
   )
}
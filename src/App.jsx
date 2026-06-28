import React, { useEffect, useState } from 'react'
import axios, { Axios } from "axios"
import Cards from './assets/components/Cards'
const App = () => {

  const [UserData,SetUserData] = useState([])
  const [index,Setindex]= useState(1)

  const getData = async() =>{
   const response = await axios.get(` https://picsum.photos/v2/list?page=${index}&limit=18`)
   SetUserData(response.data)

  }





  useEffect(function(){
getData()
  },[index])


  let printUserData = <h2 className='text-gray-500 font-bold text-lg capitalize absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>loading please wait....</h2>
  if(UserData.length>0){
    printUserData=UserData.map(function(elem,idx){
      return <div>
        <Cards elem={elem}/>
      </div>
    })
  }

  return (
    <div className='bg-black h-screen p-5 overflow-auto'>
     
      <div className='flex flex-wrap  gap-5 justify-center'>
        {printUserData}
      </div>
      <div className='flex justify-evenly items-center p-4 '>
        <button onClick={()=>{
           if(index>1){
             Setindex(index-1)
             
             SetUserData([])
             
            }
          }}
          className='bg-amber-400 active:scale-95 cursor-pointer text-black rounded px-4 py-2 font-semibold'>previous</button>

          <p className=' capitalize font-bold text-xl text-white'>page {index}</p>
       
        <button onClick={()=>{
          SetUserData([])
          
        
      Setindex(index+1)

    }
        } className='bg-amber-400 active:scale-95 cursor-pointer text-black rounded px-4 py-2  font-semibold'>next</button>
      </div>
    </div>
  )
}

export default App

import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [advice , setAdvice] = useState('')

  useEffect(()=>{
    fetchAdvice()
  },[])

const url = 'https://api.adviceslip.com/advice'
const fetchAdvice = ()=>{
axios.get(url).then((response)=>{
 setAdvice(response.data.slip.advice)
})
.catch((error)=>{
  console.log('error')
})
}

  return (
    <>
      <div className="container">
      <h1 className='header'>Advice App</h1>
        <div className="show-advice" >
            <p className='advice-text'>{advice}</p>
            <button className='btn' onClick={fetchAdvice} >Click for advice</button>
        </div>
      </div>

    </>
  )
}

export default App
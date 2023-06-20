"use client"
import React, { useState } from 'react'

const Age = ({calculatorAge}) => {
    const [birthDate,setBirthDate]= useState("")

    console.log(birthDate)
    const handleChang=(e)=>{
        setBirthDate(e.target.value)
    }
    
    const handleSubmit=(e)=>{
     e.preventDefault()
     calculatorAge(birthDate)
    }
    console.log("submit")
  return (
    <div className='age'>
        <h1>Age Calculator</h1>
        <form className='form' onSubmit={handleSubmit}>
            <input value={birthDate} type='date' onChange={handleChang}/>
            <br/>
            <button  disabled={!birthDate} type="submit" className='button' >Calculate Age</button>
        </form>
    </div>
  )
}



export default Age
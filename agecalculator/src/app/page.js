"use client"
import Age from '@/component/age/page'
import Result from '@/component/result/page'
import { useState } from 'react'
import {differenceInDays, differenceInMonths, differenceInYears} from 'date-fns'

export default function Home() {
   const [age,setAge] = useState(null)
  const calculatorAge=(birthDate)=>{
  const today= new Date();
  const birthDateObj = new Date(birthDate)
  const ageYear =differenceInYears(today,birthDateObj)
  const ageMonth =differenceInMonths(today,birthDateObj)
  const ageDay =differenceInDays(today,birthDateObj)
 setAge({
    year:ageYear,
    month:ageMonth,
    date:ageDay
  })

  // console.log({today,birthDateObj})
  }
  return (
   <div>
    <Age calculatorAge={calculatorAge} />
    {age&&<Result age={age}/>}
   </div>
  )
}

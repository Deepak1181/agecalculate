import React from 'react'

const Result = ({age}) => {
  return (
    <div className='result'>
        <h2>You are {age.year} year , {age.month} months and {age.date} days old</h2>
    </div>
  )
}

export default Result
import React from 'react'
import { useParams } from 'react-router-dom'

export default function Template() {
    type URLparams={firstName:string}
    const {firstName}= useParams<URLparams>()
    
  return (
    <div>
        <p>{`my name is ${firstName}`}</p>
       
    
      
    </div>
  )
}

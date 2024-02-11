import { useState } from 'react'
import SignUpForm from './components/SignUpForms'
import Authenticate from './components/Authenticate'
import './App.css'

function App() {
 
  return (
    <>
      <SignUpForm/>
      <Authenticate/>
    </>
  )
}

export default App

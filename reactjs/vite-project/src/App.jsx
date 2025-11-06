import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassExample from './ClassExample'
import LifecycleFunction from './LifecycleFunction'

function App() {
  return (
    <>
      <h3>LIfecycle Example</h3>
      <ClassExample myname="test" />
      {/* <LifecycleFunction /> */}
    </>
  )
}

export default App

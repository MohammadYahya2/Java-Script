import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HookForm from './Components/UserForm';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <h1>Your React App</h1>
      <HookForm
      
      />
    </div>

    </>
  )
}

export default App

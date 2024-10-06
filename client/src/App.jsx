import { useState } from 'react'

import Intro from './pages/Intro'
import { Outlet } from 'react-router-dom'
import { SocketProvider } from './context/SocketProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <SocketProvider>
      <Outlet/>
    </SocketProvider>
        
    </>
  )
}

export default App

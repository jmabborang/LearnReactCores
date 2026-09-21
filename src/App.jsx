import { useState } from 'react'
import Login from './views/authentication/login'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      {count === 0 ? <Login/> : <p></p>}
    </div>      
  )
}

export default App

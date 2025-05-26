import { Route, Routes } from 'react-router'

import './App.css'
import GameContainer from './routes/game-container/game-container.component'

const App = () => {
  if (import.meta.env.MODE !== "development") {
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};
}
  return (
    <Routes>
      <Route path='/' element={<GameContainer/>} />
    </Routes>
  )
}

export default App

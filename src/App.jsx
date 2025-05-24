import { Route, Routes } from 'react-router'

import './App.css'
import GameContainer from './routes/game-container/game-container.component'

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<GameContainer/>} />
    </Routes>
  )
}

export default App

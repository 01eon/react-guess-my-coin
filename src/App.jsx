import { Route, Routes } from 'react-router'
import GameContainer from './components/game-container/game-container.component'
import './App.css'

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<GameContainer />} />
    </Routes>
  )
}

export default App

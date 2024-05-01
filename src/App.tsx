
import './App.css'
import { HashRouter as Router, Route, Routes, } from 'react-router-dom'
import HomePage from './pages/HomePage'
import TestCrud from './pages/crud/TestCrud'

function App() {

  return (
    <Router>
      <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/test' element={<TestCrud/>}/>
      </Routes>
    </Router>

  )
}

export default App

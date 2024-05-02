
import './App.css'
import { HashRouter as Router, Route, Routes, } from 'react-router-dom'
import HomePage from './pages/HomePage'
import TestCrud from './pages/crud/TestCrud'
import Implemetation from './pages/Implemetation'
import Post from './pages/crud/Post'

function App() {

  return (
    <Router>
      <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/test' element={<TestCrud/>}/>
      <Route path='/project' element={<Implemetation/>}/>
      <Route path='/post' element={<Post/>}/>
      </Routes>
    </Router>

  )
}

export default App

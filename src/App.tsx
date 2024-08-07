
import './App.css'
import { HashRouter as Router, Route, Routes, } from 'react-router-dom'
import HomePage from './pages/HomePage'
import TestCrud from './pages/crud/TestCrud'
import Implemetation from './pages/Implemetation'
import Post from './pages/crud/Post'
import PostDetails from './pages/crud/PostDetails'
import SidebarComponent from './components/SidebarComponent'
import TopBar from './components/TopBar'
import Loginpage from './pages/Loginpage'
import Register from './pages/Register'

function App() {

  return (
    
    <Router>
      
      <Routes>
      <Route path='/login' element={<Loginpage/>}/>
      <Route path='/' element={<Implemetation/>}/>
      <Route path='/test' element={<TestCrud/>}/>
      <Route path='/project' element={<Implemetation/>}/>
      <Route path='/post' element={<Post/>}/>
      <Route path='/post-details/:id' element={<PostDetails/>}/>
      <Route path='/register' element={<Register/>}/>
      </Routes>
      <TopBar/>
      <SidebarComponent/>
    </Router>

  )
}

export default App

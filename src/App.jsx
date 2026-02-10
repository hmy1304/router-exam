import './App.css'
import {Routes, Route, NavLink} from 'react-router-dom'
import About from './pages/About'
import AboutDetail from './pages/AboutDetail'
import Home from './pages/Home'
import Company from './pages/Company'
import Notfound from './pages/Notfound'
import Board from './pages/Board'
import BoardDetail from './pages/BoardDetail'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/about/:id' element={<AboutDetail/>}/>
        <Route path='/company' element={<Company/>}/>
        <Route path='/board' element={<Board/>}/>
        <Route path='/board/:id' element={<BoardDetail/>}/>
        <Route path='*' element={<Notfound/>}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App

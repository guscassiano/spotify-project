import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Artists from './pages/Artists'
import Songs from './pages/Songs'
import Song from './pages/Song'
import Artist from './pages/Artist'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/artists' element={<Artists />} />
        <Route path='/artist/:id' element={<Artist />} />
        <Route path='/songs' element={<Songs />} />
        <Route path='/song/:id' element={<Song />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

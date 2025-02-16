import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout, { Home } from './components/Layout'
import { Coin } from './components/Coin'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/:coin' element={<Coin />} />
          <Route path='/' element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/index'
import Home from './components/Home/index'
import About from './components/About'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App


import './App.css'
import Home from './pages/Home'
import PaginaCEP from './pages/PaginaCEP'
import CachorroPg from './pages/CachorroPg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  

  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Buscar-cep" element={<PaginaCEP></PaginaCEP>}></Route>
        <Route path="/FotoDog" element={<CachorroPg></CachorroPg>}></Route>
      </Routes>
     </Router>
    </>
  )
}

export default App

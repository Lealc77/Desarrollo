import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { AuthProvider } from "./context/authContext";

import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'

function App(){
  return(
    <AuthProvider>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>Home PAge</h1>} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/vender' element={<RegisterPage />} />
        <Route path='/vender/:id' element={<h1>Vender ID</h1>} />
      </Routes>
      </BrowserRouter>
    </AuthProvider>
    
  )
}

export default App
import { Outlet } from 'react-router-dom'
import Header from './components/header'
import './App.css';
import Product from './pages/product';
import Farm from './pages/product'

const App = () => {
  return (
  <div className='App'>
    <Header />
  
      <h1>Welcome to APEFooD.NET</h1>

 
    <Outlet />
  </div>
)}


export default App;
import { Outlet } from 'react-router-dom'
import Header from './components/header'
import './App.css';


const App = () => {
  return (
  <div classname='App'>
    <Header />
  
      <h1>This is the Way</h1>
  
    <Outlet />
  </div>
)}


export default App;

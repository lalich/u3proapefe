import { createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import App from './App'
import Farms from './pages/farm'
import Products from './pages/product'
import Home from './pages/home'

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<App/>}>
        <Route path='' element={<Home/>} />
    
    </Route>
))

export default router
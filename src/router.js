import { createBrowseRouter, createRoutesFromElements, Route} from 'react-router-dom'
import App from './App'
import Farms from './pages/farm'
import Products from './pages/product'
import Home from './pages/home'
import { farmsLoader, farmLoader, productsLoader, productLoader } from './loaders'
import { createFarmAction, updateFarmAction, deleteFarmAction, createProductAction, updateProductAction, deleteProductAction } from './actions'

const router = createBrowseRouter(createRoutesFromElements(
    <Route path="/" element={<App/>}>
        <Route path='' element={<Home/>} loader={[farmsLoader, productsLoader]}/>
        <Route path='farm/:id' element={<Farms/>} loader={farmLoader}/>
        <Route path='product/:id' element={<Products/>} loader={productLoader}/>
        <Route path='create' action={[createFarmAction, createProductAction]}/>
        <Route path='update/:id' action={[updateFarmAction, updateProductAction]}/>
        <Route delete='delete/:id' action={[deleteFarmAction, deleteProductAction]}/>
    
    </Route>
))
import { createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import App from './App'
import Farms from './pages/farm'
import Product from './pages/product'
import Home from './pages/home'
import { farmsLoader, farmLoader, productsLoader, productLoader } from './loaders'
import { createFarmAction, updateFarmAction, deleteFarmAction, createProductAction, updateProductAction, deleteProductAction } from './actions'

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<App/>}>
        <Route path='' element={<Home/>} loader={productsLoader}/>
        <Route path='' element={<Home/>} loader={farmsLoader}/>
        <Route path='product/:id' element={<Product/>} loader={productLoader}/>
        <Route path='farm/:id' element={<Product/>} loader={farmLoader}/>
        <Route path='create/product' action={createProductAction} />
        <Route path='create/farm' action={createFarmAction} />
        <Route path="update/:id" action={updateProductAction} /> 
        <Route path='delete/:id' action={deleteProductAction} />
    </Route>
))

export default router;
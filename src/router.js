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
        <Route path=':id' element={<Product/>} loader={productLoader}/>
        <Route path='create' action={createProductAction} />
        <Route path="update/:id" action={updateProductAction} /> 
    </Route>
))

export default router;

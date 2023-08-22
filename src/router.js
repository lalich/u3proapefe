import { createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import App from './App'
import Farms from './pages/farm'
import Product from './pages/product'
import Home from './pages/home'
import { farmsAndProductsLoader, farmsLoader, farmLoader, productsLoader, productLoader } from './loaders'
import { createFarmAction, updateFarmAction, deleteFarmAction, createProductAction, updateProductAction, deleteProductAction } from './actions'

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<App/>}>
        <Route path='' element={<Home/>} loader={farmsAndProductsLoader}/>
        <Route path='product/:id' element={<Product/>} loader={productLoader}/>
        <Route path='farm/:id' element={<Farms/>} loader={farmLoader}/>
        <Route path='create/product' action={createProductAction} />
        <Route path='create/farm' action={createFarmAction} />
        <Route path="update/product/:id" action={updateProductAction} /> 
        <Route path="update/farm/:id" action={updateFarmAction} /> 
        <Route path='delete/product/:id' action={deleteProductAction} />
        <Route path='delete/farm/:id' action={deleteFarmAction} />
    </Route>
))

export default router;
import { createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import App from './App'
import Farms from './pages/farm'
import Product from './pages/product'
import FProduct from './pages/farmer/farmerproduct'
import Home from './pages/home'
import FSignup from './pages/farmer/farmersignup'
import USignup from './pages/user/usersignup'
import FLogin from './pages/farmer/farmerlogin'
import ULogin from './pages/user/userlogin'
import FarmerHome from './pages/farmer/farmer'
import { farmsAndProductsLoader, farmsLoader, farmLoader, productsLoader, productLoader, farmerLoader } from './loaders'
import { createFarmAction, updateFarmAction, deleteFarmAction, createProductAction, updateProductAction, deleteProductAction, farmerSignupAction, userSignupAction, farmerLoginAction, userLoginAction } from './actions'


const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<App/>}>
        <Route path='' element={<Home/>} loader={farmsAndProductsLoader}/>
        <Route path='product/:id' element={<Product/>} loader={productLoader}/>
        <Route path='/farmer/product/:id' element={<FProduct/>} loader={productLoader}/>
        <Route path='farm/:id' element={<Farms/>} loader={farmLoader}/>
        <Route path='create/product' action={createProductAction} />
        <Route path='create/farm' action={createFarmAction} />
        <Route path="update/product/:id" action={updateProductAction} /> 
        <Route path="update/farm/:id" action={updateFarmAction} /> 
        <Route path='delete/product/:id' action={deleteProductAction} />
        <Route path='delete/farm/:id' action={deleteFarmAction} />
        <Route path='farmer/signup' element={<FSignup/>} action={farmerSignupAction} /> 
        <Route path='user/signup' element={<USignup/>} action={userSignupAction} />
        <Route path='farmer/login' element={<FLogin/>} action={farmerLoginAction} />
        <Route path='user/login' element={<ULogin/>} action={userLoginAction} />
        <Route path='/farmer' element={<FarmerHome/>} loader={farmerLoader} />
        <Route path='/logout' element={<Home/>} />
        </Route>
))

export default router;
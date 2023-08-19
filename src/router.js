import { createBrowseRouter, createRoutesFromElements, Route} from 'react-router-dom'
import App from './App'
import Farm from './pages/farm'
import Farmer from './pages/farmer'
import { farmsLoader, farmLoader, productsLoader, productLoader } from './loaders'
import 
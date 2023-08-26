import { api } from './api'
import { redirect } from 'react-router-dom'

// farmer auth check
const authFCheck = () => {
    const loggedIn = localStorage.getItem('loggedIn')

    // if(!loggedIn){
    //     return false
    // }
    // return true
    const tokenCookie = document.cookie
    .split('; ')
    .find(row => row.startsWith('token'))
    console.log(tokenCookie)
    if (tokenCookie) {
        const token = tokenCookie.split('=')[1]
        return token !== undefined && token !== ''
    } else {
        return false
    }

}

// user auth chek
const authUCheck = () => {
    // const loggedIn = localStorage.getItem('loggedIn')

    // if(!loggedIn){
    //     return false
    // }
    // return true
    const tokenCookie = document.cookie
    .split('; ')
    .find(row => row.startsWith('token'))
    
    if (tokenCookie) {
        const token = tokenCookie.split('=')[1]
        return token !== undefined && token !== ''
    } else {
        return false
    }
    return true
}
// all home loader
export const farmsAndProductsLoader = async () => {
    const farmsResponse = await fetch(`${api}/farm`)
    const farms = await farmsResponse.json()

    const productsResponse = await fetch(`${api}/product`)
        const products = await productsResponse.json()

    return { farms, products }
  
    }

export const farmerLoader = async () => {
// farmer auth check
    if (!authFCheck()){ console.count()
return redirect ('/farmer/login')
    }

    const farmerFarmsResponse = await fetch(`${api}/farmer/farm`, {
        credentials: 'include'
    })
    console.log(farmerFarmsResponse)
    const fFarms = await farmerFarmsResponse.json()

    const farmerProductsResponse = await fetch(`${api}/farmer/product`, {
        credentials: 'include'
    })
    console.log(farmerProductsResponse)
        const fProducts = await farmerProductsResponse.json()
console.log(fProducts)
    return { fFarms, fProducts }
}


export const userLoader = async () => {
    // user auth check
    if (!authUCheck()){
     window.location.href = '/user/login'
            }
    const farmerFarmsResponse = await fetch(`${api}/farm`, {
        credentials: 'include'
    })
    console.log(farmerFarmsResponse)
    const uFarms = await farmerFarmsResponse.json()

    const farmerProductsResponse = await fetch(`${api}/product`, {
        credentials: 'include'
    })
    console.log(farmerProductsResponse)
        const uProducts = await farmerProductsResponse.json()

    return { uFarms, uProducts }
}


export const farmsLoader = async () => {
    const response = await fetch(`${api}/farm`)
    // console.log(response)
    const farms = await response.json()
    // console.log(farms)
    return farms
}

export const farmLoader = async ({params}) => {
    const id = params.id
    const response = await fetch(`${api}/farm/${id}`)
    const farm = await response.json()
    return farm
}
export const productsLoader = async () => {
    const response = await fetch(`${api}/product`)
    // console.log(response)
    const products = await response.json()
    // console.log(products)
    return products
}

export const productLoader = async ({params}) => {
    const id = params.id
    const response = await fetch(`${api}/product/${id}`)
    const product = await response.json()
    return product
}
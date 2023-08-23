import { api } from './api'

export const farmsAndProductsLoader = async () => {
    const farmsResponse = await fetch(`${api}/farm`)
    const farms = await farmsResponse.json()

    const productsResponse = await fetch(`${api}/product`)
        const products = await productsResponse.json()

    return { farms, products }
    console.log(farms, products)
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

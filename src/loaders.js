import {api} from './api'


export const farmsLoader = async () => {
    const response = await fetch(`${api}/farm`)
    const farms = await response.json()
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
    const products = await response.json()
    return products
}

export const productLoader = async ({params}) => {
    const id = params.id
    const response = await fetch(`${api}/product/${id}`)
    const product = await response.json()
    return product
}
import { api } from './api'
import {redirect } from 'react-router-dom'

export const createFarmAction = async ({request}) => {
    const formData = await request.formData()
    const newFarm = {
        farmname: formData.get('farmname'),
        image: formData.get('image'),
        address: formData.get('address'),
        state: formData.get('state'),
        city: formData.get('city'),
        username: formData.get('username'),
        password: formData.get('password')
    }
    console.log(newFarm)
        await fetch(`${api}/farm`, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(newFarm)
        })
        return redirect('/')
}

// export const updateFarmAction = async ({request, params}) => {
//     const id = params.id
//     const formData = await request.formData()
//     const updateFarm = {
//         farmname: formData.get('farmname'),
//         image: formData.get('image'),
//         address: formData.get('address'),
//         state: formData.get('state'),
//         city: formData.get('city')
//     }
//         await fetch (`${api}/farm/${id}`, {
//             method : 'PUT',
//             headers: {
//                 'Content-Type': 'applicatoin/json'
//             },
//             body: JSON.stringify(updateFarm)
//         })
//         return redirect(`/farm/${id}`)
// }

// export const deleteFarm = async ({params}) => {
//     const id = parrams.id
//     await fetch(`${api}/farm/${id}`, {
//         method: 'DELETE'
//     }
//     )
//     return redirect('/')
// }

export const createProductAction = async ({request}) => {
    const formData = await request.formData()
    const newProduct = {
        productname: formData.get('productname'),
        description: formData.get('description'),
        image: formData.get('image'),
        username: formData.get('username'),
        price: formData.get('price')
    }    
    await fetch(`${api}/product`, {
    method: 'POST', 
    headers: {
        "Content-Type": 'application/json'
    },
    body: JSON.stringify(newProduct)
})
    return redirect(`/`)
}

export const updateProductAction = async ({request, params}) => {
    const id = params.id
    const formData = await request.formData()
    const updateProduct = {
        productname: formData.get('productname'),
        description: formData.get('description'),
        image: formData.get('image'),
        username: formData.get('username'),
        price: formData.get('price')
    }
    await fetch(`${api}/product/${id}`, {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(updateProduct)
})
    return redirect(`/`)
}

export const deleteProductAction = async ({params}) => {
    const id = params.id
    await fetch(`${api}/product/${id}`, {
        method: 'DELETE'
    })
    return redirect('/')
}
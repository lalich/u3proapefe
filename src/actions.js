import { api } from './api'
import { redirect } from 'react-router-dom'

// create farm action
export const createFarmAction = async ({request}) => {
    const formData = await request.formData()
    
    const newFarm = {
        farmname: formData.get('farmname'),
        image: formData.get('image'),
        address: formData.get('address'),
        state: formData.get('state'),
        city: formData.get('city'),
        zip: formData.get('zip')
    }
    console.log(newFarm)
        await fetch(`${api}/farm`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(newFarm)
        })
        return redirect('/farmer')
}

// update farm action
export const updateFarmAction = async ({request, params}) => {
    const id = params.id
    console.log("yooo")
    console.log(request)
    console.log(id)
    const formData = await request.formData()
    
    const updateFarm = {
        farmname: formData.get('farmname'),
        image: formData.get('image'),
        address: formData.get('address'),
        state: formData.get('state'),
        city: formData.get('city'),
        zip: formData.get('zip'),
    }
    console.log(updateFarm)
        await fetch (`${api}/farm/${id}`, {
            method : 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateFarm)
        })
        return redirect(`/`)
}

// delete farm action
export const deleteFarmAction = async ({params}) => {
    const id = params.id
    
    await fetch(`${api}/farm/${id}`, {
        method: 'DELETE',
        credentials: 'include',
    }
    )
    return redirect('/')
}

// reate product action
export const createProductAction = async ({request}) => {
    const formData = await request.formData()
  
    const newProduct = {
        productname: formData.get('productname'),
        description: formData.get('description'),
        image: formData.get('image'),
        price: formData.get('price'),
      
    }    
    await fetch(`${api}/product`, {
    method: 'POST', 
    credentials: 'include',
    headers: {
        "Content-Type": 'application/json'
    },
    body: JSON.stringify(newProduct)
})
    return redirect(`/`)
}

// update product action
export const updateProductAction = async ({request, params}) => {
    const id = params.id
    const formData = await request.formData()
  
    
    const updateProduct = {
        productname: formData.get('productname'),
        description: formData.get('description'),
        image: formData.get('image'),
        price: formData.get('price'),
        
      
    }
    await fetch(`${api}/product/${id}`, {
        method: 'PUT',
        credentials: 'include',
        headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(updateProduct)
})
    return redirect(`/`)
}

// delete product action
export const deleteProductAction = async ({params}) => {
    const id = params.id
    
    await fetch(`${api}/product/${id}`, {
        method: 'DELETE',
        credentials: 'include'
    })
    return redirect('/')
}

// farmer signup action
export const farmerSignupAction = async ({request}) => {
    const formData = await request.formData()
    console.log(formData)
    const newFarmer = {
    farmername: formData.get('farmername'),
    password: formData.get('password')
}
console.log(newFarmer)
    await fetch(`${api}/farmer/signup`, {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(newFarmer)
    })
    return redirect('/')
}

// user signup action
export const userSignupAction = async ({request}) => {
    const formData = await request.formData()
    console.log(formData)
    const newUser = {
    username: formData.get('username'),
    password: formData.get('password'),
    zip: formData.get('zip')
}
console.log(newUser)
    await fetch(`${api}/user/signup`, {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(newUser)
    })
    return redirect('/')
}

// farmer login action
export const farmerLoginAction = async ({request}) => {
    const formData = await request.formData()
    console.log(formData)
    const farmer = {
    farmername: formData.get('farmername'),
    password: formData.get('password')
}
console.log(farmer)
    const response = await fetch(`${api}/farmer/login`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(farmer)
    })
    if (response.status >=400) {
        alert(response.statusText)
        return redirect('/user/login')
    }

localStorage.setItem('loggedIn', JSON.stringify({status: true}))
    return redirect('/farmer')
}

// user login action
export const userLoginAction = async ({ request }) => {
    const formData = await request.formData()
    console.log(formData)
    const user = {
    username: formData.get('username'),
    password: formData.get('password'),
    zip: formData.get('zip')
}
console.log(user)
    const response = await fetch(`${api}/user/login`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(user)
    })

    if (response.status >= 400) {
        alert(response.statusText)
        window.location.href='/user/login'
    }

localStorage.setItem('loggedIn', JSON.stringify({status: true}))

    return redirect('/')
}
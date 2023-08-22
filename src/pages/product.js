import { useLoaderData, Form } from 'react-router-dom'
import deleteProductAction from '../actions'

const Product = () => {
    const product = useLoaderData()
    console.log("here_")
    console.log(product)
    console.log("here")
    const id =  product._id
    console.log(id)

        return (
            
            <div className='farm'>
                
                <h1>{product.productname}</h1>
                <img src={product.image}/>
                <h5>{product.description}</h5>

                <h1>Edit a Product</h1>

            <Form action={`/update/${id}`} method='PUT'>
                <input type='text' name='productname' placeholder={product.productname}/>
                <input type='text' name='image' placeholder={product.image}/>
                <input type='number' name='price' placeholder={product.price}/>
                <input type='text' name='description' placeholder={product.description}/>
                <input type='submit' value='Edit Product'/>
            </Form>

            <h2>Delete Person</h2>
    <Form action={`/delete/${product._id}`} method="post">
        <input type="submit" value="Delete Procuct"/>
    </Form>
            </div>
            
        )
}

export default Product
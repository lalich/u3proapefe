import { useLoaderData, Form } from 'react-router-dom'
import deleteProductAction from '../../actions'
import { productLoader, productsLoader } from '../../loaders'

const FProduct = () => {
    const product = useLoaderData(productsLoader())
 
    const id =  product._id


        return (
            
            <div className='farmproduct'>
                
                <h1>{product.productname}</h1>
                <img src={product.image}/>
                <h5>{product.description}</h5>

                <h1>Edit a Product</h1>

            <Form action={`/update/product/${id}`} method='PUT'>
                <input type='text' name='productname' placeholder={product.productname}/>
                <input type='text' name='image' placeholder={product.image}/>
                <input type='number' name='price' placeholder={product.price}/>
                <input type='text' name='description' placeholder={product.description}/>
                <input type='submit' value='Edit Product'/>
            </Form>

            <h2>Delete Product</h2>
    <Form action={`/delete/product/${product._id}`} method="post">
        <input type="submit" value="Delete Product"/>
    </Form>
            </div>
            
        )
}

export default FProduct
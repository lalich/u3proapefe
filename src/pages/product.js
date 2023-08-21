import { useLoaderData, Form } from 'react-router-dom'

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
                <h5>{product.description}</h5>

                <h1>Edit a Product</h1>

            <Form action={`/update/:${id}`} method='PUT'>
                <input type='text' name='productname' placeholder='Product Name'/>
                <input type='text' name='image' placeholder='Product Image'/>
                <input type='number' name='price' placeholder='Product Price'/>
                <input type='text' name='description' placeholder='Product Description'/>
                <input type='submit' value='Edit Product'/>
            </Form>
            </div>
            
        )
}

export default Product
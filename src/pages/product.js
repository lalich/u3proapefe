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

           
            
            <button>favorite</button>
            </div>
            
        )
}

export default Product
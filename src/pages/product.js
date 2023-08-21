import { useLoaderData } from 'react-router-dom'

const Products = () => {
    const product = useLoaderData()
    console.log(product) 

        return (
            <div className='product'>
                <h1>{product.productname}</h1>
                <h2>{product.image}</h2>
                <img src={product.image} alt={product.productname} />
                <h5>{product.description}</h5>
            </div>
        )
}

export default Products
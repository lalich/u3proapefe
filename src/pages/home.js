import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const products = useLoaderData(); 
    
    return (
        <div>
            {products.map((product, index) => (
                <div key={product._id} className='productname'>
                    <Link to={`/product/${product._id}`}>
                        <h1>{product.productname}</h1>
                    </Link>
                    <img src={product.image} alt={product.name} />
                    <h2>${product.price}</h2>
                    <h3>Description: {product.description}</h3>
                </div>
            ))}
        </div>
    );
};

export default Home;
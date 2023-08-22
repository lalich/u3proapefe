import { Link, useLoaderData, Form } from 'react-router-dom';
const Home = () => {
    const products = useLoaderData();
    return (
        <div>
<h1>Create a Product</h1>
        <Form action='/create' method='POST'>
            <input type='text' name='productname' placeholder='Product Name'/>
            <input type='text' name='image' placeholder='Product Image'/>
            <input type='number' name='price' placeholder='Product Price'/>
            <input type='text' name='description' placeholder='Product Description'/>
            <input type='text' name='username' placeholder='Username' />
            
        <input type='submit' value='Create Product'/>
        </Form>
            {products.map((product, index) => (
                <div key={product._id} className='productname'>
                    <Link to={`/${product._id}`}>
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
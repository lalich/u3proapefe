import { Link, useLoaderData, Form } from 'react-router-dom';
import { farmsLoader, productsLoader } from '../loaders';
const Home = () => {
    const products   = useLoaderData(productsLoader)
    const farms = useLoaderData(farmsLoader)
    return (
        <div>
<h1>Create a Product</h1>
        <Form action='/create/product' method='POST'>
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
            <h1>Create a Farm</h1>
        <Form action='/create/farm' method='POST'>
            <input type='text' name='farmname' placeholder='Farm Name'/>
            <input type='text' name='image' placeholder='Farm Logo'/>
            <input type='text' name='address' placeholder='Address'/>
            <input type='text' name='city' placeholder='City'/>
            <input type='text' name='state' placeholder='State'/>
            <input type='text' name='username' placeholder='Username' />
            <input type='text' name='password' placeholder='Password' />

        <input type='submit' value='Create Farm'/>
        </Form>

        {farms.map((farmerInfo, index) => (
                <div key={farmerInfo._id} className='farmname'>
                    <Link to={`/${farmerInfo._id}`}>
                        <h1>{farmerInfo.farmname}</h1>
                    </Link>
                    <img src={farmerInfo.image} alt={farmerInfo.name} />
                    <h2>{[farmerInfo.adress, farmerInfo.city, farmerInfo.state]}</h2>
                    
                </div>
            ))}
        </div>
    );
};
export default Home;
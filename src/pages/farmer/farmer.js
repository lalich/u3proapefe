import { Link, useLoaderData, Form, redirect } from 'react-router-dom';
import { farmerLoader } from '../../loaders';
// import axios from 'axios'

const FarmerHome = () => {
    const { fFarms, fProducts }  = useLoaderData(farmerLoader())
    console.log(fFarms.farmername)
   console.log(fFarms)


    return (
        <div>
                <h1>Welcome to {fFarms.farmname} {fFarms.farmername} </h1>
            <h1>Create a Farm</h1>
        <Form action='/create/farm' method='POST'>
            <input type='text' name='farmname' placeholder='Farm Name'/>
            <input type='text' name='image' placeholder='Farm Logo'/>
            <input type='text' name='address' placeholder='Address'/>
            <input type='text' name='city' placeholder='City'/>
            <input type='text' name='state' placeholder='State'/>
            <input type='text' name='zip' placeholder='Zip'/>

        <input type='submit' value='Create Farm'/>
        </Form>
<h1>Create a Product</h1>
        <Form action='/create/product' method='POST'>
            <input type='text' name='productname' placeholder='Product Name'/>
            <input type='text' name='image' placeholder='Product Image'/>
            <input type='number' name='price' placeholder='Product Price'/>
            <input type='text' name='description' placeholder='Product Description'/>

            
        <input type='submit' value='Create Product'/>
        </Form>


        <h1>List of da Product$</h1>
            {fProducts.map((product, index) => (
                <div key={product._id} className='productname'>
                    <Link to={`product/${product._id}`}>
                        <h1>{product.productname}</h1>
                    </Link>
                    <img src={product.image} alt={product.name} />
                    <h2>${product.price}</h2>
                    <h3>Description: {product.description}</h3>
                </div>
            ))}
            <h1>Welcome to the FarmLand$</h1>
        {fFarms.map((farm, index) => (
                <div key={farm._id} className='farmname'>
                    <Link to={`farm/${farm._id}`}>
                        <h1>{farm.farmname}</h1>
                    </Link>
                    <img src={farm.image} alt={farm.name} />
                    <h2>{farm.address}</h2>
                    <h2>{farm.city} ,{farm.state}</h2>
                    
                </div>
            ))}
        </div>
    );
};
export default FarmerHome;
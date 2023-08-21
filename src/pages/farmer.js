import { Link, useLoaderData, Form } from 'react-router-dom'

const Farmer = () => {
    const product = useLoaderData()
    const farm = useLoaderData()

    return (
        <div>
        <h1>Create a Farm</h1>
        <Form action='/create' method='POST'>
            <input type="text" name='farmname' placeholder='Farm Name'/>
            <input type='text' name='address' placeholder='Street Address'/>
            <input type='text' name='state' placeholder='State'/>
            <input type='text' name='city' placeholder='City'/>
            <input type='text' name='image' placeholder='Farm Logo'/>
        <input type='submit' value='Create Farm'/>
        </Form>
        
        <h1>Create a Product</h1>
        <Form action='/create' method='POST'>
            <input type='text' name='productname' placeholder='Product Name'/>
            <input type='text' name='image' placeholder='Product Image'/>
            <input type='number' name='price' placeholder='Product Price'/>
            <input type='text' name='description' placeholder='Product Description'/>
        <input type='submit' value='Create Product'/>
        
        </Form>
        </div>
        
    )
}

export default Farmer
import { useLoaderData, Form } from 'react-router-dom'
import { deleteFarmAction } from '../../actions'
import { farmLoader } from '../../loaders'


const Farm = () => {
    const farm = useLoaderData(farmLoader)
    console.log(farm) 

        return (
            <div className='farm'>
                <h1>{farm.farmname}</h1>

                <img src={farm.image} alt={farm.farmname} />

                <h3>{farm.address}</h3>
                <h3>{farm.city}</h3>
                <h3>{farm.state}</h3>
           
                         <h1>Edit Farm</h1>

                         <Form action={`/update/farm/${farm._id}`} method='PUT'>
                             <input type='text' name='farmname' placeholder={farm.farmname}/>
                             <input type='text' name='image' placeholder={farm.image}/>
                             <input type='number' name='address' placeholder={farm.address}/>
                             <input type='text' name='city' placeholder={farm.city}/>
                             <input type='text' name='state' placeholder={farm.state}/>
                             <input type='submit' value='Edit Farm'/>
                         </Form>
             
                         <h2>Delete Farm</h2>
                 <Form action={`/delete/farm/${farm._id}`} method="post">
                     <input type="submit" value="Delete da Farm"/>
                 </Form>
                         </div>
                         
                     )
             }

export default Farm
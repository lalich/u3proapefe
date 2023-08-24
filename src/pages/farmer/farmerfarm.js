import { useLoaderData, Form } from 'react-router-dom'
import { deleteFarmAction } from '../../actions'
import { farmerLoader } from '../../loaders'


const FFarm = () => {
    const fFarm = useLoaderData(farmerLoader)
    console.log(fFarm) 

        return (
            <div className='farm'>
                <h1>{fFarm.farmname}</h1>

                <img src={fFarm.image} alt={fFarm.farmname} />

                <h3>{fFarm.address}</h3>
                <h3>{fFarm.city}</h3>
                <h3>{fFarm.state}</h3>
                <h3>{fFarm.zip}</h3>
           
                         <h1>Edit Farm</h1>

                         <Form action={`/update/farm/${fFarm._id}`} method='PUT'>
                             <input type='text' name='farmname' placeholder={fFarm.farmname}/>
                             <input type='text' name='image' placeholder={fFarm.image}/>
                             <input type='taxt' name='address' placeholder={fFarm.address}/>
                             <input type='text' name='city' placeholder={fFarm.city}/>
                             <input type='text' name='state' placeholder={fFarm.state}/>
                             <input type='text' name='zip' placeholder={fFarm.zip}/>
                             <input type='submit' value='Edit Farm'/>
                         </Form>
             
                         <h2>Delete Farm</h2>
                 <Form action={`/delete/farm/${fFarm._id}`} method="post">
                     <input type="submit" value="Delete da Farm"/>
                 </Form>
                         </div>
                         
                     )
             }

export default FFarm
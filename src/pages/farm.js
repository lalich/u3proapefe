import { useLoaderData, Form } from 'react-router-dom'
import { deleteFarmAction } from '../actions'
import { farmLoader } from '../loaders'


const Farm = () => {
    const farm = useLoaderData(farmLoader)
    console.log(farm) 

        return (
            <div className='farm'>
                <h1>{farm.farmname} <br/>
                Brought to you by:
                {farm.farmername}</h1>

                <img src={farm.image} alt={farm.farmname} />

                <h3>{farm.address}</h3>
                <h3>{farm.city}</h3>
                <h3>{farm.state}</h3>
                <h3>{farm.zip}</h3>


                      

<button>favorite</button>
                         </div>
                         
                     )
             }

export default Farm
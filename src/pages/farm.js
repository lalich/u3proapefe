import { useLoaderData } from 'react-router-dom'

const Farm = (props) => {
    const farm = useLoaderData()
    console.log(farm) 

        return (
            <div className='farm'>
                <h1>{farm.farmname}</h1>
                <h2>{farm.image}</h2>
                <img src={farm.image} alt={farm.farmname} />

                <h5>{farm.address}</h5>
                <h5>{farm.city}</h5>
                <h5>{farm.state}</h5>
            </div>
        )
}
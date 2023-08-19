import { Link, useLoaderData } from 'react-router-dom'

const Home = (props) => {
    const farms = useLoaderData
    const products = useLoaderData

    return (
            <div>
            {products.map((product, index) => {
                <div key={products._id} classname='productname'>
                    <Link to={`/${products._id}`}>
                    <h1>{products.productname}</h1>
                    </Link>
                    <img src={products.image} alt={products.name}/>
                        <h2>${products.price}</h2>
                    <h3>Description:
                        {products.description}
                    </h3>
                    </div>
            })}
     
    </div>       
    )
}

export default Home
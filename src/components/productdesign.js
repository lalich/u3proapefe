import { Link } from 'react-router-dom'

const ProductDesign = (props) => {
    return (
    <nav className='productdesign'>
        <Link to='/product/:id'>
            <div>The Product Page</div>
        </Link>
    </nav>
)}

export default ProductDesign
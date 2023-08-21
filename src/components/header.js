import { Link } from 'react-router-dom'

const Header = (props) => {
    return (
    <nav className='header'>
        <Link to='/'>
            <div>Top Bar</div>
        </Link>
    </nav>
)}

export default Header
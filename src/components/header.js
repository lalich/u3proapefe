import { Link } from 'react-router-dom'

const Header = (props) => {
    return <nav className='header'>
        <div className='logo-container'> 
            <Link to='/'>
            <h1>APEFOOD</h1>
            </Link>
        </div>
            <div className='signup'>
             <Link to='farmer/signup'> 
             Farmer Signup
             </Link>

        {/* /farmer/signup */}
                
            </div>
    </nav>
}

export default Header
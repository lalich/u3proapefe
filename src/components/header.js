import { Link } from 'react-router-dom'

const Header = (props) => {
    return <nav className='header'>
        <div className='navbar'>
            <Link to='/'>
            <h1>APEFOOD</h1>
            </Link>
            <div className='signup'>
                <ul >
                    <li><a href='/farmer/signup'><button>Farmer Sign-up</button></a></li>
                    <li><a href='/user/signup'><button>User Sign-up</button></a></li>
                </ul>
                
            </div>
        </div>
    </nav>
}

export default Header
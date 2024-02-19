import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <span>Logo</span>
        <div>
        <NavLink to='/' className='nav-link'>
            Home
          </NavLink>
          <NavLink to='/cocktails' className='nav-link'>
            Cocktails
          </NavLink>
          <NavLink to='/whynot' className='nav-link'>
            WhyNot?
          </NavLink>
        </div>
      
    </div>
  )
}

export default Navbar

import React ,{useState} from 'react'
import { Link, NavLink } from 'react-router-dom';
import{FaBarsStaggered, FaXmark} from "react-icons/fa6"

const Navbar = () => {
    const [isMenuOpen,setIsMenuOpen] = useState(false);
    const handleMenuToggler = ()=>{
        setIsMenuOpen (!isMenuOpen)
    }

    const navItems =[
        {path:"/",title : "Start a search"},
        {path:"/my-job",title : "My Jobs"},
        {path:"/salary",title : "Salary Estimate"},
        {path:"/post-job",title : "Post A job"},
    ]
  return (
    <header className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
    <nav className='flex justify-between item-center py-6'>
    <a href="/" className="flex item-center gap-2 text-2xl text-black">
     
    <span className="py-2 px-5 border rounded bg-orange-500 text-white ">Mon boulot</span></a>
    {/* nav items for large devices*/}
    <ul className="hidden md:flex gap-12">
    
        {navItems.map(({path,title}) => ( 
            <li key={path} className="text-base text-primary">
            <NavLink to={path}
            className={({ isActive, isPending }) =>  isActive? "active": ""
            }
          >
            {title}
            </NavLink>
            </li>

        ))
    }
    </ul>

    {/* signup and login btn */}
    <div className="text-base text-primary font-medium space-x-5 hiddenk">
    <Link to="/login" className="py-2 px-5 border rounded "> Log in </Link>
    <Link to="/sign-up" className="py-2 px-5 border rounded bg-orange-500 text-white"> Sign up</Link>

    </div>

    {/*mobile menu */}
    <div className="md:hidden block">
    <button onClick={handleMenuToggler}>
    {
      isMenuOpen ? <FaXmark className= "w-5 h-5 text-primary"/> : <FaBarsStaggered className= "w-5 h-5 text-primary"/>
    }
    
    
    </button>
    </div>
    </nav>
     {/* navitems for mobile*/}
      <div className={`px-4 bg-orange-50  py-5 rounded-sm ${isMenuOpen ? "":"hidden" }`}>
     <ul>
      {navItems.map(({path,title}) => ( 
      <li key={path} className="text-base text-orange-500 first:text-white py-1">
      <NavLink to={path}
      className={({ isActive, isPending }) =>  isActive? "active": ""
      }
    >
      {title}
      </NavLink>
      </li>

  ))
}

<li className="text-orange-500 py-1"><Link to="/login"  > Log in </Link></li>
     </ul>
     </div>

    </header>
  );
};

export default Navbar;

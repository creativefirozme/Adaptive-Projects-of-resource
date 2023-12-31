import { Link, NavLink } from "react-router-dom";

const NavBar = () => {

    const navOptions = (
        <>
            <span className='space-x-2'>
                <NavLink to="/" className={({ isActive }) =>
                    isActive ? 'btn btn-secondary btn-outline hover:text-white btn-sm text-white text-xs text-opacity-80' : 'btn btn-ghost text-xs btn-sm'}>Home
                </NavLink>
                <NavLink to="/menu" className={({ isActive }) =>
                    isActive ? 'btn btn-secondary btn-outline hover:text-white btn-sm text-white text-xs text-opacity-80' : 'btn text-xs btn-ghost btn-sm'}>Menu
                </NavLink>
                <NavLink to="/allBooks" className={({ isActive }) =>
                    isActive ? 'btn btn-secondary btn-outline hover:text-white btn-sm text-white text-xs text-opacity-80' : 'btn text-xs btn-ghost btn-sm'}>All Book
                </NavLink>
                <NavLink to="/about" className={({ isActive }) =>
                    isActive ? 'btn btn-secondary btn-outline hover:text-white btn-sm text-white text-xs text-opacity-80' : 'btn text-xs btn-ghost btn-sm'}>About
                </NavLink>
            </span>
        </>
    )

    return (
        <>
            <div className="max-w-screen-xl">
                <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                {navOptions}
                            </ul>
                        </div>
                        <a className="btn btn-ghost normal-case text-xl">temp</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navOptions}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <Link to="/login" className="btn">Login
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavBar;
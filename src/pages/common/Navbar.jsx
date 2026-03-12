import React, { useContext, useState } from 'react';
import logo from '../../assets/istockphoto-477273563-612x612.jpg';
import AuthContext from '../../context/Authcontext/AuthContext';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { schoolConfig } from '../../config/schoolConfig';

const Navbar = () => {
    const { user, signOutUser, isAdmin } = useContext(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State for hamburger menu
    const navigate = useNavigate();
    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                toast.success('Successfully signed out!');
            })
            .catch(() => {
                toast.error('Cannot sign out, please try again.');
            });
    };

    const links = (
        <>
            <li><NavLink to="/" className="hover:text-zetech-secondary transition">Home</NavLink></li>
            <li><NavLink to="/allItems" className="hover:text-zetech-secondary transition">Lost & Found Items</NavLink></li>
            <li><NavLink to="/directory" className="hover:text-zetech-secondary transition">Campus Directory</NavLink></li>
            <li><NavLink to="/aboutUs" className="hover:text-zetech-secondary transition">About Us</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-zetech-secondary transition">Contact</NavLink></li>
        </>
    );

    return (
        <div className="sticky top-0 z-50 bg-white text-zetech-primary shadow-lg px-3 lg:px-8">
            <div className="navbar  mx-auto ">
                {/* Navbar Start */}
                <div className="navbar-start flex items-center" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
                    {/* Logo */}
                    <img className="w-16 rounded-full" src={logo} alt="Zetech Lost and Found Logo" />
                    <div className="flex flex-col">
                        <span className="text-2xl font-bold ml-3 font-poppins text-zetech-primary">{schoolConfig.name}</span>
                        <span className="text-xs ml-3 text-zetech-secondary">{schoolConfig.slogan}</span>
                    </div>
                </div>

                {/* Navbar Center for Large Screens */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal space-x-2 text-zetech-primary font-medium">
                        {links}
                    </ul>
                </div>

                {/* Navbar End */}
                <div className="navbar-end flex items-center space-x-4">
                    {user ? (
                        // User is logged in - Show Profile Dropdown
                        <div className="dropdown dropdown-end">
                            <button
                                tabIndex={0}
                                className="btn btn-ghost btn-circle avatar hover:bg-zetech-light transition">
                                <div className="w-10 rounded-full">
                                    <img alt={user.email} title={user.displayName} src={user.photoURL} />
                                </div>
                            </button>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-white text-zetech-primary rounded-box mt-3 w-52 shadow-lg">
                                  {links} 
                                {isAdmin && (
                                    <li>
                                        <Link to="/admin" className="font-semibold text-zetech-secondary">
                                            <span className="flex items-center gap-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                Admin Dashboard
                                            </span>
                                        </Link>
                                    </li>
                                )}
                                <li><Link to="/addItems">Add Lost & Found Item</Link></li>
                                <li><Link to="/allRecovered">All Recovered Items</Link></li>
                                <li><Link to="/myItems">Manage My Items</Link></li>
                                <li><Link to="/settings/notifications">Notification Settings</Link></li>
                                <li>
                                    <button
                                        onClick={handleSignOut}
                                        className="bg-gradient-to-r from-zetech-secondary to-orange-600 text-white font-bold py-2 px-4 rounded-md hover:from-orange-500 hover:to-orange-700 transition">
                                        Sign Out
                                    </button>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        // User is not logged in - Show Hamburger Menu on Small Screens
                        <div className="lg:hidden">
                            <button
                                className="btn btn-ghost btn-circle"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                </svg>
                            </button>

                            {/* Dropdown Menu */}
                            {isMenuOpen && (
                                <div className="absolute top-14 right-4 bg-white rounded-lg shadow-lg z-50 w-48">
                                    <ul className="menu menu-compact space-y-2 p-4 text-zetech-primary">
                                        {links}
                                        <li>
                                            <NavLink
                                                to="/register"
                                                className="block bg-gradient-to-r from-zetech-secondary to-orange-600 text-white font-bold py-2 px-4 rounded-lg hover:from-orange-500 hover:to-orange-700 transition"
                                            >
                                                Sign Up
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/signin"
                                                className="block bg-gradient-to-r from-zetech-secondary to-orange-600 text-white font-bold py-2 px-4 rounded-lg hover:from-orange-500 hover:to-orange-700 transition"
                                            >
                                                Sign In
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Sign Up/Sign In for Large Screens */}
                    {!user && (
                        <div className="hidden lg:flex space-x-4">
                            <NavLink
                                to="/register"
                                className="bg-gradient-to-r from-zetech-secondary to-orange-600 text-white font-bold py-2 px-5 rounded-md hover:from-orange-500 hover:to-orange-700 transition text-[0.8rem]"
                            >
                                Sign Up
                            </NavLink>
                            <NavLink
                                to="/signin"
                                className="bg-gradient-to-r from-zetech-secondary to-orange-600 text-white font-bold py-2 px-5 rounded-md hover:from-orange-500 hover:to-orange-700 transition text-[0.8rem]"
                            >
                                Sign In
                            </NavLink>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;

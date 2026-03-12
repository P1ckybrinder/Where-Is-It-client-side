import React, { useContext, useState } from 'react';
import logo from '../../assets/istockphoto-477273563-612x612.jpg';
import AuthContext from '../../context/Authcontext/AuthContext';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
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
            <li><NavLink to="/" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition">Home</NavLink></li>
            <li><NavLink to="/allItems" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition">Lost & Found Items</NavLink></li>
            <li><NavLink to="/aboutUs" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition">About Us</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition">Contact</NavLink></li>
        </>
    );

    return (
        <div className="sticky top-0 z-50 glass-liquid-premium border-b border-emerald-200/40 dark:border-emerald-500/20 px-3 lg:px-8 shadow-sm">
            <div className="navbar mx-auto">
                {/* Navbar Start */}
                <div className="navbar-start flex items-center" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
                    {/* Logo */}
                    <img className="w-16 rounded-full shadow-md" src={logo} alt="Lost and Found Logo" />
                    <span className="text-2xl font-bold ml-3 font-poppins gradient-text-green">Zetech Lost & Found</span>
                </div>

                {/* Navbar Center for Large Screens */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal space-x-2 text-emerald-600 dark:text-emerald-400 font-medium">
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
                                className="btn btn-ghost btn-circle avatar hover:bg-emerald-100 dark:hover:bg-emerald-900/40 transition">
                                <div className="w-10 rounded-full">
                                    <img alt={user.email} title={user.displayName} src={user.photoURL} />
                                </div>
                            </button>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content glass-liquid-premium text-emerald-600 dark:text-emerald-400 rounded-box mt-3 w-52 shadow-lg border border-emerald-200/40 dark:border-emerald-500/20">
                                {links}
                                <li><Link to="/addItems" className="hover:text-emerald-700 dark:hover:text-emerald-300">Add Lost & Found Item</Link></li>
                                <li><Link to="/allRecovered" className="hover:text-emerald-700 dark:hover:text-emerald-300">All Recovered Items</Link></li>
                                <li><Link to="/myItems" className="hover:text-emerald-700 dark:hover:text-emerald-300">Manage My Items</Link></li>
                                <li>
                                    <button
                                        onClick={handleSignOut}
                                        className="bg-gradient-to-r from-emerald-500 to-emerald-600 dark:from-emerald-600 dark:to-emerald-700 text-white font-bold py-2 px-4 rounded-md hover:shadow-lg transition">
                                        Sign Out
                                    </button>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        // User is not logged in - Show Hamburger Menu on Small Screens
                        <div className="lg:hidden">
                            <button
                                className="btn btn-ghost btn-circle text-emerald-600 dark:text-emerald-400"
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
                                <div className="absolute top-14 right-4 glass-liquid-premium rounded-lg shadow-lg z-50 w-48 border border-emerald-200/40 dark:border-emerald-500/20">
                                    <ul className="menu menu-compact space-y-2 p-4 text-emerald-600 dark:text-emerald-400">
                                        {links}
                                        <li>
                                            <NavLink
                                                to="/register"
                                                className="block bg-gradient-to-r from-emerald-500 to-emerald-600 dark:from-emerald-600 dark:to-emerald-700 text-white font-bold py-2 px-4 rounded-lg hover:shadow-lg transition"
                                            >
                                                Sign Up
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/signin"
                                                className="block bg-gradient-to-r from-emerald-500 to-emerald-600 dark:from-emerald-600 dark:to-emerald-700 text-white font-bold py-2 px-4 rounded-lg hover:shadow-lg transition"
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
                                className="bg-gradient-to-r from-emerald-500 to-emerald-600 dark:from-emerald-600 dark:to-emerald-700 text-white font-bold py-2 px-5 rounded-md hover:shadow-lg transition text-[0.8rem]"
                            >
                                Sign Up
                            </NavLink>
                            <NavLink
                                to="/signin"
                                className="bg-gradient-to-r from-emerald-500 to-emerald-600 dark:from-emerald-600 dark:to-emerald-700 text-white font-bold py-2 px-5 rounded-md hover:shadow-lg transition text-[0.8rem]"
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

import React, { useContext, useState, useEffect } from 'react';
import logo from '../../assets/istockphoto-477273563-612x612.jpg';
import AuthContext from '../../context/Authcontext/AuthContext';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { schoolConfig } from '../../config/schoolConfig';
import { FaSun, FaMoon } from 'react-icons/fa';

const Navbar = () => {
    const { user, signOutUser, isAdmin } = useContext(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [theme, setTheme] = useState('light');
    const navigate = useNavigate();
    
    useEffect(() => {
        // Load theme from localStorage
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);
    }, []);
    
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };
    
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
            <li><NavLink to="/" className="hover:text-zetech-accent transition">Home</NavLink></li>
            <li><NavLink to="/allItems" className="hover:text-zetech-accent transition">Lost & Found Items</NavLink></li>
            <li><NavLink to="/directory" className="hover:text-zetech-accent transition">Campus Directory</NavLink></li>
            <li><NavLink to="/aboutUs" className="hover:text-zetech-accent transition">About Us</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-zetech-accent transition">Contact</NavLink></li>
        </>
    );

    return (
        <div className="sticky top-0 z-50 glass-morphism-dark bg-white/20 dark:bg-slate-900/30 text-zetech-primary dark:text-zetech-accent shadow-2xl px-3 lg:px-8 border-b border-white/30 dark:border-slate-700/50 transition-colors duration-300">
            <div className="navbar mx-auto">
                {/* Navbar Start */}
                <div className="navbar-start flex items-center cursor-pointer" onClick={() => navigate('/')}>
                    <img className="w-16 rounded-full hover-glow" src={logo} alt="Zetech Lost and Found Logo" />
                    <div className="flex flex-col ml-3">
                        <span className="text-2xl font-bold gradient-text-green">{schoolConfig.name}</span>
                        <span className="text-xs text-zetech-accent dark:text-zetech-secondary">{schoolConfig.slogan}</span>
                    </div>
                </div>

                {/* Navbar Center for Large Screens */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal space-x-2 text-zetech-primary dark:text-zetech-accent font-medium">
                        {links}
                    </ul>
                </div>

                {/* Navbar End */}
                <div className="navbar-end flex items-center space-x-4">
                    {/* Theme Toggle Button */}
                    <button
                        onClick={toggleTheme}
                        className="btn btn-ghost btn-circle hover:bg-zetech-accent/20 dark:hover:bg-zetech-secondary/20 transition"
                        title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
                    >
                        {theme === 'light' ? (
                            <FaMoon className="text-lg text-slate-600 dark:text-yellow-300" />
                        ) : (
                            <FaSun className="text-lg text-yellow-400" />
                        )}
                    </button>

                    {user ? (
                        <div className="dropdown dropdown-end">
                            <button
                                tabIndex={0}
                                className="btn btn-ghost btn-circle avatar hover:bg-zetech-accent/20 dark:hover:bg-zetech-secondary/20 transition">
                                <div className="w-10 rounded-full ring-2 ring-zetech-primary dark:ring-zetech-accent">
                                    <img alt={user.email} title={user.displayName} src={user.photoURL} />
                                </div>
                            </button>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content glass-morphism text-zetech-primary dark:text-zetech-accent rounded-box mt-3 w-52 shadow-2xl">
                                  {links} 
                                {isAdmin && (
                                    <li>
                                        <Link to="/admin" className="font-semibold text-zetech-secondary dark:text-zetech-accent hover:text-zetech-primary dark:hover:text-white">
                                            <span className="flex items-center gap-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                Admin Dashboard
                                            </span>
                                        </Link>
                                    </li>
                                )}
                                <li><Link to="/addItems" className="hover:text-zetech-primary dark:hover:text-white">Add Lost & Found Item</Link></li>
                                <li><Link to="/allRecovered" className="hover:text-zetech-primary dark:hover:text-white">All Recovered Items</Link></li>
                                <li><Link to="/myItems" className="hover:text-zetech-primary dark:hover:text-white">Manage My Items</Link></li>
                                <li><Link to="/settings/notifications" className="hover:text-zetech-primary dark:hover:text-white">Notification Settings</Link></li>
                                <li>
                                    <button
                                        onClick={handleSignOut}
                                        className="glass-button w-full text-center">
                                        Sign Out
                                    </button>
                                </li>
                            </ul>
                        </div>
                    ) : (
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

                            {isMenuOpen && (
                                <div className="absolute top-14 right-4 glass-morphism rounded-lg z-50 w-48">
                                    <ul className="menu menu-compact space-y-2 p-4 text-zetech-primary dark:text-zetech-accent">
                                        {links}
                                        <li>
                                            <NavLink
                                                to="/register"
                                                className="glass-button text-center block"
                                            >
                                                Sign Up
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/signin"
                                                className="glass-button text-center block"
                                            >
                                                Sign In
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    )}

                    {!user && (
                        <div className="hidden lg:flex space-x-4">
                            <NavLink
                                to="/register"
                                className="glass-button text-sm"
                            >
                                Sign Up
                            </NavLink>
                            <NavLink
                                to="/signin"
                                className="glass-button text-sm"
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

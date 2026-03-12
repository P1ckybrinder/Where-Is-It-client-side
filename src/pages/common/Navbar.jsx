import React, { useContext, useState, useEffect } from 'react';
import logo from '../../assets/istockphoto-477273563-612x612.jpg';
import AuthContext from '../../context/Authcontext/AuthContext';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { schoolConfig } from '../../config/schoolConfig';
import { FaSun, FaMoon, FaShieldAlt, FaSignOutAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { GlassButton } from '../../components/glass';

const Navbar = () => {
    const { user, signOutUser, isAdmin } = useContext(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [theme, setTheme] = useState('light');
    const navigate = useNavigate();
    
    useEffect(() => {
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

    const navLinks = [
        { to: '/', label: 'Home' },
        { to: '/allItems', label: 'Lost & Found Items' },
        { to: '/directory', label: 'Campus Directory' },
        { to: '/aboutUs', label: 'About Us' },
        { to: '/contact', label: 'Contact' }
    ];

    const links = (
        <>
            {navLinks.map((link) => (
                <li key={link.to}>
                    <NavLink 
                        to={link.to} 
                        className={({ isActive }) => `
                            transition-colors duration-200
                            ${isActive 
                                ? 'text-cyan-600 dark:text-cyan-400 font-bold' 
                                : 'text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400'
                            }
                        `}
                    >
                        {link.label}
                    </NavLink>
                </li>
            ))}
        </>
    );

    return (
        <div className="sticky top-0 z-50 glass-navbar text-slate-900 dark:text-white transition-colors duration-300">
            <div className="container mx-auto px-4 lg:px-6">
                <div className="flex items-center justify-between h-20">
                    {/* Logo & Brand */}
                    <motion.div 
                        className="flex items-center cursor-pointer gap-3"
                        onClick={() => navigate('/')}
                        whileHover={{ scale: 1.02 }}
                    >
                        <motion.img 
                            className="w-14 h-14 rounded-full hover-glow object-cover" 
                            src={logo} 
                            alt={schoolConfig.name}
                            whileHover={{ scale: 1.05 }}
                        />
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold gradient-text-green">{schoolConfig.name}</span>
                            <span className="text-xs text-cyan-400 dark:text-cyan-300">{schoolConfig.slogan}</span>
                        </div>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-1">
                        <ul className="flex gap-2">
                            {navLinks.map((link) => (
                                <li key={link.to}>
                                    <NavLink 
                                        to={link.to}
                                    className={({ isActive }) => `
                                        px-4 py-2 rounded-lg transition-all duration-200 font-medium
                                        ${isActive 
                                            ? 'bg-cyan-500/10 dark:bg-cyan-400/10 text-cyan-600 dark:text-cyan-400' 
                                            : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                                        }
                                    `}
                                    >
                                        {link.label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Right Section - Actions & Theme */}
                    <div className="flex items-center gap-4">
                        {/* Theme Toggle */}
                        <motion.button
                            onClick={toggleTheme}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                            title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
                        >
                            {theme === 'light' ? (
                                <FaMoon className="text-lg text-slate-600 dark:text-yellow-300" />
                            ) : (
                                <FaSun className="text-lg text-yellow-400" />
                            )}
                        </motion.button>

                        {user ? (
                            <div className="relative group hidden lg:block">
                                {/* Avatar Button */}
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                                >
                                    <img 
                                        alt={user.displayName} 
                                        src={user.photoURL} 
                                        className="w-10 h-10 rounded-full object-cover border-2 border-cyan-500"
                                    />
                                    <span className="text-sm font-semibold hidden lg:inline max-w-24 truncate">
                                        {user.displayName?.split(' ')[0]}
                                    </span>
                                </motion.button>

                                {/* Dropdown Menu */}
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    whileHover={{ opacity: 1, y: 0 }}
                                    className="absolute right-0 mt-2 w-56 glass-card-default rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
                                >
                                    <div className="p-4 space-y-2">
                                        <p className="text-sm font-semibold text-slate-900 dark:text-white px-4 py-2 border-b border-slate-200 dark:border-slate-700">
                                            {user.displayName}
                                        </p>

                                        {isAdmin && (
                                            <motion.div
                                                whileHover={{ x: 4 }}
                                                onClick={() => navigate('/admin')}
                                            >
                                                <button className="w-full flex items-center gap-3 px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition">
                                                    <FaShieldAlt className="text-cyan-600 dark:text-cyan-400" />
                                                    <span className="text-sm font-medium">Admin Dashboard</span>
                                                </button>
                                            </motion.div>
                                        )}

                                        <motion.div whileHover={{ x: 4 }}>
                                            <NavLink to="/addItems" className="w-full block px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition text-sm font-medium">
                                                + Add Lost & Found Item
                                            </NavLink>
                                        </motion.div>

                                        <motion.div whileHover={{ x: 4 }}>
                                            <NavLink to="/allRecovered" className="w-full block px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition text-sm font-medium">
                                                All Recovered Items
                                            </NavLink>
                                        </motion.div>

                                        <motion.div whileHover={{ x: 4 }}>
                                            <NavLink to="/myItems" className="w-full block px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition text-sm font-medium">
                                                Manage My Items
                                            </NavLink>
                                        </motion.div>

                                        <motion.div whileHover={{ x: 4 }}>
                                            <NavLink to="/settings/notifications" className="w-full block px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition text-sm font-medium">
                                                Notification Settings
                                            </NavLink>
                                        </motion.div>

                                        <div className="border-t border-slate-200 dark:border-slate-700 pt-2 mt-2">
                                            <motion.button
                                                whileHover={{ x: 4 }}
                                                onClick={handleSignOut}
                                                className="w-full flex items-center gap-3 px-4 py-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-lg transition font-medium text-sm"
                                            >
                                                <FaSignOutAlt />
                                                Sign Out
                                            </motion.button>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        ) : null}

                        {/* Mobile Menu / Auth Buttons */}
                        <div className="lg:hidden">
                            {user ? (
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                            >
                                <img 
                                    alt={user.displayName} 
                                    src={user.photoURL} 
                                    className="w-10 h-10 rounded-full object-cover border-2 border-cyan-500"
                                />
                                </motion.button>
                            ) : (
                                <GlassButton 
                                    variant="primary" 
                                    size="sm"
                                    onClick={() => navigate('/signin')}
                                >
                                    Sign In
                                </GlassButton>
                            )}
                        </div>

                        {!user && (
                            <div className="hidden lg:flex gap-2">
                                <GlassButton 
                                    variant="outline" 
                                    size="sm"
                                    onClick={() => navigate('/register')}
                                >
                                    Sign Up
                                </GlassButton>
                                <GlassButton 
                                    variant="primary" 
                                    size="sm"
                                    onClick={() => navigate('/signin')}
                                >
                                    Sign In
                                </GlassButton>
                            </div>
                        )}
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="lg:hidden glass-card-default rounded-lg p-4 mb-4"
                    >
                        <nav className="flex flex-col gap-2 mb-4">
                            {navLinks.map((link) => (
                                <NavLink 
                                    key={link.to}
                                    to={link.to}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={({ isActive }) => `
                                        px-4 py-2 rounded-lg transition-all font-medium
                                        ${isActive 
                                            ? 'bg-cyan-500/10 text-cyan-600 dark:bg-cyan-400/10 dark:text-cyan-400' 
                                            : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                                        }
                                    `}
                                >
                                    {link.label}
                                </NavLink>
                            ))}
                        </nav>

                        {user ? (
                            <div className="space-y-2 border-t border-slate-200 dark:border-slate-700 pt-4">
                                {isAdmin && (
                                    <button 
                                        onClick={() => { navigate('/admin'); setIsMenuOpen(false); }}
                                        className="w-full flex items-center gap-2 px-4 py-2 bg-cyan-500/10 text-cyan-600 dark:bg-cyan-400/10 dark:text-cyan-400 rounded-lg font-medium"
                                    >
                                        <FaShieldAlt /> Admin
                                    </button>
                                )}
                                <NavLink to="/addItems" className="w-full block px-4 py-2 bg-cyan-500 text-white rounded-lg font-medium text-center">
                                    + Add Item
                                </NavLink>
                                <button 
                                    onClick={() => { handleSignOut(); setIsMenuOpen(false); }}
                                    className="w-full flex items-center gap-2 px-4 py-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-lg font-medium"
                                >
                                    <FaSignOutAlt /> Sign Out
                                </button>
                            </div>
                        ) : (
                            <div className="flex gap-2">
                                <NavLink to="/register" className="flex-1 px-4 py-2 bg-slate-200 dark:bg-slate-800 text-center rounded-lg font-medium">
                                    Sign Up
                                </NavLink>
                                <NavLink to="/signin" className="flex-1 px-4 py-2 bg-cyan-500 text-white text-center rounded-lg font-medium">
                                    Sign In
                                </NavLink>
                            </div>
                        )}
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Navbar;


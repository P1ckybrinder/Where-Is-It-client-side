import React, { useContext, useState } from 'react';
import AuthContext from '../../context/Authcontext/AuthContext';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import Lottie from 'lottie-react';
import registerAnimation from '../../assets/signup.json';
import { Helmet } from 'react-helmet-async';
import { schoolConfig } from '../../config/schoolConfig';

const Register = () => {
  const { createUser, signInWithGoogle } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value;

    const isValidPassword =
      password.length >= 6 && /[A-Z]/.test(password) && /[a-z]/.test(password);

    if (!isValidPassword) {
      toast.error('Password must be at least 6 characters long, with at least one uppercase and one lowercase letter');
      return;
    }

    try {
      await createUser(email, password, name, photo);
      const newUser = { email, displayName: name, photoURL: photo };

      await fetch('https://b10a11-server-side-noorjahan220.vercel.app/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      toast.success('Successfully registered!');
      navigate('/');
    } catch (error) {
      toast.error("Cannot sign up, please try again.");
    }
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        toast.success('Successfully signed up with Google!');
        navigate('/');
      })
      .catch(() => {
        toast.error("Cannot sign up, please try again.");
      });
  };

  return (
    <div className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center bg-zetech-light p-6 gap-8">
      <Helmet>
        <title>Register - {schoolConfig.name} Lost & Found</title>
      </Helmet>

      {/* Form Section */}
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8 transition duration-300 hover:shadow-xl border border-gray-100">
        <h1 className="text-3xl font-bold text-center mb-2 text-zetech-primary">
          Create Your {schoolConfig.shortName} Account
        </h1>
        <p className="text-center text-gray-500 text-sm mb-6">Join our community today</p>
        
        <form onSubmit={handleSignUp} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-zetech-primary focus:bg-white transition duration-200"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Photo URL</label>
            <input
              type="text"
              name="photo"
              placeholder="https://example.com/photo.jpg"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-zetech-primary focus:bg-white transition duration-200"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-zetech-primary focus:bg-white transition duration-200"
              required
            />
          </div>
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input
              name="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Secure password (6+ chars, uppercase & lowercase)"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-zetech-primary focus:bg-white transition duration-200"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-[2.6rem] text-gray-500 hover:text-zetech-primary transition duration-200"
            >
              {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
            </button>
          </div>
          
          <button className="w-full bg-zetech-primary text-white font-semibold py-3 px-4 rounded-lg shadow-md hover:bg-zetech-accent hover:shadow-lg transition duration-300 mt-6 active:scale-95">
            Sign Up
          </button>
        </form>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or</span>
          </div>
        </div>

        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="btn btn-outline w-full border-2 border-gray-200 text-gray-700 hover:border-zetech-primary hover:bg-zetech-primary hover:text-white transition duration-300 font-medium"
        >
          Sign up with Google
        </button>
        
        <div className="text-center mt-6 text-gray-600 text-sm">
          Already have an account?{' '}
          <Link to="/signin" className="text-zetech-primary hover:text-zetech-accent font-semibold transition duration-200">
            Sign in
          </Link>
        </div>
      </div>

      {/* Animation Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <Lottie animationData={registerAnimation} className="w-full max-w-lg" />
      </div>
    </div>
  );
};

export default Register;

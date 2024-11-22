"use client"
import React, { useState } from 'react'

// Inline import for the Google Font
const FontLink = () => (
    <link
        href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&display=swap"
        rel="stylesheet"
    />
);

const Navbar = () => {
    const [isClick, setIsClick] = useState(false);

    const toggleNavbar = () => {
        setIsClick(!isClick);
    }

    return (
        <>
            {/* Import Font */}
            <FontLink />
            {/* Main Page Background Color */}
            <div style={{ minHeight: '100vh', backgroundColor: '#0E101B' }}>
                {/* Neumorphic Navbar */}
                <nav
                    className="rounded-lg mx-4 mt-6 font-oswald backdrop-blur-lg"
                    style={{
                        backgroundColor: '#110A33',
                        boxShadow: '8px 8px 16px rgba(0, 0, 0, 0.6), -8px -8px 16px rgba(255, 255, 255, 0.05)',
                        fontFamily: '"Oswald", sans-serif'
                    }}
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            {/* Logo on the extreme left */}
                            <div className="flex justify-start">
                                <a href="/" className="text-white text-xl font-semibold">
                                    Logo
                                </a>
                            </div>
                            {/* Desktop Links in the center */}
                            <div className="hidden md:flex items-center space-x-4">
                                <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2 transition duration-200">
                                    Product
                                </a>
                                <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2 transition duration-200">
                                    Documentation
                                </a>
                                <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2 transition duration-200">
                                    Resource
                                </a>
                            </div>
                            {/* Right-aligned Login/Signup and Get Started */}
                            <div className="hidden md:flex items-center space-x-4 justify-end">
                                <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2 transition duration-200">
                                    Login/Signup
                                </a>
                                <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2 transition duration-200">
                                    Get Started
                                </a>
                            </div>
                            {/* Mobile Menu Button */}
                            <div className="md:hidden flex items-center">
                                <button
                                    className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                    onClick={toggleNavbar}
                                >
                                    {isClick ? (
                                        <svg
                                            className="h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            className="h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M4 6h16M4 12h16m-7 6h7"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Mobile Links */}
                    {isClick && (
                        <div className="md:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                <div className="flex flex-col">
                                    <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2 transition duration-200">
                                        Product
                                    </a>
                                    <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2 transition duration-200">
                                        Documentation
                                    </a>
                                    <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2 transition duration-200">
                                        Resource
                                    </a>
                                </div>
                                <div className="flex flex-col mt-2 border-t border-gray-700 pt-2">
                                    <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2 transition duration-200">
                                        Login/Signup
                                    </a>
                                    <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2 transition duration-200">
                                        Get Started
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                </nav>
            </div>
        </>
    );
}

export default Navbar;

"use client"
import React, { useState, useEffect } from 'react';

// Inline import for Google Fonts
const FontLink = () => (
    <link
        href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&display=swap"
        rel="stylesheet"
    />
);

// Remove default body margin
const BodyStyle = () => (
    <style>
        {`
            body {
                margin: 0;
            }
        `}
    </style>
);

const Navbar = () => {
    const [isClick, setIsClick] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Add scroll effect to change navbar style
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleNavbar = () => {
        setIsClick(!isClick);
    }

    return (
        <>
            <FontLink />
            <BodyStyle />

            {/* Main page background color */}
            <div style={{ minHeight: '100vh', backgroundColor: '#0E101B' }}>
                <nav
                    className={`fixed top-0 left-0 right-0 z-10 transition-all duration-300 ease-in-out ${
                        scrolled ? 'bg-[#110A33] shadow-lg' : 'bg-transparent'
                    }`}
                    style={{
                        backdropFilter: scrolled ? 'blur(8px)' : 'none',
                        fontFamily: '"Oswald", sans-serif',
                        padding: '1rem 2rem'
                    }}
                >
                    <div className="max-w-7xl mx-auto flex items-center justify-between">
                        {/* Logo */}
                        <div className="text-white text-2xl font-semibold">
                            <a href="/">Logo</a>
                        </div>

                        {/* Links */}
                        <div className="hidden md:flex space-x-8">
                            <a href="/" className="text-white hover:text-gray-300 transition">Product</a>
                            <a href="/" className="text-white hover:text-gray-300 transition">Documentation</a>
                            <a href="/" className="text-white hover:text-gray-300 transition">Resources</a>
                        </div>

                        {/* Call-to-Action Button */}
                        <div className="hidden md:flex">
                            <a href="/" className="bg-white text-black rounded-lg px-4 py-2 hover:bg-gray-300 transition">Get Started</a>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                className="text-white"
                                onClick={toggleNavbar}
                            >
                                {isClick ? (
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Dropdown */}
                    {isClick && (
                        <div className="md:hidden bg-[#110A33] p-4 mt-2 rounded-lg">
                            <a href="/" className="block text-white py-2 hover:text-gray-300">Product</a>
                            <a href="/" className="block text-white py-2 hover:text-gray-300">Documentation</a>
                            <a href="/" className="block text-white py-2 hover:text-gray-300">Resources</a>
                            <a href="/" className="block text-white py-2 hover:text-gray-300">Get Started</a>
                        </div>
                    )}
                </nav>
            </div>
        </>
    );
}

export default Navbar;

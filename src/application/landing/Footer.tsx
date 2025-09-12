import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Send } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#12182E] text-white py-16">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Newsletter and Resources Cards */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {/* Newsletter Card */}
                    <div className="bg-[#1E2A4A] rounded-[32px] p-8 backdrop-blur-lg bg-opacity-50 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] border border-[rgba(255,255,255,0.18)]">
                        <h3 className="text-3xl font-bold mb-4">Sign Up To Our Newsletter</h3>
                        <p className="text-gray-300 mb-8">
                            Sign up to the newsletter and learn about new resources, new commits, new proposals, and more.
                        </p>
                        <div className="relative w-full">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-8 py-4 rounded-full bg-[#2A3B66] text-white border-0 focus:outline-none focus:ring-2 focus:ring-blue-500 pr-16"
                            />
                            <button className="absolute inset-y-1 right-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full flex items-center gap-2 hover:opacity-90 transition-opacity">
                                <span>Sign Up</span>
                                <Send className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* Resources Card */}
                    <div className="bg-[#1E2A4A] rounded-[32px] p-8 backdrop-blur-lg bg-opacity-50 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] border border-[rgba(255,255,255,0.18)]">
                        <h3 className="text-3xl font-bold mb-4">More Resources</h3>
                        <p className="text-gray-300 mb-8">
                            More videos, more episodes. Discussions between industry leaders in both blockchain and technology, our team and community developers
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="flex items-center gap-2 px-8 py-4 bg-[#2A3B66] rounded-full hover:bg-[#344780] transition-colors">
                                <Youtube className="w-5 h-5" />
                                <span>Youtube</span>
                            </a>
                            <a href="#" className="flex items-center gap-2 px-8 py-4 bg-[#2A3B66] rounded-full hover:bg-[#344780] transition-colors">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M13 12h7v1.5h-7V12zm0-2.5h7V11h-7V9.5zm0 5h7V16h-7v-1.5zM21 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H3V6h18v12z" />
                                </svg>
                                <span>Medium</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer Links */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div>
                        <h3 className="text-xl font-bold mb-6">About Us</h3>
                        <p className="text-gray-300 mb-6">
                            Empowering careers through opportunities, learning, and connections.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                <Facebook className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                <Twitter className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                <Linkedin className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                <Instagram className="w-6 h-6" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Find Jobs</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Post a Job</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Browse Companies</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Career Advice</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-6">Resources</h3>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Help Center</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-6">Community</h3>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Forums</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Events</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Success Stories</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-[#2A3B66] pt-8 text-center text-gray-300">
                    <p>&copy; 2025 Farmvet-Connect. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
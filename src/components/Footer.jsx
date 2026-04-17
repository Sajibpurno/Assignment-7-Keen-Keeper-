import React from 'react';
import { FaFacebookF, FaYoutube, FaTwitter } from 'react-icons/fa'; // react-icons ব্যবহার করলে এগুলো লাগবে

const Footer = () => {
    return (
        <footer className="bg-[#1e4d40] text-white py-12 px-4 ">
            <div className="container mx-auto flex flex-col items-center text-center">
                
                <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                    KeenKeeper
                </h2>

                <p className="max-w-xl text-sm md:text-base opacity-80 mb-8 leading-relaxed">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>

                <div className="mb-10">
                    <p className="text-sm font-semibold mb-4 uppercase tracking-widest opacity-90">
                        Social Links
                    </p>
                    <div className="flex gap-4 justify-center">
                        <a href="#" className="bg-white text-[#1e4d40] p-3 rounded-full hover:bg-gray-200 transition-all">
                            <FaYoutube size={20} />
                        </a>
                        <a href="#" className="bg-white text-[#1e4d40] p-3 rounded-full hover:bg-gray-200 transition-all">
                            <FaFacebookF size={20} />
                        </a>
                        <a href="#" className="bg-white text-[#1e4d40] p-3 rounded-full hover:bg-gray-200 transition-all">
                            <FaTwitter size={20} />
                        </a>
                    </div>
                </div>

                
                <div className="w-full border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-70">
                    <p>© 2026 KeenKeeper. All rights reserved.</p>
                    
                    <div className="flex gap-6">
                        <a href="#" className="hover:underline">Privacy Policy</a>
                        <a href="#" className="hover:underline">Terms of Service</a>
                        <a href="#" className="hover:underline">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
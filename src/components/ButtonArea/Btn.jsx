'use client';
import React from 'react';
import { toast } from 'react-toastify';

const Btn = () => {
    const handleCall = () => {
        toast('Calling friend...');
    };

    const handleText = () => {
        toast('Opening text message...');
    };      

    const handleVideo = () => {
        toast('Starting video call...');
    };
    return (
        <div className="card bg-white p-8 shadow-sm border border-gray-100 rounded-2xl">
                            <h3 className="text-lg font-bold text-[#1e4d40] mb-6">Quick Check-In</h3>
                            <div className="grid grid-cols-3 gap-4">

                                <button className="btn h-auto py-6 bg-gray-50 hover:bg-gray-100 border-none flex flex-col gap-2 rounded-2xl" 
                                onClick={handleCall}>
                                    <span className="text-2xl">📞</span>
                                    <span className="text-gray-600 font-bold text-xs uppercase">Call</span>
                                </button>
                                <button className="btn h-auto py-6 bg-gray-50 hover:bg-gray-100 border-none flex flex-col gap-2 rounded-2xl" 
                                onClick={handleText}>
                                    <span className="text-2xl">💬</span>
                                    <span className="text-gray-600 font-bold text-xs uppercase">Text</span>
                                </button>
                                <button className="btn h-auto py-6 bg-gray-50 hover:bg-gray-100 border-none flex flex-col gap-2 rounded-2xl" 
                                onClick={handleVideo}>
                                    <span className="text-2xl">📹</span>
                                    <span className="text-gray-600 font-bold text-xs uppercase">Video</span>
                                </button>
                            </div>
                        </div>
    );
};

export default Btn;
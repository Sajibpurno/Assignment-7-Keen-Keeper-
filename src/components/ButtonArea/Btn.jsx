'use client';
import { contextData } from '@/context/InteractionContext';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const Btn = ({friend}) => {
    const {interactionData, setInteractionData} = useContext(contextData);
    
    // ১. কল হ্যান্ডলার - এখানে 'Call' লিখে দিচ্ছি
    const handleCall = () => {
        toast.success('Calling friend...📞');
        setInteractionData([...interactionData, { ...friend, interactionType: 'Call' }]);
    };
     
    // ২. টেক্সট হ্যান্ডলার - এখানে 'Text' লিখে দিচ্ছি
    const handleText = () => {
        toast.success('Opening text message...💬');
        setInteractionData([...interactionData, { ...friend, interactionType: 'Text' }]);
    };      

    // ৩. ভিডিও হ্যান্ডলার - এখানে 'Video' লিখে দিচ্ছি
    const handleVideo = () => {
        toast.success('Starting video call...📹');
        setInteractionData([...interactionData, { ...friend, interactionType: 'Video' }]);
    };

    return (
        <div className="card bg-white p-8 shadow-sm border border-gray-100 rounded-2xl">
            <h3 className="text-lg font-bold text-[#1e4d40] mb-6">Quick Check-In</h3>
            <div className="grid grid-cols-3 gap-4">
                <button 
                    className="btn h-auto py-6 bg-gray-50 hover:bg-gray-100 border-none flex flex-col gap-2 rounded-2xl transition-all active:scale-95" 
                    onClick={handleCall}
                >
                    <span className="text-2xl">📞</span>
                    <span className="text-gray-600 font-bold text-xs uppercase">Call</span>
                </button>

                <button 
                    className="btn h-auto py-6 bg-gray-50 hover:bg-gray-100 border-none flex flex-col gap-2 rounded-2xl transition-all active:scale-95" 
                    onClick={handleText}
                >
                    <span className="text-2xl">💬</span>
                    <span className="text-gray-600 font-bold text-xs uppercase">Text</span>
                </button>

                <button 
                    className="btn h-auto py-6 bg-gray-50 hover:bg-gray-100 border-none flex flex-col gap-2 rounded-2xl transition-all active:scale-95" 
                    onClick={handleVideo}
                >
                    <span className="text-2xl">📹</span>
                    <span className="text-gray-600 font-bold text-xs uppercase">Video</span>
                </button>
            </div>
        </div>
    );
};

export default Btn;
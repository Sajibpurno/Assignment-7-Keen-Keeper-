'use client';
import { contextData } from '@/context/InteractionContext';
import React, { useContext } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const TimelineSection = () => {
    const { interactionData } = useContext(contextData);

    
    const iconMap = {
        'Call': '📞',
        'Text': '💬',
        'Video': '📹'
    };

    return (
    <div className="flex flex-col items-center p-4 container mx-auto">
            <h2 className="text-2xl font-bold self-start mb-6">Timeline</h2>
            
       <div className="dropdown w-full max-w-xs self-start">
    
        <div 
            tabIndex={0} 
           role="button"
           className="flex items-center justify-between bg-white p-4 pr-6 shadow-sm border border-gray-100 rounded-xl w-full cursor-pointer hover:border-gray-300 transition-all"
       >
        <span className="text-gray-400">Filter timeline...</span>
        
        
        <FaChevronDown />
    </div>

    {/* ড্রপডাউন মেনু (নিচে যা আসবে) */}
    <ul 
        tabIndex={0} 
        className="dropdown-content z-[1] menu p-2 shadow-xl bg-base-100 rounded-box w-full mt-2 border border-gray-50"
    >
        <li><a>Text</a></li>
        <li><a>Call</a></li>
        <li><a>Video Call</a></li>
    </ul>
</div>
            
            {interactionData.length === 0 ? (
                <p className="text-gray-400 font-bold text-3xl">No history yet.</p>
            ) : (
                [...interactionData].reverse().map((friend, index) => (
                    <div key={index} className="w-full flex flex-col items-center">
                        
                        
                        <div className="w-full flex items-center gap-4 bg-white p-5 shadow-sm border border-gray-100 rounded-2xl">
                            
                            
                            <div className="text-3xl">
                                {iconMap[friend.interactionType] || '🤝'}
                            </div>

                            <div>
                                <h3 className="text-md font-bold leading-tight">
                                    <span className="text-[#346154]">
                                        {friend.interactionType}
                                    </span>
                                    <span className="text-slate-400 font-normal ml-2">
                                        with {friend.name}
                                    </span>
                                </h3>
                                <p className="text-xs text-gray-400 mt-1 uppercase font-bold tracking-wider">
                                    {friend.next_due_date}
                                </p>
                            </div>
                        </div>

                        
                        <div className="w-10 h-[3px] bg-[#f472b6] my-2 rounded-full"></div>
                    </div>
                ))
            )}
        </div>
    );
};

export default TimelineSection;
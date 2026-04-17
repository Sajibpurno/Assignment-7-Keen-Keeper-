'use client';
import { contextData } from '@/context/InteractionContext';
import React, { useContext, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const TimelineSection = () => {
    const { interactionData } = useContext(contextData);

    const [selectedFilter, setSelectedFilter] = useState('All');

    //icon
    const iconMap = {
        'Call': '📞',
        'Text': '💬',
        'Video': '📹'
    };

    const filterData = interactionData.filter(item => {
        if (selectedFilter === 'All') return true;
        return item.interactionType === selectedFilter; 
        /* type mil hole oita show kor  amon */
    });

    return (
        <div className="flex flex-col items-center p-4 container mx-auto">
            <h2 className="text-2xl font-bold self-start mb-6 text-[#1e4d40]">Timeline</h2>
            
            {/* input */}
            <div className="dropdown w-full max-w-xs self-start mb-10">
                <div 
                    tabIndex={0} 
                    role="button"
                    className="flex items-center justify-between bg-white p-4 pr-6 shadow-sm border border-gray-100 rounded-xl w-full cursor-pointer hover:border-gray-300 transition-all"
                >
                    
                    <span className={selectedFilter === 'All' ? "text-gray-400" : "text-slate-700 font-bold"}>
                        {selectedFilter === 'All' ? 'Filter timeline...' : selectedFilter}
                    </span>
                    <FaChevronDown className="text-gray-400 text-xs" />
                </div>

                
                <ul 
                    tabIndex={0} 
                    className="dropdown-content z-[20] menu p-2 shadow-xl bg-base-100 rounded-box w-full mt-2 border border-gray-50"
                >
                    <li><a onClick={() => setSelectedFilter('All')}>All Interactions</a></li>
                    <li><a onClick={() => setSelectedFilter('Text')}>Text</a></li>
                    <li><a onClick={() => setSelectedFilter('Call')}>Call</a></li>
                    <li><a onClick={() => setSelectedFilter('Video')}>Video</a></li>
                </ul>
            </div>
            
            
            {filterData.length === 0 ? (
                <div className="py-20 flex flex-col items-center">
                   <p className="text-gray-300 font-bold text-2xl uppercase tracking-widest">No {selectedFilter !== 'All' ? selectedFilter : ''} History</p>
                </div>
            ) : (
                
                [...filterData].reverse().map((friend, index) => (
                    <div key={index} className="w-full flex flex-col items-center">
                        
                        {/* card */}
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
                                    {friend.date || friend.next_due_date}
                                </p>
                            </div>
                        </div>

                        {/* পিঙ্ক কানেক্টর লাইন */}
                        <div className="w-10 h-[3px] bg-[#f472b6] my-2 rounded-full opacity-60"></div>
                    </div>
                ))
            )}
        </div>
    );
};

export default TimelineSection;
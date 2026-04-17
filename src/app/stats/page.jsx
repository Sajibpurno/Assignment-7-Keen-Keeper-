'use client'
import { contextData } from '@/context/InteractionContext';
import React, { useContext } from 'react';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from 'recharts';

const Stats = () => {
    const { interactionData } = useContext(contextData)

    const statsObj = interactionData.reduce((acc, curr) => {
        acc[curr.interactionType] = (acc[curr.interactionType] || 0) + 1;
        return acc;
    }, {});

    const chartData = [
        { name: 'Text', value: statsObj['Text'] || 0, color: '#A855F7' }, // Purple
        { name: 'Call', value: statsObj['Call'] || 0, color: '#1E4D40' }, // Dark Green
        { name: 'Video', value: statsObj['Video'] || 0, color: '#34A853' } // Green
    ];
    return (
        <div className="container mx-auto px-4 min-h-[80vh] flex flex-col items-center justify-center">
    
    <div className="w-full max-w-4xl">
        
        <h2 className='text-4xl font-bold mb-10 text-center md:text-left'>
            Friendship Analytics
        </h2>

        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 w-full">
            <p className="text-[#1E4D40] font-semibold mb-6">By Interaction Type</p>
            
            
            <div className="h-90 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        
                        <Pie
                            data={chartData}
                            innerRadius="70%"
                            outerRadius="90%"
                            paddingAngle={8}
                            cornerRadius={40}
                            dataKey="value"
                        >
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                            ))}
                        </Pie>
                        <Legend 
                            verticalAlign="bottom" 
                            align="center" 
                            iconType="circle"
                            iconSize={10}
                            formatter={(value) => <span className="text-gray-500 font-medium ml-1">{value}</span>}
                        />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    </div>
</div>
    );
};

export default Stats;
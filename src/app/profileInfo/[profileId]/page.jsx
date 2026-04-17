'use client';
import Btn from '@/components/ButtonArea/Btn';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

const ProfileDetails = () => {
    const { profileId } = useParams();
    const [friend, setFriend] = useState(null);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        fetch('/friends.json')
            .then(res => res.json())
            .then(friends => {
                const found = friends.find(f => f.id === parseInt(profileId));
                if (!found) setNotFound(true);
                else setFriend(found);
            });
    }, [profileId]); 

    if (notFound) return <div className="p-10 text-center text-red-500 font-bold font-sans">Friend not found!</div>;
    if (!friend) return <div className="p-10 text-center">Loading...</div>;

    return (
        <div className="bg-[#f8f9fa] min-h-screen py-12 px-4 font-sans">
            <div className="container mx-auto max-w-5xl">
                
                {/* মেইন গ্রিড লেআউট */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    
                    {/* বাম পাশের কলাম (প্রোফাইল ও অ্যাকশন বাটন) */}
                    <div className="md:col-span-4 space-y-4">
                        {/* মেইন প্রোফাইল কার্ড */}
                        <div className="card bg-white shadow-sm border border-gray-100 p-8 text-center rounded-2xl">
                            <div className="avatar justify-center mb-4">
                                <div className="w-24 h-24 rounded-full ring ring-gray-100 ring-offset-base-100 ring-offset-2">
                                    <img src={friend.picture} alt={friend.name} className="object-cover" />
                                </div>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">{friend.name}</h2>
                            
                            <div className="flex flex-col items-center gap-2 mb-4">
                                <span className={`badge border-none font-bold px-4 py-3 rounded-full text-[10px] ${
                                    friend.status === 'on-track' ? 'bg-[#d1fae5] text-[#065f46]' :
                                    friend.status === 'almost due' ? 'bg-[#fef3c7] text-[#92400e]' :
                                    'bg-[#fee2e2] text-[#991b1b]'
                                }`}>
                                    {friend.status.toUpperCase()}
                                </span>
                                <span className="badge bg-[#eaf4ed] text-[#1e4d40] border-none font-bold px-4 py-3 rounded-full text-[10px]">
                                    {friend.tags[0]?.toUpperCase() || 'FRIEND'}
                                </span>
                            </div>

                            <p className="text-gray-500 italic text-sm mb-1">{friend.bio}</p>
                            <p className="text-gray-400 text-xs italic">Preferred: email</p>
                        </div>

                        {/* অ্যাকশন বাটন লিস্ট (Snooze, Archive, Delete) */}
                        <div className="space-y-2">
                            <button className="btn btn-block bg-white hover:bg-gray-50 border-gray-100 text-gray-700 normal-case shadow-sm rounded-xl">
                                🔔 Snooze 2 Weeks
                            </button>
                            <button className="btn btn-block bg-white hover:bg-gray-50 border-gray-100 text-gray-700 normal-case shadow-sm rounded-xl">
                                📁 Archive
                            </button>
                            <button className="btn btn-block bg-white hover:bg-red-50 border-gray-100 text-red-500 normal-case shadow-sm rounded-xl">
                                🗑️ Delete
                            </button>
                        </div>
                    </div>

                    {/* ডান পাশের কলাম (স্ট্যাটাস ও চেক-ইন) */}
                    <div className="md:col-span-8 space-y-6">
                        
                        {/* ৩টি ছোট স্ট্যাটাস কার্ড */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="card bg-white p-6 shadow-sm border border-gray-100 text-center rounded-2xl">
                                <h4 className="text-4xl font-bold text-[#1e4d40] mb-1">{friend.days_since_contact}</h4>
                                <p className="text-xs text-gray-400 font-medium">Days Since Contact</p>
                            </div>
                            <div className="card bg-white p-6 shadow-sm border border-gray-100 text-center rounded-2xl">
                                <h4 className="text-4xl font-bold text-[#1e4d40] mb-1">{friend.goal}</h4>
                                <p className="text-xs text-gray-400 font-medium">Goal (Days)</p>
                            </div>
                            <div className="card bg-white p-6 shadow-sm border border-gray-100 text-center rounded-2xl">
                                <h4 className="text-3xl font-bold text-[#1e4d40] mb-1">{friend.next_due_date || 'Feb 27, 2026'}</h4>
                                <p className="text-xs text-gray-400 font-medium">Next Due</p>
                            </div>
                        </div>

                        {/* Relationship Goal সেকশন */}
                        <div className="card bg-white p-8 shadow-sm border border-gray-100 rounded-2xl relative">
                            <button className="btn btn-ghost btn-xs absolute right-6 top-6 border border-gray-200 text-gray-500">Edit</button>
                            <h3 className="text-lg font-bold text-[#1e4d40] mb-4">Relationship Goal</h3>
                            <p className="text-gray-500">Connect every <span className="font-bold text-gray-800">{friend.goal} days</span></p>
                        </div>

                        {/* Quick Check-In সেকশন */}

                        <Btn friend={friend} />     

                    </div>
                </div>
            </div>
            <Link className='flex justify-center' href="/" >
                <button className='btn btn-sm mt-4 '>←Back</button>
            </Link>
        </div>
    );
};

export default ProfileDetails;
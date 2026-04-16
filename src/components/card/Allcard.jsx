import Link from 'next/link'; // Next.js এর Link ইমপোর্ট করো
import React from 'react';

const Allcard = ({ friend }) => {
    return (
        // মেইন div টাকে Link বানিয়ে ফেললাম এবং href সেট করলাম
        <Link 
            href={`/profileInfo/${friend.id}`} 
            className="card bg-white rounded-3xl shadow-sm border border-gray-100 group transition hover:shadow-lg cursor-pointer block overflow-hidden"
        >
              <div className="card-body p-8 items-center text-center">
                
                {/* প্রোফাইল ইমেজ সেকশন */}
                <div className="avatar mb-6">
                  <div className={`w-24 h-24 rounded-full border-4 ${
                        friend.status === 'on-track' ? 'border-[#eaf4ed]' :
                        friend.status === 'almost due' ? 'border-[#fef2e6]' :
                        'border-[#feebea]'
                    }`}>
                    <img 
                      src={friend.picture} 
                      alt={friend.name}
                      className="object-cover" 
                    />
                  </div>
                </div>

                {/* নাম ও বেসিক ইনফো */}
                <h3 className="card-title text-xl font-bold text-[#111827] truncate mb-1 group-hover:text-indigo-600 transition-colors">
                  {friend.name}
                </h3>
                <p className="text-xs text-gray-500 mb-6 truncate max-w-full">
                  Last: <span className='font-medium text-black/80'>{friend.days_since_contact} days ago</span> • Goal: <span className='font-medium text-black/80'>{friend.goal}d</span>
                </p>

                {/* ট্যাগ সেকশন */}
                <div className="flex flex-wrap gap-2.5 mb-1 justify-center">
                  {friend.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="badge bg-[#e8f3f0] text-[#1e4d40] text-[10px] font-semibold border-none rounded-full px-3 py-1.5"
                    >
                      {tag.toUpperCase()}
                    </span>
                  ))}
                </div>

                {/* স্ট্যাটাস ব্যাজ */}
                <div className="card-actions mt-auto pt-6">
                  <div className={`badge text-[10px] font-bold border-none rounded-full px-4 py-2 ${
                    friend.status === 'on-track' ? 'bg-[#d1fae5] text-[#065f46]' :
                    friend.status === 'almost due' ? 'bg-[#fef3c7] text-[#92400e]' :
                    'bg-[#fee2e2] text-[#991b1b]'
                  }`}>
                    {friend.status.toUpperCase()}
                  </div>
                </div>
              </div>
        </Link>
    );
};

export default Allcard;
import React from 'react';
import Allcard from './card/Allcard';

const ProfilesHome = async () => {
  const res = await fetch('http://localhost:3000/friends.json', { cache: 'force-cache' });
  const friends = await res.json();

  //status calculation
  const totalFriends = friends.length;
  const onTrackCount = friends.filter(f => f.status === 'on-track').length;
  const overdueCount = friends.filter(f => f.status === 'overdue').length;

  return (
    <div className="bg-[#f8f9fa] min-h-screen">
      <div className="container mx-auto px-4 py-12 md:px-10">
        
        {/* উপরের স্ট্যাটাস সেকশন */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          {/* Total Friends */}
          <div className="card bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center transition hover:shadow-md">
            <h2 className="text-5xl font-extrabold text-[#111827] mb-2">{totalFriends}</h2>
            <p className="text-sm font-medium text-gray-500">Total Friends</p>
          </div>
          
          {/* On Track */}
          <div className="card bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center transition hover:shadow-md">
            <h2 className="text-5xl font-extrabold text-[#1e4d40] mb-2">{onTrackCount}</h2>
            <p className="text-sm font-medium text-gray-500">On Track</p>
          </div>
          
          {/* Need Attention (Almost Due) */}
          <div className="card bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center transition hover:shadow-md">
            <h2 className="text-5xl font-extrabold text-[#92400e] mb-2">{overdueCount}</h2>
            <p className="text-sm font-medium text-gray-500">Need Attention</p>
          </div>
          
          {/* Interactions */}
          <div className="card bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center transition hover:shadow-md">
            <h2 className="text-5xl font-extrabold text-black/90 mb-2">12</h2>
            <p className="text-sm font-medium text-gray-500">Interactions This Month</p>
          </div>
        </div>

        {/* friend section */}
        <div className="mb-8">
            <h1 className="text-3xl font-bold text-[#1a202c] mb-1">Your Friends</h1>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
          
          {
          friends.map((friend) => (
            <Allcard key={friend.id} friend={friend} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default ProfilesHome;
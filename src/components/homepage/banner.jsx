const Banner = () => {
  return (
    <div className="bg-[#f8f9fa] py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#1a202c] mb-4">
          Friends to keep close in your life
        </h1>
        
        {/* Subtitle/Description */}
        <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto mb-8 leading-relaxed">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>
        
        {/* Add Friend Button */}
        <button className="btn bg-[#1e4d40] hover:bg-[#2a6353] text-white border-none px-8">
          + Add a Friend
        </button>
      </div>
    </div>
  );
};

export default Banner;
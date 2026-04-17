'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome } from "react-icons/fa";
import { RiTimeLine } from "react-icons/ri";
import { FaChartLine } from "react-icons/fa6";

const Navbar = () => {
  const pathName = usePathname()

  const links = <>
    <li>
      <Link 
        className={`${
          pathName === '/' 
          ? '!bg-[#1e4d40] !text-white focus:!bg-[#1e4d40] focus:!text-white active:!bg-[#1e4d40] active:!text-white' 
          : 'text-gray-500 hover:text-[#1e4d40] hover:bg-transparent'
        } font-medium px-4 py-2 rounded-lg transition-colors`} 
        href="/"
      >
      <FaHome/>Home
      </Link>
    </li>
    <li>
      <Link 
        className={`${
          pathName === '/timeline' 
          ? '!bg-[#1e4d40] !text-white focus:!bg-[#1e4d40] focus:!text-white active:!bg-[#1e4d40] active:!text-white' 
          : 'text-gray-500 hover:text-[#1e4d40] hover:bg-transparent'
        } font-medium px-4 py-2 rounded-lg transition-colors`} 
        href="/timeline"
      >
        <RiTimeLine/>Timeline
      </Link>
    </li>
    <li>
      <Link 
        className={`${
          pathName === '/stats' 
          ? '!bg-[#1e4d40] !text-white focus:!bg-[#1e4d40] focus:!text-white active:!bg-[#1e4d40] active:!text-white' 
          : 'text-gray-500 hover:text-[#1e4d40] hover:bg-transparent'
        } font-medium px-4 py-2 rounded-lg transition-colors`} 
        href="/stats"
      >
        <FaChartLine/>Stats
      </Link>
    </li>
  </>

  return (
    <nav className="shadow-sm bg-white border-b border-gray-100 sticky top-0 z-50 w-full">
      <div className="navbar px-4 md:px-8 container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <Link href="/" className="text-xl font-bold tracking-tight">
            <span className="text-black">Keen</span>
            <span className="text-[#406b5f]">Keeper</span>
          </Link>
        </div>

        <div className="navbar-end hidden lg:flex">
          {/* DaisyUI এর ডিফল্ট ডার্ক ইফেক্ট অফ করার জন্য এখানে classes বাড়ানো হয়েছে */}
          <ul className="menu menu-horizontal gap-2 px-1 items-center">
            {links}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
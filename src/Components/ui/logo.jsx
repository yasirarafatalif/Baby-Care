import Link from "next/link";
import { HiSearch } from "react-icons/hi"; // Search icon use kora hoyeche 'Cari' context bujhate

const Logo = () => {
  return (
    <Link href="/" className="group flex items-center gap-2.5">
      {/* Visual Icon */}
      <div className="relative">
        <div className="flex items-center justify-center w-11 h-11 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl group-hover:shadow-2xl group-hover:shadow-blue-500/40 transition-all duration-300 transform group-hover:-translate-y-0.5">
          <HiSearch className="text-white text-2xl group-hover:scale-110 transition-transform duration-300" />
        </div>
        
        {/* Abstract Background Decoration */}
        <div className="absolute -z-10 -bottom-1 -right-1 w-11 h-11 bg-blue-200 dark:bg-blue-900/40 rounded-2xl group-hover:bottom-0 group-hover:right-0 transition-all duration-300"></div>
      </div>

      {/* Text Logo */}
      <div className="flex flex-col">
        <h1 className="text-2xl font-black tracking-tight text-gray-900 dark:text-white leading-tight">
          Cari<span className="text-blue-600">.io</span>
        </h1>
        <div className="flex items-center gap-1">
          <span className="h-[2px] w-4 bg-blue-500 rounded-full"></span>
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
            Marketplace
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
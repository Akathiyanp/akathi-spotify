import React from 'react';
import { Home, Search, Library } from 'lucide-react';

export default function MobileNav() {
  return (
    <nav className="md:hidden fixed bottom-[90px] left-0 right-0 bg-gradient-to-t from-black to-black/95 px-2 py-2">
      <div className="flex justify-around items-center">
        <button className="flex flex-col items-center p-2 text-gray-400 hover:text-white">
          <Home className="h-6 w-6" />
          <span className="text-xs mt-1">Home</span>
        </button>
        <button className="flex flex-col items-center p-2 text-gray-400 hover:text-white">
          <Search className="h-6 w-6" />
          <span className="text-xs mt-1">Search</span>
        </button>
        <button className="flex flex-col items-center p-2 text-gray-400 hover:text-white">
          <Library className="h-6 w-6" />
          <span className="text-xs mt-1">Library</span>
        </button>
      </div>
    </nav>
  );
}
import React from "react";
import {
  Play,
  SkipBack,
  SkipForward,
  Repeat,
  Shuffle,
  Volume2,
} from "lucide-react";

export default function NowPlaying() {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-24 bg-[#181818] border-t border-[#282828] px-4 flex items-center justify-between">
      <div className="flex items-center space-x-4 flex-1 min-w-0 md:flex-initial">
        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=640&q=80"
          alt="Album cover"
          className="h-14 w-14 rounded flex-shrink-0"
        />
        <div className="min-w-0">
          <h4 className="text-white text-sm truncate">Song Title</h4>
          <p className="text-gray-400 text-xs truncate">Artist Name</p>
        </div>
      </div>

      <div className="hidden md:flex flex-col items-center max-w-[512px] w-full px-4">
        <div className="flex items-center space-x-6">
          <button className="text-gray-400 hover:text-white transition">
            <Shuffle className="h-5 w-5" />
          </button>
          <button className="text-gray-400 hover:text-white transition">
            <SkipBack className="h-5 w-5" />
          </button>
          <button className="bg-white rounded-full p-2 hover:scale-105 transition">
            <Play className="h-5 w-5 text-black" fill="black" />
          </button>
          <button className="text-gray-400 hover:text-white transition">
            <SkipForward className="h-5 w-5" />
          </button>
          <button className="text-gray-400 hover:text-white transition">
            <Repeat className="h-5 w-5" />
          </button>
        </div>
        <div className="w-full mt-2">
          <div className="bg-gray-500 rounded-full h-1 w-full">
            <div className="bg-white rounded-full h-1 w-1/3"></div>
          </div>
        </div>
      </div>

      <div className="hidden md:flex items-center space-x-4">
        <Volume2 className="h-5 w-5 text-gray-400" />
        <div className="w-24">
          <div className="bg-gray-500 rounded-full h-1 w-full">
            <div className="bg-white rounded-full h-1 w-2/3"></div>
          </div>
        </div>
      </div>

      {/* Mobile Play Controls */}
      <div className="flex md:hidden items-center space-x-4">
        <button className="text-gray-400 hover:text-white transition">
          <SkipBack className="h-5 w-5" />
        </button>
        <button className="bg-white rounded-full p-2">
          <Play className="h-5 w-5 text-black" fill="black" />
        </button>
        <button className="text-gray-400 hover:text-white transition">
          <SkipForward className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

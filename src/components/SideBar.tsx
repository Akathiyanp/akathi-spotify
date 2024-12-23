import { X, Home, Search, Library, Plus, Heart } from "lucide-react";

interface SidebarProps {
  onClose?: () => void;
}
export default function SideBar({ onClose }: SidebarProps) {
  return (
    <aside className="w-64 bg-black h-screen p-6 relative">
      {onClose && (
        <button
          className="absolute top-4 right-4 text-white md:hidden"
          onClick={onClose}
        >
          <X className="h-6 w-6" />
        </button>
      )}
      <div className="text-white mb-8">
        <svg
          width="64px"
          height="64px"
          viewBox="-19.2 -19.2 230.40 230.40"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0">
            <rect
              x="-19.2"
              y="-19.2"
              width="230.40"
              height="230.40"
              rx="115.2"
              fill="#ffffff"
              strokeWidth="0"
            ></rect>
          </g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              fill="#000000"
              d="M24.419 57.512a6 6 0 1 0 3.162 11.576L24.42 57.512Zm5.706 34.312a6 6 0 0 0 3.421 11.502l-3.421-11.502Zm5.66 34.469a6 6 0 1 0 3.817 11.377l-3.817-11.377Zm105.947 19.99a6.001 6.001 0 0 0 5.69-10.566l-5.69 10.566Zm14.797-31.392a6 6 0 1 0 5.53-10.65l-5.53 10.65Zm14.758-31.384a6 6 0 0 0 5.426-10.704l-5.426 10.704ZM27.581 69.087C44.481 64.472 62.304 62 80.726 62V50c-19.5 0-38.385 2.615-56.307 7.512l3.162 11.576Zm5.965 34.239c14.92-4.438 30.759-6.828 47.18-6.828v-12c-17.59 0-34.582 2.56-50.602 7.326l3.422 11.502Zm6.056 34.344c12.886-4.324 26.718-6.674 41.124-6.674v-12c-15.718 0-30.839 2.565-44.941 7.297l3.817 11.377Zm41.124-6.674c22.134 0 42.92 5.547 61.006 15.287l5.69-10.566c-19.799-10.662-42.536-16.721-66.696-16.721v12Zm0-34.498c27.404 0 53.198 6.655 75.803 18.393l5.53-10.65c-24.28-12.607-51.967-19.743-81.333-19.743v12Zm0-34.498c32.665 0 63.454 7.767 90.561 21.507l5.426-10.704C147.956 58.228 115.311 50 80.726 50v12Z"
            ></path>
          </g>
        </svg>
      </div>

      <nav className="space-y-6">
        <div className="space-y-3">
          <div className="flex items-center space-x-4 text-gray-400 hover:text-white transition">
            <Home className="h-6 w-6" />
            <span className="font-semibold">Home</span>
          </div>
          <div className="flex items-center space-x-4 text-gray-400 hover:text-white transition">
            <Search className="h-6 w-6" />
            <span className="font-semibold">Search</span>
          </div>
          <div className="flex items-center space-x-4 text-gray-400 hover:text-white transition">
            <Library className="h-6 w-6" />
            <span className="font-semibold">Your Library</span>
          </div>
        </div>

        <div className="space-y-3 pt-6 border-t border-gray-800">
          <div className="flex items-center space-x-4 text-gray-400 hover:text-white transition">
            <div className="bg-gray-400 hover:bg-white transition p-1 rounded-sm">
              <Plus className="h-4 w-4" />
            </div>
            <span className="font-semibold">Create Playlist</span>
          </div>
          <div className="flex items-center space-x-4 text-gray-400 hover:text-white transition">
            <div
              className="bg-gradient-to-br from-purple-700 to-blue-300 p-1
                rounded-sm"
            >
              <Heart className="h-4 w-4 text-white" />
            </div>
            <span className="font-semibold">Liked Songs</span>
          </div>
        </div>
      </nav>
    </aside>
  );
}

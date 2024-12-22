import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import MainContent from "./components/MainContent";
import MobileNav from "./components/MobileNav";
import React, { useState } from "react";
import NowPlaying from "./components/NowPlaying";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar with mobile overlay */}
        <div
          className={`${
            isSidebarOpen ? "block" : "hidden"
          } md:block fixed md:relative z-30 w-64`}
        >
          <SideBar onClose={() => setIsSidebarOpen(false)} />
        </div>

        {/* Backdrop */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
        <div className="flex-1 flex flex-col w-full">
          <TopBar onMenuClick={() => setIsSidebarOpen(true)} />
          <MainContent />
        </div>
      </div>

      <NowPlaying />
      <MobileNav />
    </div>
  );
}

export default App;

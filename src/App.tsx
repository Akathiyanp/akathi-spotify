import TopBar from "./components/TopBar";
import SideBar from "./components/sidebar";
import MainContent from "./components/MainContent";
import {useState} from "react"
function App() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  return (
    <>
      <div className="h-screen flex flex-col">
        <div className="flex-1 flex overflow-hidden">
          {/* Sidebar with mobile overlay */}
          <div
            className={`${
              isSideBarOpen ? "block" : "hidden"
            }md:block fixed md:relative z-30 w-64`}
          >
            <SideBar onClose={() => setIsSideBarOpen(false)} />
          </div>
        </div>
        {/* Backdrop */}
        {isSideBarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
            onClick={() => setIsSideBarOpen(true)}
          />
        )}
      </div>
      <div className="flex-1 flex flex-col w-full">
        
        <TopBar onMenuClick={() => setIsSideBarOpen(true)} />
        <MainContent/>      </div>
        
    </>
  );
}

export default App;

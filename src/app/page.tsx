"use client";
// app/page.tsx
// app/page.tsx
import { useState } from 'react';
import { FiSettings } from 'react-icons/fi'; // Import the Settings icon from react-icons
import { VisionContainer } from "@/components/VisionContainer";
import { ChatContainer } from "@/components/ChatContainer";
import { ControlContainer } from "@/components/control/ControlContainer";
import { useControlContext } from "@/providers/ControlContext";

export default function Home() {
  const { selectedModel } = useControlContext();
  const [isSidebarVisible, setSidebarVisibility] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisibility(!isSidebarVisible);
  };

  return (
    <div className="flex flex-col items-center justify-center max-w-screen-lg mx-auto">
      {/* Navbar */}
      <nav className="p-1 w-full flex items-center justify-between">
        <h1 className="text-white text-md ml-2 text-[#548dd9] font-bold">iefan's ai</h1>
        <button
          className="text-white p-2 text-md cursor-pointer"
          onClick={toggleSidebar}
        >
          <FiSettings size={20} /> {/* Use the Settings icon from react-icons */}
        </button>
      </nav>

      {/* Main Content */}
      <main className="p-2 w-full">
        <div className={`relative md:col-span-3 h-[95vh] ${isSidebarVisible ? 'block' : 'hidden'}`}>
          <ControlContainer />
        </div>
        <div className={`md:col-span-9 ${isSidebarVisible ? 'hidden' : 'block'}`}>
          {selectedModel === "gemini-pro" ? (
            <ChatContainer />
          ) : (
            <VisionContainer />
          )}
        </div>
      </main>
    </div>
  );
}

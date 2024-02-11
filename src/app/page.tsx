"use client";
// app/page.tsx
// app/page.tsx
import { useState } from 'react';
import { FiSettings } from 'react-icons/fi'; // Import the Settings icon from react-icons
import { VisionContainer } from "@/components/VisionContainer";
import { ChatContainer } from "@/components/ChatContainer";
import { ControlContainer } from "@/components/control/ControlContainer";
import { useControlContext } from "@/providers/ControlContext";
import { Button } from "../components/ui/button";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"


export default function Home() {
  const { selectedModel } = useControlContext();
  const [isSidebarVisible, setSidebarVisibility] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisibility(!isSidebarVisible);
  };

  return (
    <div className="flex flex-col items-center h-full justify-center max-w-screen-lg max-h-screen mx-auto">
      {/* Navbar */}
      <nav className="p-1 w-full flex items-center justify-between">
        <h1 className="text-white text-md ml-2 font-bold">WebCore Ai</h1>
       

        <div className="text-white pt-2 pr-2 text-md cursor-pointer">
        <Drawer>
  <DrawerTrigger><FiSettings size={20} /></DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <ControlContainer />
    </DrawerHeader>
    <DrawerFooter>
      <DrawerClose>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>
</div>

        
      </nav>

      {/* Main Content */}
      <main className="p-1 w-full h-screen">
   
        <div className={`md:col-span-9 h-full ${isSidebarVisible ? 'hidden' : 'block'}`}>
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

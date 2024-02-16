"use client";
// app/page.tsx
import React, { useState } from "react";
import { FiSettings } from "react-icons/fi";
import { useControlContext } from "@/providers/ControlContext";
import { VisionContainer } from "@/components/VisionContainer";
import { ChatContainer } from "@/components/ChatContainer";
import { ControlContainer } from "@/components/control/ControlContainer";
import { Button } from "../components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";

export default function Home() {
  // State and context
  const { selectedModel } = useControlContext();
  const [isSidebarVisible, setSidebarVisibility] = useState(false);

  // Toggle sidebar visibility
  const toggleSidebarVisibility = () => {
    setSidebarVisibility(!isSidebarVisible);
  };

  // Render content based on the selected model
  const renderContent = () => {
    return selectedModel === "gemini-pro" ? (
      <ChatContainer />
    ) : (
      <VisionContainer />
    );
  };

  return (
    <div className="flex flex-col items-center justify-center max-w-screen-lg h-full mx-auto">
      {/* Navbar */}
      <nav className="p-1 w-full flex items-center justify-between">
        <h1 className="text-white text-md ml-2 font-bold">WebCore Ai</h1>

        <div className="text-white pt-2 pr-2 text-md cursor-pointer">
          {/* Settings Drawer */}
          <Drawer>
            <DrawerTrigger>
              <FiSettings size={20} />
            </DrawerTrigger>
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
        <div
          className={`md:col-span-9 h-[100%] ${
            isSidebarVisible ? "hidden" : "block"
          }`}
        >
          {renderContent()}
        </div>
      </main>
    </div>
  );
}

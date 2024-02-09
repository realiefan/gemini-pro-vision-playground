import { useState } from 'react';
import { VisionContainer } from '@/components/VisionContainer';
import { ChatContainer } from '@/components/ChatContainer';
import { ControlContainer } from '@/components/control/ControlContainer';
import { useControlContext } from '@/providers/ControlContext';

export default function Home() {
  const [showControl, setShowControl] = useState(false);
  const { selectedModel } = useControlContext();

  return (
    <main className="grid md:grid-cols-12 max-h-screen md:h-screen max-w-6xl m-auto gap-4 p-2 md:p-4 my-12 md:my-0 relative">
      <button
        onClick={() => setShowControl(!showControl)}
        className="absolute top-0 left-0 p-2 cursor-pointer"
      >
        Toggle Control
      </button>
      <div className={`md:col-span-3 h-[95vh] ${showControl ? '' : 'hidden'}`}>
        <ControlContainer />
      </div>
      <div className="md:col-span-9">
        {selectedModel === 'gemini-pro' ? (
          <ChatContainer />
        ) : (
          <VisionContainer />
        )}
      </div>
    </main>
  );
}

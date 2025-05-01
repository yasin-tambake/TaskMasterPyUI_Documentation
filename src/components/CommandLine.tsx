
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, Play } from 'lucide-react';

type CommandLineProps = {
  commandExample: string;
  output: string[];
};

const CommandLine: React.FC<CommandLineProps> = ({ commandExample, output }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [currentLines, setCurrentLines] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    if (isRunning && currentIndex < output.length) {
      const timer = setTimeout(() => {
        setCurrentLines(prev => [...prev, output[currentIndex]]);
        setCurrentIndex(currentIndex + 1);
      }, 150);
      
      return () => clearTimeout(timer);
    } else if (isRunning && currentIndex >= output.length) {
      setIsRunning(false);
    }
  }, [isRunning, currentIndex, output]);
  
  const handleRun = () => {
    setIsRunning(true);
    setCurrentLines([commandExample]);
    setCurrentIndex(0);
  };

  return (
    <div className="bg-black rounded-lg overflow-hidden border border-gray-800 shadow-xl">
      <div className="flex items-center gap-2 px-4 py-2 bg-gray-900">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
        </div>
        <p className="text-gray-400 text-xs flex-1 text-center">TaskMasterPy Terminal</p>
      </div>
      <div className="p-4 font-mono text-sm text-gray-300 h-64 overflow-y-auto bg-black">
        {isRunning ? (
          <>
            {currentLines.map((line, index) => (
              <div key={index} className={`mb-1 ${index === 0 ? 'text-green-400' : ''}`}>
                {index === 0 ? <><ChevronRight className="inline h-3.5 w-3.5 mr-1" /> {line}</> : line}
              </div>
            ))}
            {currentIndex < output.length && <div className="h-4 w-2 bg-gray-300 inline-block animate-pulse"></div>}
          </>
        ) : (
          <div className="flex flex-col h-full">
            <div className="flex-grow flex items-center justify-center">
              <Button 
                variant="ghost" 
                className="text-green-400 hover:text-green-300 hover:bg-gray-800 flex gap-2"
                onClick={handleRun}
              >
                <Play className="h-4 w-4" />
                Click to run command: {commandExample}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommandLine;

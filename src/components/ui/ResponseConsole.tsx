import React from 'react';

interface ResponseConsoleProps {
  data: any;
  onClose: () => void;
}

export default function ResponseConsole({ data, onClose }: ResponseConsoleProps) {
  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-lg w-full bg-gray-900 border border-gray-700 rounded-lg shadow-lg p-4 text-xs text-gray-100">
      <div className="flex items-center justify-between mb-2">
        <span className="font-bold text-green-400">Response Debug Console</span>
        <button onClick={onClose} className="text-gray-400 hover:text-red-400 text-lg font-bold">×</button>
      </div>
      <pre className="overflow-auto whitespace-pre-wrap max-h-72 text-xs bg-gray-800 rounded p-2 border border-gray-800">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}

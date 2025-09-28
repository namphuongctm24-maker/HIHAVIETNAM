import React, { useState } from 'react';

interface StartScreenProps {
  onStart: (name: string) => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  const [name, setName] = useState('');

  const handleStart = () => {
    if (name.trim()) {
      onStart(name.trim());
    }
  };
  
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleStart();
    }
  };

  return (
    <div className="text-center bg-black/40 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-red-500/50 flex flex-col items-center animate-fade-in">
      <h1 className="text-4xl md:text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-red-500">
        Lịch Sử Việt Nam Phổ thông
      </h1>
      <p className="text-lg text-gray-300 mb-4 max-w-lg">
        Bạn biết bao nhiêu về lịch sử hào hùng của dân tộc? Hãy cùng thử sức!
      </p>
       <p className="text-md text-yellow-300 mb-6 font-semibold">
        Đề thi gồm 30 câu hỏi ngẫu nhiên. Bạn có 15 phút để hoàn thành.
      </p>
      <div className="w-full max-w-sm mb-6">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Nhập tên của bạn"
          className="w-full px-4 py-3 bg-gray-800/60 border-2 border-gray-600 rounded-lg text-white text-center text-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors"
        />
      </div>
      <button
        onClick={handleStart}
        disabled={!name.trim()}
        className="px-10 py-4 bg-gradient-to-r from-red-600 to-yellow-500 text-white font-bold text-xl rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
      >
        <i className="fas fa-play mr-2"></i> Bắt đầu
      </button>
    </div>
  );
};

export default StartScreen;
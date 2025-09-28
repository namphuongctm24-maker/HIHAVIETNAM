import React from 'react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="text-center bg-black/40 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-red-500/50 flex flex-col items-center animate-fade-in">
      <h2 className="text-3xl font-bold mb-4 text-yellow-300">Đang chuẩn bị...</h2>
      <p className="text-lg text-gray-300 mb-6 max-w-sm">
        AI đang tìm kiếm và sáng tạo hình ảnh minh họa. Quá trình này có thể mất một chút thời gian.
      </p>
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-yellow-500"></div>
    </div>
  );
};

export default LoadingScreen;
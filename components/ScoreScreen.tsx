import React from 'react';
import { HighScore } from '../types';

interface ScoreScreenProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
  timeUp: boolean;
  highScores: HighScore[];
  playerName: string;
  timeTaken: number;
}

const getFeedback = (score: number, total: number) => {
    if (total === 0) return { message: "Cần cố gắng hơn!", emoji: "📚", color: "text-red-400" };
    const percentage = (score / total) * 100;
    if (percentage === 100) return { message: "Tuyệt vời! Am hiểu lịch sử!", emoji: "👑", color: "text-yellow-400" };
    if (percentage >= 80) return { message: "Xuất sắc!", emoji: "🏆", color: "text-green-400" };
    if (percentage >= 50) return { message: "Rất tốt!", emoji: "👍", color: "text-blue-400" };
    return { message: "Cần cố gắng hơn!", emoji: "📚", color: "text-red-400" };
}

const formatTime = (totalSeconds: number) => {
    const correctedSeconds = totalSeconds < 0 ? 0 : totalSeconds;
    const minutes = Math.floor(correctedSeconds / 60);
    const seconds = correctedSeconds % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
};

const ScoreScreen: React.FC<ScoreScreenProps> = ({ score, totalQuestions, onRestart, timeUp, highScores, playerName, timeTaken }) => {
  const { message, emoji, color } = getFeedback(score, totalQuestions);
  
  const scoreIndexInLeaderboard = highScores.findIndex(hs => hs.name === playerName && hs.score === score && hs.time === timeTaken);

  return (
    <div className="text-center bg-black/40 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-yellow-500/50 flex flex-col items-center animate-fade-in w-full">
      <h2 className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-red-500">Kết quả</h2>
      {timeUp && (
          <p className="text-2xl text-red-500 font-bold animate-pulse my-2">Hết giờ!</p>
      )}
      <p className="text-lg text-gray-300 mt-2 mb-4">
        Chúc mừng, <span className="font-bold text-yellow-300">{playerName}</span>!
      </p>
      <p className="text-6xl font-bold my-2">
        <span className={color}>{score}</span>
        <span className="text-3xl text-gray-400"> / {totalQuestions}</span>
      </p>
      <p className="text-xl text-gray-300 mb-2">
        <i className="fas fa-clock mr-2"></i> Thời gian: {formatTime(timeTaken)}
      </p>
      <p className="text-3xl my-2">{emoji} <span className={color}>{message}</span></p>
      
      <button
        onClick={onRestart}
        className="px-10 mt-6 py-4 bg-gradient-to-r from-red-600 to-yellow-500 text-white font-bold text-xl rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-yellow-400"
      >
        <i className="fas fa-redo-alt mr-2"></i> Chơi lại
      </button>

      <div className="mt-8 w-full max-w-md">
        <h3 className="text-2xl font-bold mb-4 text-yellow-400 flex items-center justify-center"><i className="fas fa-trophy mr-2"></i>Bảng Xếp Hạng</h3>
        <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 max-h-64 overflow-y-auto">
            {highScores.length > 0 ? (
                <ol>
                    {highScores.map((hs, index) => (
                        <li key={index} className={`flex justify-between items-center p-3 rounded-lg transition-colors duration-300 text-lg ${scoreIndexInLeaderboard === index ? 'bg-yellow-500/90 text-black font-bold scale-105' : 'text-white'} ${index % 2 === 1 ? 'bg-white/5' : ''}`}>
                            <span className="font-semibold w-1/12">{index + 1}.</span>
                            <span className="w-6/12 truncate text-left ml-2">{hs.name}</span>
                            <span className="font-bold w-3/12 text-right">{hs.score} điểm</span>
                            <span className="font-mono w-2/12 text-right text-gray-400">{formatTime(hs.time)}</span>
                        </li>
                    ))}
                </ol>
            ) : (
                <p className="text-gray-400 text-center py-4">Chưa có ai ghi danh. Hãy là người đầu tiên!</p>
            )}
        </div>
        {scoreIndexInLeaderboard !== -1 && (
            <p className="text-green-400 mt-3 text-lg animate-pulse font-semibold">Bạn đã lọt vào bảng xếp hạng!</p>
        )}
      </div>

    </div>
  );
};

export default ScoreScreen;
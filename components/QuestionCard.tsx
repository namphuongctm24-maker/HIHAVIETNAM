import React, { useState, useEffect } from 'react';
import { Question } from '../types';

interface QuestionCardProps {
  question: Question;
  onAnswer: (isCorrect: boolean) => void;
  onNext: () => void;
  questionNumber: number;
  totalQuestions: number;
  timeLeft: number;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, onAnswer, onNext, questionNumber, totalQuestions, timeLeft }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);
  
  useEffect(() => {
    setSelectedOption(null);
    setIsAnswered(false);
    // Ensure question.options exists before trying to sort
    if(question && question.options) {
      setShuffledOptions([...question.options].sort(() => Math.random() - 0.5));
    }
  }, [question]);

  const handleOptionClick = (option: string) => {
    if (isAnswered) return;

    const isCorrect = option === question.correctAnswer;
    setSelectedOption(option);
    setIsAnswered(true);
    onAnswer(isCorrect);
  };

  const getButtonClass = (option: string) => {
    if (!isAnswered) {
      return 'bg-gray-800 border-gray-700 hover:bg-gray-700 hover:border-yellow-500';
    }
    if (option === question.correctAnswer) {
      return 'bg-green-700 border-green-500 animate-pulse-correct';
    }
    if (option === selectedOption && option !== question.correctAnswer) {
      return 'bg-red-800 border-red-600 animate-shake';
    }
    return 'bg-gray-800 border-gray-700 opacity-60';
  };
  
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="bg-black/50 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-2xl border border-yellow-500/30 w-full animate-fade-in-up">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
            <p className="text-yellow-400 font-semibold text-lg">
              Câu hỏi {questionNumber} / {totalQuestions}
            </p>
            <div className={`font-bold text-lg bg-black/30 px-3 py-1 rounded-lg flex items-center ${timeLeft < 60 ? 'text-red-500 animate-pulse' : 'text-gray-300'}`}>
                <i className="fas fa-clock mr-2"></i>
                {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </div>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2.5">
          <div className="bg-gradient-to-r from-red-600 to-yellow-500 h-2.5 rounded-full" style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}></div>
        </div>
      </div>
      
      {question.image && (
         <img src={question.image} alt="Hình ảnh minh họa" className="w-full h-48 object-cover rounded-lg mb-6 border-2 border-gray-700" />
      )}

      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-100">{question.question}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {shuffledOptions.map((option) => (
          <button
            key={option}
            onClick={() => handleOptionClick(option)}
            disabled={isAnswered}
            className={`w-full p-4 text-left text-lg font-medium rounded-lg border-2 transition-all duration-300 transform ${getButtonClass(option)} ${!isAnswered ? 'hover:scale-105' : 'cursor-not-allowed'}`}
          >
            {option}
          </button>
        ))}
      </div>

      {isAnswered && (
        <div className="mt-6 p-4 rounded-lg bg-gray-800/70 border border-gray-600 animate-fade-in">
            <p className="font-bold text-lg mb-2 text-yellow-400">Giải thích:</p>
            <p className="text-gray-300">{question.explanation}</p>
            <button
                onClick={onNext}
                className="mt-4 w-full px-6 py-3 bg-gradient-to-r from-red-600 to-yellow-500 text-white font-bold text-xl rounded-lg shadow-lg hover:brightness-110 transform transition-transform duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-yellow-400"
            >
               {questionNumber === totalQuestions ? 'Xem kết quả' : 'Câu tiếp theo'} <i className="fas fa-arrow-right ml-2"></i>
            </button>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;

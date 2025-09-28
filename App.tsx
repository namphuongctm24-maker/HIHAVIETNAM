
import React, { useState, useCallback, useEffect } from 'react';
import { EASY_QUESTIONS, MEDIUM_QUESTIONS, HARD_QUESTIONS } from './constants';
import { GameState, Question, HighScore } from './types';
import StartScreen from './components/StartScreen';
import QuestionCard from './components/QuestionCard';
import ScoreScreen from './components/ScoreScreen';

const QUIZ_DURATION = 15 * 60; // 15 minutes in seconds
const TOTAL_QUESTIONS = 30;
const QUESTIONS_PER_DIFFICULTY = 10;
const MAX_HIGH_SCORES = 10;

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.Start);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(QUIZ_DURATION);
  const [timeUp, setTimeUp] = useState<boolean>(false);
  const [playerName, setPlayerName] = useState<string>('');
  const [highScores, setHighScores] = useState<HighScore[]>([]);

  useEffect(() => {
    try {
      const savedScores = localStorage.getItem('highScores');
      if (savedScores) {
        setHighScores(JSON.parse(savedScores));
      }
    } catch (error) {
      console.error("Không thể tải điểm cao từ localStorage", error);
    }
  }, []);

  useEffect(() => {
    if (gameState === GameState.Finished && playerName) {
      const timeTaken = QUIZ_DURATION - timeLeft;
      const newScore: HighScore = { name: playerName, score, time: timeTaken };
      const updatedScores = [...highScores, newScore]
        .sort((a, b) => {
            if (a.score !== b.score) {
                return b.score - a.score; // Higher score first
            }
            return a.time - b.time; // Faster time first
        })
        .slice(0, MAX_HIGH_SCORES);

      setHighScores(updatedScores);
      try {
        localStorage.setItem('highScores', JSON.stringify(updatedScores));
      } catch (error) {
        console.error("Không thể lưu điểm cao vào localStorage", error);
      }
    }
  }, [gameState, score, playerName, timeLeft, highScores]);

  const shuffleArray = <T,>(array: T[]): T[] => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  const startGame = useCallback((name: string) => {
    setPlayerName(name);

    const easyQuestions = shuffleArray(EASY_QUESTIONS).slice(0, QUESTIONS_PER_DIFFICULTY);
    const mediumQuestions = shuffleArray(MEDIUM_QUESTIONS).slice(0, QUESTIONS_PER_DIFFICULTY);
    const hardQuestions = shuffleArray(HARD_QUESTIONS).slice(0, QUESTIONS_PER_DIFFICULTY);

    const selectedQuestions = shuffleArray([...easyQuestions, ...mediumQuestions, ...hardQuestions]);

    setQuestions(selectedQuestions);
    setScore(0);
    setCurrentQuestionIndex(0);
    setTimeLeft(QUIZ_DURATION);
    setTimeUp(false);
    setGameState(GameState.Playing);
  }, []);

  useEffect(() => {
    if (gameState !== GameState.Playing) {
      return;
    }

    if (timeLeft <= 0) {
      setTimeUp(true);
      setGameState(GameState.Finished);
      return;
    }

    const timerId = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [gameState, timeLeft]);

  const handleAnswer = useCallback((isCorrect: boolean) => {
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
  }, []);

  const handleNextQuestion = useCallback(() => {
    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentQuestionIndex(nextIndex);
    } else {
      setGameState(GameState.Finished);
    }
  }, [currentQuestionIndex, questions.length]);

  const restartGame = useCallback(() => {
    setPlayerName('');
    setGameState(GameState.Start);
  }, []);

  const renderGameState = () => {
    switch (gameState) {
      case GameState.Playing:
        return (
          <QuestionCard
            key={currentQuestionIndex}
            question={questions[currentQuestionIndex]}
            onAnswer={handleAnswer}
            onNext={handleNextQuestion}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={questions.length}
            timeLeft={timeLeft}
          />
        );
      case GameState.Finished:
        return (
          <ScoreScreen
            score={score}
            totalQuestions={questions.length}
            onRestart={restartGame}
            timeUp={timeUp}
            highScores={highScores}
            playerName={playerName}
            timeTaken={QUIZ_DURATION - timeLeft}
          />
        );
      case GameState.Start:
      default:
        return <StartScreen onStart={startGame} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-gray-900 to-black text-white flex flex-col items-center justify-center p-4 font-sans relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/1200/800?blur=5')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <main className="z-10 w-full max-w-2xl mx-auto">
            {renderGameState()}
        </main>
    </div>
  );
};

export default App;
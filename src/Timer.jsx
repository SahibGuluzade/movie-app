// Timer.jsx
import React, { useState, useEffect, useRef } from 'react';

const Timer = () => {
  // Input states for setting the timer
  const [inputHours, setInputHours] = useState('');
  const [inputMinutes, setInputMinutes] = useState('');
  const [inputSeconds, setInputSeconds] = useState('');

  // Timer states
  const [timeLeft, setTimeLeft] = useState(0);
  const [initialTime, setInitialTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [savedTimes, setSavedTimes] = useState([]);

  const intervalRef = useRef(null);

  // Converts input values to total seconds
  const parseTimeInputs = () => {
    const hours = Math.max(parseInt(inputHours, 10) || 0, 0);
    const minutes = Math.max(parseInt(inputMinutes, 10) || 0, 0);
    const seconds = Math.max(parseInt(inputSeconds, 10) || 0, 0);
    return hours * 3600 + minutes * 60 + seconds;
  };

  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600)
      .toString()
      .padStart(2, '0');
    const minutes = Math.floor((totalSeconds % 3600) / 60)
      .toString()
      .padStart(2, '0');
    const seconds = (totalSeconds % 60).toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current);
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning, timeLeft]);

  const startTimer = () => {
    if (!isRunning) {
      // If the timer hasn't been set or has ended, start fresh from user inputs
      if (timeLeft === 0) {
        const total = parseTimeInputs();
        setInitialTime(total);
        setTimeLeft(total);
      }
      setIsRunning(true);
    }
  };

  const stopTimer = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  const resetTimer = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
    setTimeLeft(initialTime);
    setSavedTimes([]);
  };

  const saveTime = () => {
    setSavedTimes([...savedTimes, `You saved at ${formatTime(timeLeft)}`]);
  };

  return (
    <div>
      <h1>Timer</h1>
      <div style={{ marginBottom: '10px' }}>
        <label>
          Hours:&nbsp;
          <input
            type="number"
            min="0"
            value={inputHours}
            onChange={(e) => setInputHours(e.target.value)}
          />
        </label>
        &nbsp;&nbsp;
        <label>
          Minutes:&nbsp;
          <input
            type="number"
            min="0"
            value={inputMinutes}
            onChange={(e) => setInputMinutes(e.target.value)}
          />
        </label>
        &nbsp;&nbsp;
        <label>
          Seconds:&nbsp;
          <input
            type="number"
            min="0"
            value={inputSeconds}
            onChange={(e) => setInputSeconds(e.target.value)}
          />
        </label>
      </div>
      <h2>{formatTime(timeLeft)}</h2>
      <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
        <button onClick={saveTime}>+</button>
      </div>
      <div>
        {savedTimes.map((msg, idx) => (
          <p key={idx}>{msg}</p>
        ))}
      </div>
    </div>
  );
};

export default Timer;

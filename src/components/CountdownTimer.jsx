import React, { useState, useEffect } from 'react';
 // Create this CSS file for styling
import '../App.css';
const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const targetDate = new Date('2023-09-21T23:59:59');
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days: days.toString().padStart(2, '0'),
      hours: hours.toString().padStart(2, '0'),
      minutes: minutes.toString().padStart(2, '0'),
      seconds: seconds.toString().padStart(2, '0'),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="countdown-container">
      <div className="countdown-item DigitalNumbers" id="days">
        {timeLeft.days}
        <span id='font'>Days</span>
      </div>
      <div className="countdown-item DigitalNumbers" id="hours">
        {timeLeft.hours}
        <span id='font'>Hours</span>
      </div>
      <div className="countdown-item DigitalNumbers" id="minutes">
        {timeLeft.minutes}
        <span id='font'>Minutes</span>
      </div>
      <div className="countdown-item DigitalNumbers" id="seconds">
        {timeLeft.seconds}
        <span id='font'>Seconds</span>
      </div>
    </div>
  );
};

export default CountdownTimer;

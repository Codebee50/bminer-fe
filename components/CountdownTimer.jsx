// components/CountdownTimer.jsx
import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isExpired, setIsExpired] = useState(false);
  const [targetDate, setTargetDate] = useState(null);

  useEffect(() => {
    // Set the target date to 2 hours from now when the component mounts
    const now = new Date();
    const twoHoursLater = new Date(now.getTime() + 2 * 60 * 60 * 1000);
    setTargetDate(twoHoursLater);
  }, []);

  useEffect(() => {
    if (!targetDate) return;

    // Function to calculate remaining time
    const calculateTimeLeft = () => {
      const difference = targetDate - new Date();

      if (difference <= 0) {
        setIsExpired(true);
        return { hours: 0, minutes: 0, seconds: 0 };
      }

      // Calculate hours, minutes, seconds
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      return { hours, minutes, seconds };
    };

    // Set initial time
    setTimeLeft(calculateTimeLeft());

    // Update time every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clear interval on component unmount
    return () => clearInterval(timer);
  }, [targetDate]);

  // Format digits to always have two digits
  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  if (!targetDate) return <div>Loading...</div>;

  return (
    <div className="flex items-center gap-2">
      {isExpired ? (
        <span className="text-red-500 font-bold text-[15px]">Expired</span>
      ) : (
        <span className="text-[15px] font-semibold">
          {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:
          {formatTime(timeLeft.seconds)}
        </span>
      )}
    </div>
  );
};

export default CountdownTimer;

import React, { useEffect, useState } from "react";

interface CountdownProps {
  endDate: Date;
}

const Countdown = ({ endDate }: CountdownProps) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(endDate) - +new Date();
    let timeLeft: { [key: string]: number } = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });
  const isTimeLeft = Object.values(timeLeft).some((value) => value > 0);

  return isTimeLeft ? (
    <div className="">
      <span className="d-inline-flex flex-column">
        <span>{timeLeft.days.toLocaleString()}</span>
        <span className="text-uppercase fs-9">days</span>
      </span>
      <span className="mx-2">:</span>
      <span className="d-inline-flex flex-column">
        <span>{timeLeft.hours.toLocaleString()}</span>
        <span className="text-uppercase fs-9">hours</span>
      </span>
      <span className="mx-2">:</span>
      <span className="d-inline-flex flex-column">
        <span>{timeLeft.minutes.toLocaleString()}</span>
        <span className="text-uppercase fs-9">mins</span>
      </span>
      <span className="mx-2">:</span>
      <span className="d-inline-flex flex-column">
        <span>{timeLeft.seconds.toLocaleString()}</span>
        <span className="text-uppercase fs-9">secs</span>
      </span>
    </div>
  ) : (
    <span>Time is up</span>
  );
};

export default Countdown;

"use client";
import React, { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setTime(formattedTime);
    };

    // Update time immediately and then every second
    updateClock();
    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return <h1 className="flex items-center text-[15px]">{time}</h1>;
};

export default Clock;

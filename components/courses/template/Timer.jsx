import React, { useState, useEffect } from 'react';
import { Text, StyleSheet } from 'react-native';

const Timer = ({ initialTime, fontSize }) => {
  const [remainingTime, setRemainingTime] = useState(initialTime * 1000);

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime(prevTime => {
        if (prevTime <= 0) {
          clearInterval(timer);
          // Handle timer completion logic here
          return 0;
        }
        return prevTime - 1000; // Subtract 1 second (1000 milliseconds) from remaining time
      });
    }, 1000); // Update every 1 second (1000 milliseconds)

    return () => clearInterval(timer); // Clean up the interval on unmounting
  }, []);

  const formatTime = ms => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <Text style={[styles.timer, { fontSize: fontSize }]}>
      {formatTime(remainingTime)}
    </Text>
  );
};

const styles = StyleSheet.create({
  timer: {
    fontWeight: 'bold',
    color: '#dc3545',
  },
});

export default Timer;

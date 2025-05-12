import React from 'react';

const FriendsChatLogo = ({ width = "100%", height = "auto" }) => (
  <svg
    viewBox="0 0 400 100"
    width={width}
    height={height}
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
  >
    <defs>
      <linearGradient id="gradientText" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: '#00B4DB', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#0083B0', stopOpacity: 1 }} />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" floodColor="#000" floodOpacity="0.3" />
      </filter>
    </defs>
    <style>{`
      @keyframes fadeInUp {
        0% {
          opacity: 0;
          transform: translateY(20px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }
      .animatedText {
        animation: fadeInUp 1s ease-out forwards;
        opacity: 0;
      }
    `}</style>
    <text
      x="20"
      y="65"
      className="animatedText"
      fontFamily="'Segoe UI', 'Verdana', sans-serif"
      fontSize="48"
      fill="url(#gradientText)"
      filter="url(#shadow)"
    >
      Friends Chat
    </text>
  </svg>
);

export default FriendsChatLogo;

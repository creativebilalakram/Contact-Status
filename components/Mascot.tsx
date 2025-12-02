import React from 'react';

// A modernized, clean vector heart character suitable for a premium UI
// Replaces the "childish" flyer look with something more tech/medical startup aligned.
export const Mascot: React.FC<{ className?: string, emotion?: 'happy' | 'helpful' }> = ({ className = "w-24 h-24", emotion = 'happy' }) => {
  return (
    <svg viewBox="0 0 200 200" className={`${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="heartGradient" x1="20" y1="20" x2="180" y2="180" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E11D48" />
          <stop offset="1" stopColor="#BE123C" />
        </linearGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      
      {/* Main Body Shape - Soft modern heart */}
      <path 
        d="M100 180C100 180 170 130 170 85C170 55 145 35 120 35C100 35 90 55 100 65C110 55 100 35 80 35C55 35 30 55 30 85C30 130 100 180 100 180Z" 
        fill="url(#heartGradient)" 
        stroke="white" 
        strokeWidth="4"
        style={{ filter: 'drop-shadow(0px 10px 20px rgba(225, 29, 72, 0.4))' }}
      />
      
      {/* Face - Minimalist, Kawaii but clean */}
      {emotion === 'happy' && (
        <g transform="translate(0, 10)">
          {/* Eyes */}
          <circle cx="75" cy="80" r="6" fill="white" />
          <circle cx="125" cy="80" r="6" fill="white" />
          {/* Smile */}
          <path d="M85 100 Q100 115 115 100" stroke="white" strokeWidth="4" strokeLinecap="round" />
          {/* Shine */}
          <ellipse cx="60" cy="60" rx="10" ry="5" fill="white" fillOpacity="0.3" transform="rotate(-45 60 60)" />
        </g>
      )}

      {emotion === 'helpful' && (
        <g transform="translate(0, 10)">
           {/* Eyes - Winking */}
           <path d="M70 80 L80 80" stroke="white" strokeWidth="3" strokeLinecap="round" />
           <circle cx="125" cy="80" r="6" fill="white" />
           {/* Smile */}
           <path d="M90 105 Q100 110 110 105" stroke="white" strokeWidth="3" strokeLinecap="round" />
           {/* Headset/Mic hint */}
           <path d="M165 85 Q175 90 165 100" stroke="white" strokeWidth="3" fill="none" opacity="0.6"/>
        </g>
      )}
      
      {/* Medical Cross Detail - Subtle branding */}
      <path d="M100 45 V55 M95 50 H105" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
};

export default Mascot;
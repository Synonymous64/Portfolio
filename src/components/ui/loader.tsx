import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="relative">
        <svg className="w-24 h-24" viewBox="0 0 240 240">
          <circle 
            className="animate-ringA stroke-primary"
            cx={120} 
            cy={120} 
            r={105} 
            fill="none"
            strokeWidth={20} 
            strokeDasharray="0 660" 
            strokeDashoffset={-330} 
            strokeLinecap="round" 
          />
          <circle 
            className="animate-ringB stroke-secondary"
            cx={120} 
            cy={120} 
            r={35} 
            fill="none"
            strokeWidth={20} 
            strokeDasharray="0 220" 
            strokeDashoffset={-110} 
            strokeLinecap="round" 
          />
          <circle 
            className="animate-ringC stroke-accent"
            cx={85} 
            cy={120} 
            r={70} 
            fill="none"
            strokeWidth={20} 
            strokeDasharray="0 440" 
            strokeLinecap="round" 
          />
          <circle 
            className="animate-ringD stroke-muted"
            cx={155} 
            cy={120} 
            r={70} 
            fill="none"
            strokeWidth={20} 
            strokeDasharray="0 440" 
            strokeLinecap="round" 
          />
        </svg>
      </div>
    </div>
  );
};

export default Loader;

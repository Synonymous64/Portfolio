import React from 'react';
import { cn } from '@/lib/utils';

interface ProgressBarProps {
  label: string;
  percentage: number;
  colorClass: string;
  showPercentage?: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  label,
  percentage,
  colorClass,
  showPercentage = true
}) => {
  return (
    <div className="flex flex-col w-full mb-2">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-foreground">{label}</span>
        {showPercentage && (
          <span className="text-sm text-muted-foreground">{percentage}%</span>
        )}
      </div>
      <div className="h-2.5 w-full bg-secondary rounded-full overflow-hidden">
        <div 
          className={cn(
            `h-full rounded-full bg-gradient-to-r ${colorClass}`,
            "transition-all duration-1000 ease-out"
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
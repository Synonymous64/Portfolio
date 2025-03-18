
import { useState, useEffect } from 'react';
import { Skeleton } from './ui/skeleton';
import ThreeScene from './ThreeScene';

interface SplineSceneProps {
  className?: string;
  modelPath?: string;
}

// This component now uses ThreeScene directly
const SplineScene = ({ className = '', modelPath }: SplineSceneProps) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading to maintain the same behavior as before
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`relative ${className}`}>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      )}
      
      <ThreeScene className="w-full h-full" modelPath={modelPath} />
    </div>
  );
};

export default SplineScene;

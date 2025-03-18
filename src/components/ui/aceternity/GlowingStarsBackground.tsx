
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface Star {
  x: number;
  y: number;
  size: number;
  color: string;
  alpha: number;
  speed: number;
}

export const GlowingStarsBackground = ({
  className,
  quantity = 50,
}: {
  className?: string;
  quantity?: number;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const { width, height } = rect;

    const newStars = Array.from({ length: quantity }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 1,
      color: `hsl(${Math.random() * 360}, 80%, 80%)`,
      alpha: Math.random() * 0.5 + 0.5,
      speed: Math.random() * 0.1 + 0.05,
    }));

    setStars(newStars);

    const animateStars = () => {
      setStars((prevStars) =>
        prevStars.map((star) => {
          let newY = star.y - star.speed;
          if (newY < -10) {
            newY = height + 10;
          }
          return {
            ...star,
            y: newY,
            alpha: Math.sin(Date.now() * 0.001 * star.speed) * 0.3 + 0.7,
          };
        })
      );
      animationRef.current = requestAnimationFrame(animateStars);
    };

    const animationRef = { current: requestAnimationFrame(animateStars) };

    const handleResize = () => {
      const newRect = container.getBoundingClientRect();
      const newWidth = newRect.width;
      const newHeight = newRect.height;

      setStars((prevStars) =>
        prevStars.map((star) => ({
          ...star,
          x: (star.x / width) * newWidth,
          y: (star.y / height) * newHeight,
        }))
      );
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, [quantity]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "absolute inset-0 overflow-hidden [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black_70%)]",
        className
      )}
    >
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${star.x}px`,
            top: `${star.y}px`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: star.color,
            boxShadow: `0 0 ${star.size * 3}px ${star.color}`,
            opacity: star.alpha,
          }}
        />
      ))}
    </div>
  );
};

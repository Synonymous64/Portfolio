import { ReactNode } from 'react';

interface InfiniteLoopSliderProps {
    children: ReactNode;
    isReverse?: boolean;
}

const InfiniteLoopSlider = ({
    children,
    isReverse = false,
}: InfiniteLoopSliderProps) => {
    return (
        <div className="loop-slider" data-direction={isReverse ? 'reverse' : 'normal'}>
            <div className="inner">
                {children}
                {children} {/* Duplicate children for seamless loop */}
            </div>
        </div>
    );
};

export default InfiniteLoopSlider;
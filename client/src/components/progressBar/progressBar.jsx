import { useState } from 'react';
import './progressBar.css';

export const ProgressBar = () => {
    const [percentage, setPercentage] = useState(30);
    const [progressTime, setProgressTime] = useState({
        totalHours: 8,
        completedHours: 3,
        completedMinutes: 24,
        completedPercentage: 30
    });

    return (
        <div className="progress-bar box-shadow flex flex-direction-column">
            <div className="flex justify-content-between">
                <div> 
                    Today's Progress {progressTime.completedPercentage}%
                </div>
                <div className="fs-3 primary-gray">
                    <span>{progressTime.completedHours}h {progressTime.completedMinutes}m</span>
                    <span>/</span>
                    <span>{progressTime.totalHours}h</span>
                </div>
            </div>

            <div className="progress-track">
                <div className="progress-fill" style={{
                    width: `${progressTime.completedPercentage}%`
                }}> </div>
            </div>

            <div className="fs-3 primary-gray progress-text">
                <p>Keep going! You're doing great.</p>
            </div>
        </div>
    )
}


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faClock } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import './headerDate.css';

const getCurrentDate = () => {
    const today = new Date();

    return {
        date: today.toLocaleDateString(),
        day: today.toLocaleDateString("en-US", {
            weekday: "long"
        }),
        time: today.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        })
    }
}

const getWelcomeMsg = () => {
    const hour = new Date().getHours();
    if (hour < 12) {
        return "Good Morning!, Developer 🌞";
    }

    if (hour < 18) {
        return "Good Afternoon!, Developer ☺️";
    }

    return "Good Evening!, Developer ☕";
}

const _1Sec = 1000;

export const HeaderDate = () => {
    const [currDate, setCurrDate] = useState(getCurrentDate());
    const welcomeMsg = getWelcomeMsg();
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrDate(getCurrentDate());
        }, _1Sec);

        // Cleanup
        return () => {
            clearInterval(interval);
        }

    }, [])

    return (
        <div className="header-date-container box-shadow">
            <div className="flex">
                <div className="flex align-items-center calendar-icon"> 
                    <div className="icon-box">
                        <FontAwesomeIcon icon={faCalendarDays} />
                    </div>
                </div>
                <div className="header-date">
                    <p className="primary-gray date"> {currDate.date}</p>
                    <p className="day"> {currDate.day} </p>
                    <p className="time">
                        <FontAwesomeIcon icon={faClock} /> {currDate.time} 
                    </p>
                </div>
            </div>

            <div>
                <p className="fs-3 primary-gray mt-0">{welcomeMsg}</p>
            </div>
        </div>
    )
}
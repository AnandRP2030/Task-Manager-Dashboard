import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import './headerDate.css';

const getCurrentDate = () => {
    const today = new Date();

    return {
        date: today.toLocaleDateString(),
        day: today.toLocaleDateString("en-US", {
            weekday: "long"
        }),
        time: 0
    }
}

const getWelcomeMsg = () => {
    const hour = new Date().getHours();
    if (hour < 12) {
        return "Good Morning!, Developer 🌞";
    }

    if (hour < 18) {
        return "Good Afternoon!, Developer 🥱";
    }

    return "Good Evening!, Developer ☕";
}

export const HeaderDate = () => {
    const currDate = getCurrentDate();
    const welcomeMsg = getWelcomeMsg();

    return (
        <div>
            <div className="flex">
                <div className="flex align-items-center calendar-icon"> 
                    <div className="icon-box">
                        <FontAwesomeIcon icon={faCalendarDays} />
                    </div>
                </div>
                <div className="header-date">
                    <p className="gray-text date"> {currDate.date}</p>
                    <p className="day"> {currDate.day} </p>
                </div>

            </div>
            <div>
                <p className="sm-text gray-text">{welcomeMsg}</p>
            </div>
        </div>
    )
}
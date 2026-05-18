
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";


export const HeaderDate = () => {
    return (
        <div className="date-header flex justify-content-center">
            <div> 
                <FontAwesomeIcon icon={faCalendar} />
            </div>
            <div>
                <p> 17/05/2026</p>
                <p> Sunday </p>
            </div>
        </div>
    )
}
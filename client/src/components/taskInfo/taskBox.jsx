import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFaceMeh } from "@fortawesome/free-solid-svg-icons"
export const TaskBox = ({icon = faFaceMeh, title = "Productivity", value="Medium"}) => {
    return (
        <div>
            <p>
                <FontAwesomeIcon icon={icon}/>
            </p>
            <p>{title}</p>
            <p>{value}</p>
        </div>
    )
}
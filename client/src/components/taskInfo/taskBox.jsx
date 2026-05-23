import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFaceMeh } from "@fortawesome/free-solid-svg-icons"
import "./taskInfo.css";

export const TaskBox = (props) => {
    const {
        color="#ffffff",
        icon = faFaceMeh,
        title = "Productivity",
        value="Medium"
    } = props;

    return (
        <div className="task-box box-shadow box-border" style={{borderColor: color}}>
            <div className="task-box-icon" style={{borderColor: color}}>
                <FontAwesomeIcon icon={icon} color={color} fontSize={24}/>
            </div>

            <p className="gray-text task-box-title">{title}</p>
            <strong style={{borderColor: color}}>
                {value}
            </strong>
        </div>
    )
}
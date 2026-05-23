import './taskContainer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
export const TaskContainer = (props) => {
    const { taskUI } = props;
    const {title, description, empty, icon, color} = taskUI;
    
    return (
        <div className="taskContainer" style={{border: `1px solid ${color}`}}>
            <h1>{title}</h1>
            <p>{description}</p>
            <p>{empty}</p>
            <div style={{color: color}}>
                <FontAwesomeIcon icon={icon}/>
            </div>
        </div>
    )
}
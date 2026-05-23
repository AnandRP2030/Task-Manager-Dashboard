import { TaskBox } from "./taskBox"
import { faClock } from "@fortawesome/free-solid-svg-icons"
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"
import { faBolt } from "@fortawesome/free-solid-svg-icons"

import './taskInfo.css';

export const TaskInfo = () => {
    return (
        <div className="flex task-info-container">
            <TaskBox icon={faClock} title="Productivity" value="Medium" />
            <TaskBox icon={faBolt} title="Total Time" value="3h 45m" />
            <TaskBox icon={faCircleCheck} title="Completed" value="6 Tasks" />
        </div>
    )
}
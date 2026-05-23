import { TaskBox } from "./taskBox"
import { faClock } from "@fortawesome/free-solid-svg-icons"
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"
import { faBolt } from "@fortawesome/free-solid-svg-icons"

import './taskInfo.css';

export const TaskInfo = () => {
    return (
        <div className="flex justify-content-between task-info-container">
            <TaskBox color="#F59E0B" icon={faClock} title="Productivity" value="Medium" />
            <TaskBox color="#3B82f6" icon={faBolt} title="Total Time" value="3h 45m" />
            <TaskBox color="#22C55E" icon={faCircleCheck} title="Completed" value="6 Tasks" />
        </div>
    )
}
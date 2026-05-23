import { TaskContainer } from "../taskContainer/taskContainer";
import { TASK_STATUS } from "../../constants/taskStatus";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faListUl } from "@fortawesome/free-solid-svg-icons";
import { faInbox } from "@fortawesome/free-solid-svg-icons";

import './canvas.css';

const taskUIArray = [
    {
        id: 1,
        title: TASK_STATUS.TODO,
        description: "Tasks waiting to be started",
        empty: "Tasks you add appear here.",
        icon: faInbox,
        color: "var(--todo)"
    },
    {
        id: 2,
        title: TASK_STATUS.DOING,
        description: "Tasks in progress",
        empty: "Tasks you add and start will appear here.",
        icon: faListUl,
        color: "var(--doing)"
    },
    {
        id: 3,
        title: TASK_STATUS.DONE,
        description: "Completed tasks",
        empty: "Tasks you complete will appear here.",
        icon: faCircleCheck,
        color: "var(--done)"
    },
]

export const Canvas = () => {

    return (
        <div className="canvas">
            {taskUIArray.map((taskUI) => <TaskContainer key={taskUI.id} taskUI={taskUI}/>)}
        </div>
    )
}
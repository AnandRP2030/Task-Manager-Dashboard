import { HeaderDate } from "../headerDate/headerDate"
import { ProgressBar } from "../progressBar/progressBar"
import { TaskInfo } from "../taskInfo/taskInfo"
import './header.css';

export const Header = () => {
    return (
        <div className="main-header flex justify-content-between">
            <HeaderDate />
            <ProgressBar />
            <TaskInfo />
        </div>
    )
}
import { useState } from 'react';
import { Modal } from './modal';
import './modal.css';

export const AddTaskModal = ({onClose}) => {
    const [task, setTask] = useState({
        title: '',
        description: '',
        steps: [],
        estimate: '',
        taskLink: ''
    });


    return (
        <Modal onClose={onClose}>
            <div>
                <h2> Add New Task </h2>
                <input type="text" placeholder='Title' value={task.title}/>
                <input placeholder='Description' value={task.title}/>
                <button>Add Task</button>
            </div>
        </Modal>
    )
}
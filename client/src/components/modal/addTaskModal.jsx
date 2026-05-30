import { useState } from 'react';
import { Modal } from './modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
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
            <div className="white-color">
                <div className="flex">
                    <h2> Add New Task </h2>
                    <button type="button" onClick={onClose}>
                        <FontAwesomeIcon icon={faX} />
                    </button>
                </div>

                <label htmlFor="">Task Title</label>
                <input type="text" placeholder='Title' value={task.title}/>
                <label htmlFor="">Task Description</label>
                <input placeholder='Description' value={task.description}/>
                <div className='flex'>
                    <div>
                        <label htmlFor="">Estimated Time</label>
                        <input type="text" placeholder='Estimated Time' />
                    </div>
                    <div>
                        <label htmlFor="">Task Link (Optional)</label>
                        <input type="text" placeholder='Task Link' />
                    </div>
                </div>
                <button>Add Task</button>
            </div>
        </Modal>
    )
}
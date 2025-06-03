import {Button} from "../../../widgest/button/index.js";
import {Input} from "../../../widgest/input/index.js";
import {useEffect, useState} from "react";
import style from "./style.module.scss"
import {useApi} from "../../../shared/lib/hooks/useApi.js";

const IndexPage = () => {

    const { data: tasks = [], fetchData: fetchTasks } = useApi();
    const { loading: saveLoading, fetchData: fetchSave } = useApi();
    const { data: deleteTasks, fetchData: fetchDeleteTask } = useApi();
    const { data: doneTasks, fetchData: fetchDoneTasks } = useApi();

    const [writeTask, setWriteTask] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            await fetchTasks('texts/all', 'GET');
        } catch (error) {
            console.log(error);
        }
    };

    const saveTask = async () => {
        const dataTask = {
            text: writeTask,
        };

        try {
            await fetchSave('texts/create', 'POST', dataTask);
            setWriteTask(''); // Очищаем поле
            fetchData();
        } catch (error) {
            console.log(error);
        }
    };

    const deleteTask = async (id) => {
        try {
            await fetchDeleteTask(`texts/${id}`, 'DELETE');
            fetchData();
        } catch (error) {
            console.log(error);
        }
    };

    const doneTask = async (id) => {
        try {
            await fetchDoneTasks(`texts/${id}`, 'PATCH');
            fetchData();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={style.taskManager}>
            <h1 className={style.title}>Task Manager</h1>
            <div className={style.taskInputContainer}>
                <Input
                    placeholder="Add new task..."
                    value={writeTask}
                    onChange={(e) => setWriteTask(e.target.value)}
                    className={style.taskInput}
                />
                <Button
                    name="Add Task"
                    className={style.addButton}
                    onClick={saveTask}
                    disabled={!writeTask.trim()}
                />
            </div>

            <div className={style.tasksList}>
                {tasks && tasks.length > 0 ? (
                    tasks.map((task) => (
                        <div key={task.id} className={`${style.taskItem} ${task.done ? style.completed : ''}`}>
                            <p className={style.taskText}>
                                {task.text}
                            </p>
                            <div className={style.taskActions}>
                                <Button
                                    name={task.done ? '-' : 'Done'}
                                    className={`${style.actionButton} ${style.doneButton}`}
                                    onClick={() => doneTask(task.id)}
                                />
                                <Button
                                    name="Delete"
                                    className={`${style.actionButton} ${style.deleteButton}`}
                                    onClick={() => deleteTask(task.id)}
                                />
                            </div>
                        </div>
                    ))
                ) : (
                    <p className={style.emptyState}>No tasks yet. Add your first task!</p>
                )}
            </div>
        </div>
    );
};

export default IndexPage;

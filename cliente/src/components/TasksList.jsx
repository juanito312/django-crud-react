import { useEffect, useState } from 'react'
import { getAllTasks } from '../api/tasks.api' //Import function in react
import { TaskCard } from './TaskCard'

export function TasksList() {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        async function loadTasks() {
            const res = await getAllTasks()
            setTasks(res.data)
        }
        loadTasks()
    }, [])
    return <div className='flex flex-wrap gap-5 px-10'>
        {tasks.map(task => (
            <TaskCard key={task.id} task={task} />
        ))}
    </div>
}
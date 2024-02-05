import { useNavigate } from 'react-router-dom'

export function TaskCard({ task }) {

    const navigate = useNavigate()

    return (
        <div
            className='bg-cyan-500 p-3 rounded-md hover:bg-slate-500 hover:text-white cursor-pointer
            mt-5 pb-5'
            onClick={() => {
                navigate(`/tasks/${task.id}`)
            }}
        >
            <h1 className='text-2xl font-bold'>{task.title}</h1>
            <p className='text-lg'>{task.description}</p>
            <p className='text-lg'>Done: {task.done ? '✅' : '❌'}</p>
        </div>
    )
}
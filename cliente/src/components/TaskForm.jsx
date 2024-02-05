import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { createTask, deleteTasks, updateTasks, getTask } from '../api/tasks.api'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'

export function TaskForm() {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm()

    const navigate = useNavigate()
    const params = useParams() //Get id from url


    const onSubmit = handleSubmit(async data => {
        if (params.id) {
            await updateTasks(params.id, data)
            toast.success('Task updated', {
                position: 'bottom-right',
                style: {
                    background: '#101010',
                    color: '#fff'
                }
            })
        } else {
            await createTask(data)
            toast.success('Task created', {
                position: 'bottom-right',
                style: {
                    background: '#101010',
                    color: '#fff'
                }
            })
        }
        navigate('/tasks')
    })

    useEffect(() => {
        async function loadTask() {
            if (params.id) {
                const {
                    data: { title, description, done }
                } = await getTask(params.id)
                setValue('title', title)
                setValue('description', description)
                setValue('done', done)
            }
        }
        loadTask()
    }, [])

    return (
        <div className='max-w-md mx-auto py-5'>
            <form onSubmit={onSubmit}
                className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
                <div className='mb-4'>
                    <label htmlFor="title" className='block text-gray-700 text-sm font-bold mb-2'>
                        Title
                    </label>
                    <input className='shadow appearance-none 
                    border rounded w-full py-2 px-3 text-gray-700
                    leading-tight focus:outline-none focus:shadow-outline'
                        type="text" name="" id="" placeholder="Task Title"{...register('title', { required: true })} />
                    {errors.title && <span> title is required</span>}
                </div>
                <div className='mb-4'>
                    <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
                        Description
                    </label>
                    <textarea
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                    leading-tight focus:outline-none focus:shadow-outline'
                        name="" id="" cols="30" rows="3" placeholder="Task Description" {...register('description', { required: true })}></textarea>
                    {errors.description && <span> description is required</span>}
                </div>

                <div className='mb-4'>
                    <label htmlFor="done" className='block text-gray-700 text-sm font-bold mb-2'>
                        Done
                    </label>
                    <input type="checkbox" className='w-5 h-5' {...register('done')} />
                </div>

                <div className='flex items-center justify-center gap-5'>
                    <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold
                hover:text-white py-2 px-4 border boder-blue-500 hover:border-transparent rounded'>
                        Save
                    </button>

                    {
                        params.id && <button
                            className='bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 
                            hover:border-transparent rounded'
                            onClick={async () => {
                                const accepted = window.confirm('Are you sure?')
                                if (accepted) {
                                    await deleteTasks(params.id)
                                    toast.success('Task deleted', {
                                        position: 'bottom-right',
                                        style: {
                                            background: '#101010',
                                            color: '#fff'
                                        }
                                    })
                                    navigate('/tasks')
                                }
                            }}
                        >Delete</button>
                    }
                </div>
            </form>

        </div>
    )
}
import axios from 'axios'

const tasksApis = axios.create({
    baseURL: 'http://localhost:8000/tasks/api/v1/tasks/',
})

export const getAllTasks = () => tasksApis.get('/')
export const createTask = (data) => tasksApis.post('/', data)
export const deleteTasks = (id) => tasksApis.delete(`/${id}/`)
export const updateTasks = (id, data) => tasksApis.put(`/${id}/`, data)

//Get one task
export const getTask = (id) => tasksApis.get(`/${id}/`)
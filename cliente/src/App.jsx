//Importar las otras paginas .jsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { TaskPage } from './pages/TaskPages';
import { TaskFormPage } from './pages/TaskFormPage';
import { Navegation } from './components/Navegation';
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <BrowserRouter>
      <div className='container mx-auto'>
        <Navegation />
        <Routes>
          <Route path='/' element={<Navigate to='/tasks' />} /> {/* Ruta por defecto */}
          <Route path='/tasks' element={<TaskPage />} />
          <Route path='/tasks-create' element={<TaskFormPage />} />
          <Route path='/tasks/:id' element={<TaskFormPage />} />
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App
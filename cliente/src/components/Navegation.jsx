import { Link } from 'react-router-dom'
export function Navegation() {
    return (
        <ul className='flex border-b'>
            <li className='-mb-px mr-1'>
                <a className='bg-white inline-block border-l border-t border-r rounded-t py-2
                px-4 text-blue-700 font-semibol cursor-pointer'>
                    <Link to='/tasks'>Tasks</Link>
                </a>
            </li>
            <li className='mr-1'>
                <a className='bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold
                cursor-pointer'>
                    <Link to='/tasks-create'>Create</Link>
                </a>
            </li>
        </ul>
    )
}
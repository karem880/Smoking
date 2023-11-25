import { NavLink } from 'react-router-dom';
import './Notfond.css';


function NotFound() {
    return (
        <div className='bg-slate-900 flex flex-col gap-20 items-center justify-center h-[100vh] w-full '>
            <NavLink to={'/'}>
            <span className="loader"></span> </NavLink> 
            <h1 className='text-9xl text-orange-600 font-semibold'>NOT FOUND</h1>       </div>
    );
}

export default NotFound;
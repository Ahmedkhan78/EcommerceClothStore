import React, { useContext } from 'react';
import { SidebarContext } from '../context/SidebarContext';
import { IoMdArrowForward } from 'react-icons/io'

const Sidebar = () => {
    const { isOpen, handleClose } = useContext(SidebarContext);

    console.log("Sidebar rendered - isOpen:", isOpen);

    return (
        <div
            className={`${isOpen ? 'right-0' : '-right-full'} 
      fixed top-0 h-full w-full md:w-[35vw] xl:max-w-[30vw] 
      bg-white shadow-2xl transition-all duration-300 z-[9999] p-4`}
        >
            <div className='flex items-center justify-between py-6 border-b '>
                <div className='uppercase text-sm font-semibold'>Shopping Bag (0)</div>
                <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
                    <IoMdArrowForward className='text-2xl' />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;

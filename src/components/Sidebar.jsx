import React, { useContext } from 'react';
import { SidebarContext } from '../context/SidebarContext';
import { IoMdArrowForward } from 'react-icons/io'
import { FiTrash2 } from "react-icons/fi";

import { CartContext } from '../context/CartContext';
import CartItem from './Cartitem';

const Sidebar = () => {
    const { isOpen, handleClose } = useContext(SidebarContext);
    const { cart, clearCart, total } = useContext(CartContext)




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
            <div className='flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b '>{cart.map(item => {
                return <CartItem item={item} key={item.id} />
            })}
            </div>
            <div className=' flex flex-col gap-y-3 py-4 mt-4'>
                <div className=' flex w-full justify-between items-center'>
                    <div className='uppercase font-semibold'>
                        <span className='ml-2'>Total:</span>$ {parseFloat(total).toFixed(2)}
                    </div>
                    {/* clearcartICon */}
                    <div onClick={clearCart} className='cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl'>
                        <FiTrash2 />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;

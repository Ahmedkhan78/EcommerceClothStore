import React, { useContext } from 'react';
import { SidebarContext } from '../context/SidebarContext';
import { IoMdArrowForward } from 'react-icons/io'
import { FiTrash2 } from "react-icons/fi";

import { CartContext } from '../context/CartContext';
import CartItem from './Cartitem';

import { Link } from 'react-router-dom';

const Sidebar = () => {
    const { isOpen, handleClose } = useContext(SidebarContext);
    const { cart, clearCart, total } = useContext(CartContext)




    return (
        <div
            className={`${isOpen ? 'right-0' : '-right-full'} 
    fixed top-0 h-full w-full md:w-[35vw] xl:max-w-[30vw] 
    bg-white shadow-2xl transition-all duration-300 z-[9999] p-4`}
        >
            {/* Make the whole sidebar a column layout */}
            <div className='h-full flex flex-col'>

                {/* Header */}
                <div className='flex items-center justify-between py-6 border-b'>
                    <div className='uppercase text-sm font-semibold'>
                        Shopping Bag ({cart.length})
                    </div>
                    <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
                        <IoMdArrowForward className='text-2xl' />
                    </div>
                </div>

                {/* Cart Items - make this scrollable only */}
                <div className='flex-1 overflow-y-auto overflow-x-hidden border-b py-2'>
                    {cart.length > 0 ? (
                        cart.map(item => <CartItem key={item.id} item={item} />)
                    ) : (
                        <div className="text-center text-gray-500 mt-8">Your cart is empty</div>
                    )}
                </div>

                {/* Sticky Footer */}
                <div className='flex flex-col gap-y-3 py-4'>
                    <div className='flex justify-between items-center'>
                        <div className='uppercase font-semibold'>
                            <span className='ml-2'>Total:</span> ${parseFloat(total).toFixed(2)}
                        </div>
                        <div
                            onClick={clearCart}
                            className='cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl'
                        >
                            <FiTrash2 />
                        </div>
                    </div>

                    <Link to='/' className='bg-gray-300 flex p-4 justify-center items-center text-gray-900 w-full font-medium'>
                        View Cart
                    </Link>
                    <Link to='/' className='bg-gray-950 flex p-4 justify-center items-center text-white w-full font-medium'>
                        Checkout
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default Sidebar;



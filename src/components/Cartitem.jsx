import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io';
import { CartContext } from '../context/CartContext';
CartContext
const CartItem = ({ item }) => {

    const { removeCart, increaseAmount, decreaseAmount } = useContext(CartContext)
    const { id, title, image, price, amount } = item;
    return (
        <div className='flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-medium text-gray-900'>
            <div className='w-full min-h-[150px] flex items-center gap-x-4 '>
                <Link to={`/product/${id}`}>
                    <img className='max-w-[80px]' src={image} alt="" />
                </Link>
                <div className='w-full flex flex-col'>
                    <div className='flex justify-between mb-2'>
                        <Link to={`/product/${id}`} className='text-sm font-medium uppercase max-w-[240px] text-gray-950 hover:underline'>{title}</Link>
                        <div onClick={() => removeCart(id)} className='text-xl cursor-pointer'>
                            <IoMdClose className='text-gray-500 hover:text-red-500 transition' />
                        </div>
                    </div>
                    <div className='bg-gray-300 flex gap-x-2 h-[-36px] text-sm'>
                        <div className='flex flex-1 max-w-[100px] bg-violet-200 items-center h-full border text-gray-900 font-medium '>
                            <div onClick={() => decreaseAmount(id)} className='flex-1 flex justify-center items-center cursor-pointer'>
                                <IoMdRemove />
                            </div>
                            <div className='h-full flex justify-center items-center px-2'>{amount}</div>
                            <div onClick={() => increaseAmount(id)} className='flex-1 h-full flex justify-center items-center cursor-pointer'>
                                <IoMdAdd />
                            </div>
                        </div>
                        <div className='flex-1 flex items-center justify-around'>$ {price}</div>
                        <div className='flex-1 flex justify-end items-center text-gray-900 font-medium'> {`$ ${parseFloat(price * amount).toFixed(2)}`}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem
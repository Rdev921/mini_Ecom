import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {toast} from 'react-hot-toast'
import { add, remove } from '../redux/Slices/CartSlice';
const Product = ({item}) => {
    const {cart} = useSelector((state)=>state);
    const dispatch = useDispatch();

    const addToCart = ()=>{
        dispatch(add(item))
        toast.success('Yay! 🤑Product added successfully');
        
    }
    const removeFromCart = ()=>{
        dispatch(remove(item.id))
        toast('Product removed ❌'); 

    }
   

  return (
    <div className='flex flex-col items-center justify-between hover:scale-110
    transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl 
    cursor-pointer shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>
        <div className=''>
            <p className='text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1 '>{item.title}</p>
        </div>
        <div>
            <p className='w-40 text-gray-400 font-normal text-[10px] text-left'>{item.description.split(" ").slice(0,10).join(" ")+"..."}</p>
        </div>
        <div className='h-[180px]'>
            <img src={item.image} className='h-full w-full'/>
        </div>
        <div className='flex justify-between gap-12 items-center w-full mt-5'>
        <div>
            <p className='text-green-600 font-semibold'>${item.price}</p>
        </div>

    
            {cart.some((p)=>p.id === item.id) ? 
            (
            <button className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold
            text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in'
            onClick={removeFromCart}>Remove Item</button>
            ) : (
                <button className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold
            text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in'
                onClick={addToCart}>Add to cart</button>
            )}
        </div>
       
    </div>
  )
}

export default Product
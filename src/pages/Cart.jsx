import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom';
import CartItem from '../components/CartItem';
import toast from 'react-hot-toast';
import { checkoutCart } from '../redux/Slices/CartSlice';

const Cart = () => {
    const dispatch = useDispatch();
    const { cart } = useSelector((state) => state);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0))
    }, [cart])

    const checkOut = () => {
        toast.success('Hurray! 🎉Order Placed Successfully, Thanks for Shopping');
        dispatch(checkoutCart());
    }
    return (
        <div className='flex justify-center items-center min-h-[80vh] w-11/12
                max-w-[1200px] mx-auto py-6'>
            {cart.length > 0 ? (
                <div className='flex gap-10 xl:flex-row    flex-col  '>
                    <div className='xl:w-[60%] flex flex-col gap-8    w-full max-w-[900px] mx-auto'>
                        {cart.map((item, index) => (
                            <CartItem key={item.id} {...item} itemIndex={index} />
                        ))}
                    </div>

                    <div className='xl:w-[40%] flex flex-col justify-between py-16 pb-14 px-2 w-full max-w-[900px] mx-auto'>
                        <div className='flex flex-col sm:gap-5 '>
                            <div className='space-y-5'>
                                <p className='sm:text-xl text-green-800 font-semibold uppercase '>Your Cart</p>
                                <p className="sm:text-[50px] text-green-700 font-semibold uppercase sm:-mt-3    text-3xl">Summary</p>
                                <p className='font-semibold sm:text-xl text-slate-700'>
                                    <span>Total Items:{cart.length}</span>
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5">
                            <p className="font-semibold sm:text-xl text-slate-700">Total Amount : ${totalAmount}</p>
                            <NavLink to={'/'}>
                                <button onClick={checkOut}
                                className="w-full sm:py-3 bg-green-700 text-white uppercase font-bold rounded-md text-[17px]
                                   border-green-700 border-2 hover:bg-white hover:text-green-700 
                                    py-1"
                                >Checkout now</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center gap-y-7">
                    <p className="font-semibold text-xl">Your cart is empty</p>
                    <Link to={'/'}>
                        <button  className="px-10 py-3 bg-green-600 text-white uppercase font-semibold rounded-md text-[17px] border-green-600 border-2
                    hover:bg-white hover:text-green-600 ">Shop now</button>
                    </Link>
                </div>
            )}
        </div>
    )
}

export default Cart
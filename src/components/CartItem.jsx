import React from 'react'
import { MdDelete } from 'react-icons/md'
import { remove } from '../redux/Slices/CartSlice'
import { useDispatch, useSelector } from 'react-redux'
import toast from 'react-hot-toast'
const CartItem = (item) => {
    const dispatch = useDispatch();
    const removeItemHandler = () => {
        dispatch(remove(item.id))
        toast.error('remove Item successfully');

    }
    return (
        <div
      className="flex justify-between items-center md:gap-14 md:px-9 md:py-6  border-black text-slate-600
                    border-b-2
                    gap-6 px-3 py-2"
    >
      <img
        src={item.image}
        alt="product"
        className="md:w-[165px] sm:w-[100px] w-[60px] transition-all duration-500"
      />

      <div className="flex flex-col md:gap-5 w-full">
        <p className="font-semibold sm:text-xl">{item.title}</p>

        <p className=" md:text-base sm:text-[13px] text-[10px] ">
          {item.description.split(" ").slice(0, 15).join(" ") + "..."}
        </p>

        <div className="flex justify-between items-center">
          <p className="text-green-600 font-bold sm:text-lg    text-base">
            ${item.price}
          </p>

          <button
            onClick={removeItemHandler}
            className=" bg-neutral-300 flex items-center justify-center sm:p-3 rounded-full mr-2
                                p-1"
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
    )
}

export default CartItem
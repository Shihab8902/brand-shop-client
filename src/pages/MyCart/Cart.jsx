import React, { useContext, useState } from 'react'
import { BsTrash3 } from 'react-icons/bs';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Swal from 'sweetalert2';



const Cart = ({ cartItem, setCartItems, cartItems }) => {
    const { photo, name, price, _id } = cartItem;
    const [quantity, setQuantity] = useState(1);


    const handleDeleteCartItem = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Are you sure want to delete the product?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://bytesync-server.vercel.app/cart/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(res => {
                        if (res.deletedCount > 0) {
                            const remaining = cartItems.filter(cartProduct => cartProduct._id !== id);
                            setCartItems(remaining)
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your item has been deleted successfully!",
                                icon: "success"
                            })
                        }
                    })
                    .catch(error => {
                        Swal.fire({
                            title: "Error",
                            text: error.message,
                            icon: "error"
                        })
                    })
            }
        })
    }








    return <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4 items-center mb-5 border p-5 rounded-lg'>
        <div>
            <img className='w-full block h-full' src={photo} alt="Image unavailable" />
        </div>

        <div>
            <h3 className='text-xl font-semibold mb-3'>{name}</h3>
            <p className='text-lg text-gray-500'>${price}</p>
        </div>

        <div>
            <div className='flex items-center  justify-center gap-6'>
                <button onClick={() => quantity > 1 && setQuantity(quantity - 1)} className='bg-gray-200 text-xl w-[35px] h-[35px] rounded-full'>-</button>
                <p>{quantity}</p>
                <button onClick={() => setQuantity(quantity + 1)} className='bg-gray-200 text-xl w-[35px] h-[35px] rounded-full'>+</button>
            </div>
        </div>

        <div className=' flex flex-col justify-center items-center'>
            <button onClick={() => handleDeleteCartItem(_id)} className='text-3xl text-red-500'><BsTrash3 /></button>
            <button className='flex items-center gap-2 bg-green-500 px-4 py-2 rounded-md text-lg mt-5 md:mt-10 font-semibold text-white'>Checkout <AiOutlineArrowRight /> </button>
        </div>
    </div>
}

export default Cart
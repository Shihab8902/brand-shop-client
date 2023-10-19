import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import Nav from '../../components/Nav/Nav'
import { useLoaderData, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const UpdateProduct = () => {
    const navigate = useNavigate();
    const product = useLoaderData();
    const { name, brand, type, price, photo, description, rating, _id } = product;
    const [productType, setProductType] = useState(type);


    const handleUpdateProduct = e => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const photo = form.photo.value;
        const rating = form.rating.value;


        const updatedProduct = { name, brand, type, price, photo, rating }

        const brandParams = brand.toLowerCase();

        fetch(`https://bytesync-server.vercel.app/update/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(res => {
                if (res.modifiedCount > 0) {
                    Swal.fire({
                        title: "Updated!",
                        text: "Your product has been updated successfully!",
                        icon: "success"
                    })
                        .then(result => {
                            if (result.isConfirmed) {
                                navigate(`/brand/${brandParams}`);
                            }
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


    return <>

        <Helmet>
            <title>Update a product</title>
        </Helmet>

        <Nav />


        <form onSubmit={handleUpdateProduct} className='my-10 lg:w-3/4 mx-auto border-2 p-4 md:p-10 bg-gray-50 rounded-lg container '>
            <h3 className='text-center font-semibold text-3xl  mb-3'>Update an existing product</h3> <hr />

            <div className='flex  flex-col md:flex-row gap-6 mt-5'>
                {/* col-1 */}
                <div className='flex-1'>
                    <div>
                        <label className='font-semibold text-lg' htmlFor="name">Name</label>
                        <input className='w-full mt-2 mb-4 border-2 px-5 py-4 outline-none rounded-lg' type="text" name="name" id="name" required placeholder='Enter product name' defaultValue={name} />
                    </div>
                    <div>
                        <label className='font-semibold text-lg' htmlFor="type">Type</label>
                        <select value={productType} onChange={(e) => setProductType(e.target.value)} className='w-full mt-2 mb-4 border-2 px-5 py-4  cursor-pointer outline-none rounded-lg' name="type" id="type" required>
                            <option className='text-gray-400' value="" >Select a product type</option>
                            <option value="Phone" className='text-black' >Phone</option>
                            <option value="Computer" className='text-black' >Computer</option>
                            <option value="Headphone" className='text-black' >Headphone</option>
                            <option value="Smartwatch" className='text-black' >Smartwatch</option>
                            <option value="Home appliances" className='text-black' >Home appliances</option>
                            <option value="Accessories" className='text-black' >Accessories</option>
                        </select>

                    </div>
                    <div>
                        <label className='font-semibold text-lg' htmlFor="photo">Photo</label>
                        <input className='w-full mt-2 mb-4 border-2 px-5 py-4 outline-none rounded-lg' type="text" name="photo" id="photo" required placeholder='Enter product photo URL' defaultValue={photo} />
                    </div>
                </div>

                {/* col-2 */}
                <div className='flex-1'>
                    <div>
                        <label className='font-semibold text-lg' htmlFor="brand">Brand</label>
                        <input className='w-full mt-2 mb-4 border-2 px-5 py-4 outline-none rounded-lg' type="text" name="brand" id="brand" required placeholder='Enter product brand' defaultValue={brand} />
                    </div>
                    <div>
                        <label className='font-semibold text-lg' htmlFor="price">Price</label>
                        <input className='w-full mt-2 mb-4 border-2 px-5 py-4 outline-none rounded-lg' type="text" name="price" id="price" required placeholder='Enter product price' defaultValue={price} />
                    </div>
                    <div>
                        <label className='font-semibold text-lg' htmlFor="rating">Rating</label>
                        <input className='w-full mt-2 mb-4 border-2 px-5 py-4 outline-none rounded-lg' type="text" name="rating" id="rating" required placeholder='Enter product rating' defaultValue={rating} />
                    </div>
                </div>

            </div>


            <input className='w-full bg-red-500 py-4 mt-4 text-white font-semibold text-lg rounded-lg cursor-pointer' type="submit" value="Update Product" />
        </form>

    </>
}

export default UpdateProduct
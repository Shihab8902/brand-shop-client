import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import Nav from '../../components/Nav/Nav'

const AddProduct = () => {


    const [productType, setProductType] = useState(null);

    const handleAddProduct = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = productType;
        const price = form.price.value;
        const photo = form.photo.value;
        const rating = form.rating.value;
        const description = form.description.value;

        const newProduct = { name, brand, type, price, photo, rating, description }


        console.log(newProduct)
    }







    return <>
        <Helmet>
            <title>Add a product</title>
        </Helmet>

        <Nav />


        <form onSubmit={handleAddProduct} className='my-10 lg:w-3/4 mx-auto border-2 p-4 md:p-10 bg-gray-50 rounded-lg container '>
            <h3 className='text-center font-semibold text-3xl  mb-3'>Add a new product</h3> <hr />

            <div className='flex  flex-col md:flex-row gap-6 mt-5'>
                {/* col-1 */}
                <div className='flex-1'>
                    <div>
                        <label className='font-semibold text-lg' htmlFor="name">Name</label>
                        <input className='w-full mt-2 mb-4 border-2 px-5 py-4 outline-none rounded-lg' type="text" name="name" id="name" required placeholder='Enter product name' />
                    </div>
                    <div>
                        <label className='font-semibold text-lg' htmlFor="type">Type</label>
                        <select onChange={(e) => setProductType(e.target.value)} className='w-full mt-2 mb-4 border-2 px-5 py-4  cursor-pointer outline-none rounded-lg' name="type" id="type" required>
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
                        <input className='w-full mt-2 mb-4 border-2 px-5 py-4 outline-none rounded-lg' type="text" name="photo" id="photo" required placeholder='Enter product photo URL' />
                    </div>
                </div>

                {/* col-2 */}
                <div className='flex-1'>
                    <div>
                        <label className='font-semibold text-lg' htmlFor="brand">Brand</label>
                        <input className='w-full mt-2 mb-4 border-2 px-5 py-4 outline-none rounded-lg' type="text" name="brand" id="brand" required placeholder='Enter product brand' />
                    </div>
                    <div>
                        <label className='font-semibold text-lg' htmlFor="price">Price</label>
                        <input className='w-full mt-2 mb-4 border-2 px-5 py-4 outline-none rounded-lg' type="number" name="price" id="price" required placeholder='Enter product price' />
                    </div>
                    <div>
                        <label className='font-semibold text-lg' htmlFor="rating">Rating</label>
                        <input className='w-full mt-2 mb-4 border-2 px-5 py-4 outline-none rounded-lg' type="number" name="rating" id="rating" required max={5} placeholder='Enter product rating' />
                    </div>
                </div>

            </div>

            <div>
                <label className='font-semibold text-lg' htmlFor="description">Description</label>
                <textarea className='w-full mt-2 mb-4 border-2 px-5 py-4 h-[200px] resize-none outline-none rounded-lg' name="description" required placeholder='Enter product description' />
            </div>

            <input className='w-full bg-red-500 py-4 text-white font-semibold text-lg rounded-lg cursor-pointer' type="submit" value="Add Product" />
        </form>

    </>
}

export default AddProduct
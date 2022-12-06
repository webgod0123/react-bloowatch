import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../productCard';
import { sortProducts } from '../../../redux/productsReducer.js';

function ProductList() {
    const dispatch = useDispatch();
    const productData = useSelector((state) => state.products);
    const data = productData.productData;

    const sort = event => {
        let sorting = event.target.value;
        let payload = { order: sorting, key: 'price' }
        dispatch(sortProducts(payload));

    }
    return (
        <div>
            <div className='w-[85%] flex justify-between mt-20 mx-auto text-stone-500 text-sm'>
                <p>12-17/26</p>
                <select className='border-none' onChange={sort}>
                    <option>Default sorting</option>
                    <option value="up">cheap to expensive</option>
                    <option value="down">expensive to cheap</option>
                </select>
            </div>
            <div className="w-[80%] mx-auto flex flex-wrap mt-10">
                {data?.map((product, index) => (
                    <ProductCard product={product} key={index} />
                ))}
            </div>
        </div>
    )
}

export default ProductList;
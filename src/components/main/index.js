import ProductList from './productlist';
import Filter from './filter';
import '../../assets/style.css';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Main() {
    return (
        <div className="w-[100%]">
            <div className="bg-blue-800 px-20 flex items-center justify-start h-32 mt-20">
                <p className="w-[80%] text-start mx-auto text-white text-3xl">SURFING</p>
            </div>
            <div className='w-[80%] mx-auto flex justify-between'>
                <ProductList />
                <Filter />
            </div>
        </div>
    )
}

export default Main;
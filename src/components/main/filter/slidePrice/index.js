import * as React from 'react';
import { useDispatch } from 'react-redux';
import { searchRangeProduct } from '../../../../redux/productsReducer.js'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
    return `$${value}`;
}

export default function RangeSlider() {
    const [value, setValue] = React.useState([20, 300]);
    const dispatch = useDispatch();

    const handleChange = (event, newValue) => {
        setValue(newValue);
        dispatch(searchRangeProduct(newValue));
    };

    return (
        <div>
            <p className='uppercase text-base'>Price</p>
            <Box sx={{ width: 300 }}>
                <Slider
                    min={0}
                    max={300}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                />
            </Box>
            <p className='text-stone-700 text-sm'>PRICE: ${value[0]} - ${value[1]}</p>
        </div>
    );
}
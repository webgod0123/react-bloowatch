import { useDispatch } from 'react-redux';
import SlidePrice from './slidePrice'
import { filterByCategory, searchProduct } from '../../../redux/productsReducer.js'

export default function Filter() {
    const dispatch = useDispatch();

    const select = ['Boards', 'Canoenig', 'Equipment', 'Padding', 'Scubadiving', 'Surfing'];

    const search = event => {  
        dispatch(searchProduct(event.target.value))
    }
    const filter = ( value ) => {
        dispatch(filterByCategory(value))
    }
    return (
        <div className='w-[30%] mt-20 flex flex-col justify-start gap-12 mt-40'>
            <div>
                <div className="uppercase text-sm mb-2">search</div>
                <input type="text" className="bg-stone-100 py-1 pl-2" placeholder="search for a product" onChange={search} />
            </div>
            <SlidePrice />
            <div>
                <p className='uppercase text-base'>categories</p>
                {select.map((value, index) => (
                    <p onClick={() => filter(value)} key={index} className="text-sm cursor-pointer text-stone-900 mt-2 hover:text-amber-500">{value}</p>
                ))}
            </div>
        </div>
    )
}

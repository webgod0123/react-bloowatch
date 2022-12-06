import { useDispatch } from 'react-redux'
import { selectProduct } from '../../../redux/productsReducer.js'

function ProductCard({ product }) {
    const dispatch = useDispatch();

    const show = (id) => {
        dispatch(selectProduct(id));
    }
    return (
        <div className="flex flex-col justify-end mb-5 w-[30%] mr-[3%] cursor-pointer" onClick={() => show(product.id)}>
            <div className="card-background flex items-end pb-5 relative">

                {
                    product.onSale ? (
                        <>
                            <img src={product.image} className="ml-[28%] w-[50%]" />
                            <div className=" bg-blue-600 text-white text-center w-[50px] h-[50px] leading-[50px] absolute bottom-[250px] translate-y-[50%] left-[5%] rounded-full">Sale</div>
                        </>
                    ) : (<img src={product.image} className="mx-auto w-[50%]" />)

                }
            </div>
            <div className="text-center">
                <p className="uppercase mt-1 text-base">{product.name}</p>
                <p className="text-blue-500 mt-0 text-sm">{product.categories.join()}</p>
                <button className="bg-blue-500 text-white py-1 px-3 mt-4 text-sm">${product.price}</button>
            </div>
        </div>
    )
}

export default ProductCard;
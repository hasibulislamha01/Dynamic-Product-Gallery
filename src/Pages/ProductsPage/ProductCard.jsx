import { CiShoppingCart } from "react-icons/ci";
import PropTypes from 'prop-types'


const ProductCard = ({ product }) => {
    return (
        <div className="w-[300px] h-[350px] rounded-[30px] bg-white shadow-2xl flex flex-col justify-between">
            <div className="h-[65%] p-[7px] rounded-[24px]">
                <img
                    className="w-full h-full object-cover object-center rounded-[24px] "
                    src={product?.image} alt="product image"
                />
            </div>

            <div className="h-[35%] px-[15px] pb-[5px] flex flex-col gap-5">

                <div className="">
                    <h1 className="font-semibold">{product?.name}</h1>
                    <h3 className="text-slate-700">$ {product?.price}</h3>
                </div>

                <div className=" flex items-center justify-between">
                    <button 
                    className="bg-slate-700 text-white px-4 py-1 rounded-full">Details</button>
                    <button className="flex items-center gap-1 border border-slate-700 text-slate-700 px-4 py-1 rounded-full">
                        Add to Cart
                        <CiShoppingCart size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};


ProductCard.propTypes = {
    product: PropTypes.object
}
export default ProductCard;
import products from '../../assets/products.json'

const Products = () => {

    

    return (
        <div className='border border-red-400 text-red-600'>
            {products?.length} wow
        </div>
    );
};

export default Products;
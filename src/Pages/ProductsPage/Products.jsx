import { useEffect, useState } from 'react';
import products from '../../assets/products.json'
import ProductCard from './ProductCard';
import SearchProducts from './SearchProducts';

const Products = () => {

    const [search, setSearch] = useState('')
    const [displayableProducts, setDisplayableProducts] = useState(products)
    // console.log(search);

    useEffect(() => {

        const searchedProducts = products?.filter(product =>
            product.name.toLowerCase().includes(search.toLowerCase())
        )
        setDisplayableProducts(searchedProducts)

    }, [search])


    return (
        <div>
            <h1 className='text-2xl md:text-3xl lg:text-5xl font-bold text-center py-6 md:py-10'>Products</h1>

            <div>
                <label htmlFor="">Filter here</label>
                <input type="checkbox" />
            </div>

            <SearchProducts
                setSearch={setSearch}
            />

            {
                displayableProducts.length !== 0 ?
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center justify-items-center gap-4 md:gap-6'>
                        {
                            displayableProducts?.map(product =>
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                />
                            )
                        }
                    </div>
                    :
                    <div className='mt-12 space-y-4 text-center italic'>
                        <h1 className='font-bold text-3xl  text-slate-800'>No Products Found</h1>
                        <p className='font-semibold'>Try searching something else</p>
                    </div>
            }
        </div>
    );
};

export default Products;
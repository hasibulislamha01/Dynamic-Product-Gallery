import { useEffect, useState } from 'react';
import products from '../../assets/products.json'
import ProductCard from './ProductCard';
import SearchProducts from './SearchProducts';
import Sorting from './Sorting';

const Products = () => {

    const [search, setSearch] = useState('')
    const [priceOrder, setPriceOrder] = useState('')
    const [popularityOrder, setPopularityOrder] = useState('')
    const [displayableProducts, setDisplayableProducts] = useState(products)
    const [sortedData, setSortedData] = useState([])


    useEffect(() => {
        const searchedProducts = products?.filter(product =>
            product.name.toLowerCase().includes(search.toLowerCase())
        )
        setDisplayableProducts(searchedProducts)

    }, [search])

    // price sorting logics
    const sortByPrice = () => {
        let priceSortedData = products
        if (priceOrder === 'asc') {
            priceSortedData = displayableProducts?.sort((a, b) => a.price - b.price)
        } else if (priceOrder === 'dsc') {
            priceSortedData = displayableProducts?.sort((a, b) => b.price - a.price)
        }
        setDisplayableProducts(priceSortedData)
    }

    const sortByPopularity = () => {
        // date sorting logics
        let popularSortedData = displayableProducts
        if (popularityOrder === 'asc') {
            popularSortedData = displayableProducts?.sort((a, b) => a.popularity - b.popularity)
        } else if (popularityOrder === 'dsc') {
            popularSortedData = displayableProducts?.sort((a, b) => b.popularity - a.popularity)
        }
        setDisplayableProducts(popularSortedData)
    }



    console.log('price order, popularity order', priceOrder, popularityOrder);

    return (
        <div>
            <h1 className='text-2xl md:text-3xl lg:text-5xl font-bold text-center py-6 md:py-10'>Products</h1>

            <div>
                <label htmlFor="">Filter here</label>
                <input type="checkbox" />
            </div>


            {/* customizable product searching */}
            <div className='flex items-center gap-6 '>

                <SearchProducts
                    setSearch={setSearch}
                />

                <Sorting
                    setPopularityOrder={setPopularityOrder}
                    setPriceOrder={setPriceOrder}
                    priceOrder={priceOrder}
                    popularityOrder={priceOrder}
                    sortByPopularity={sortByPopularity}
                    sortByPrice={sortByPrice}
                />
            </div>


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
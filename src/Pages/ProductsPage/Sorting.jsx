import Select from 'react-select'
import PropTypes from 'prop-types'



const rose = '#ffffff'
const slate = '#334155'
const liteSlate = '#e2e8f0'
const gray = '#334155'

const customStyles = {
    control: (provided) => ({
        ...provided,
        backgroundColor: slate,
        border: '1px solid black',
        boxShadow: '0 2px 4px rgba(0,0,0,.2)',
    }),
    singleValue: (provided) => ({
        ...provided,
        color: rose, // Change text color to red
        fontWeight: '500'
    }),
    option: (provided, state) => ({
        ...provided,
        //   borderBottom: '1px solid #94a3b8',
        color: state.isSelected ? rose : gray,
        backgroundColor: state.isSelected
            ? slate
            : state.isFocused
                ? liteSlate // Light gray on hover when not selected
                : 'white', // Default background color        
        fontWeight: state.isSelected ? '500' : '500'
    }),
};

// the sorting options are here
const sortOptions = [
    { value: 'priceAsc', label: 'Price Low to High' },
    { value: 'priceDsc', label: 'Price High to Low' },
    { value: 'popularityDsc', label: 'Popularity High to Low' },
    { value: 'popularityAsc', label: 'Popularity Low to High' },
]

const Sorting = ({ setPriceOrder, setPopularityOrder, priceOrder, popularityOrder, sortByPrice, sortByPopularity }) => {


    const refreashSortingStatus = (newValue) => {
        console.log(newValue);
        if (newValue === 'priceAsc' || newValue === 'priceDsc') {
            setPopularityOrder('')
        }
        if (newValue === 'popularityAsc' || newValue === 'popularityDsc') {
            setPriceOrder('')
        }
    }

    // Sort handler
    const handleSorting = (option) => {
        const newValue = option?.value
        console.log(newValue);
        refreashSortingStatus(newValue)


        if (newValue === 'priceAsc') setPriceOrder('asc')
        else if (newValue === 'priceDsc') setPriceOrder('dsc')
        else if (newValue === 'popularityDsc') setPopularityOrder('dsc')
        else if (newValue === 'popularityAsc') setPopularityOrder('asc')
        sortByPrice()
        sortByPopularity()
    }

    console.log(priceOrder, popularityOrder);
    return (
        <div className='flex flex-col md:flex-row items-center justify-center gap-4'>

            {

                <Select
                    options={sortOptions}
                    placeholder='Sort by '
                    styles={customStyles}
                    onChange={handleSorting}
                    className='w-48'
                ></Select>

            }

            {/* {
                sortCategory === 'date' &&
                <Select
                    options={popularityOptions}
                    placeholder='Sort by date added'
                    styles={customStyles}
                    onChange={handlePopularitySorting}
                ></Select>
            } */}
        </div>
    );
};


Sorting.propTypes = {
    setPriceOrder: PropTypes.func,
    setPopularityOrder: PropTypes.func
}
export default Sorting;
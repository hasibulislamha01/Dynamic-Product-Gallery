import PropTypes from 'prop-types'


const SearchProducts = ({ setSearch }) => {

    const handleSearch = (e) => {
        e.preventDefault()
        const searchingProduct = e.target.searchKeyword.value
        if(searchingProduct !== ''){setSearch(searchingProduct)}
    }
    return (
        <form
            onSubmit={handleSearch}
            className="flex items-center gap-2"
        >
            <input
                type="text"
                placeholder="Search Here"
                name="searchKeyword"
                className="input-box"
                onChange={(e) => setSearch(e.target.value)}
            />
            <button
                className="btn bg-slate-700 text-white"
            >Search</button>
        </form>
    );
};


SearchProducts.propTypes = {
    setSearch: PropTypes.func
}
export default SearchProducts;
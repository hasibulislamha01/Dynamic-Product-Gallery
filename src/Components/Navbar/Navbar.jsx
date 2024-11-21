const routes = [
    { title: 'Home', link: '/' },
    { title: 'Products', link: '/' },
    { title: 'About', link: '/' },
    { title: 'Contact', link: '/' },
]
const Navbar = () => {
    return (
        <div className="w-full bg-slate-700 text-white flex items-center justify-evenly">
            <h1 className="text-xl font-bold">InstaBuy</h1>
            <div className="h-12 flex items-center gap-6 lg:gap-8 font-semibold">
                {
                    routes?.map(route =>
                        <a key={route.title} href={route.link}>{route.title}</a>
                    )
                }
            </div>
            <div>
                <button className="px-[1.2rem] py-[0.2rem] rounded-full bg-slate-100 text-slate-700 font-semibold">Login</button>
            </div>
        </div>

    );
};

export default Navbar;
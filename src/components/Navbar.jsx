function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
                <div className="text-xl font-semibold text-gray-900">Avolo</div>
                <ul className="flex items-center gap-6 text-sm font-medium text-gray-700">
                    <li className="flex items-center gap-1 cursor-default">
                        How it Works <i className="fas fa-chevron-down text-[10px] text-gray-400"></i>
                    </li>
                    <li className="flex items-center gap-1 cursor-default">
                        What we test <i className="fas fa-chevron-down text-[10px] text-gray-400"></i>
                    </li>
                    <li className="cursor-default">Pricing</li>
                    <li className="cursor-default">About</li>
                </ul>
                <div className="flex items-center gap-4">
                    <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">Login</a>
                    <span className="bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-gray-800 cursor-default">
                        Get Started
                    </span>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
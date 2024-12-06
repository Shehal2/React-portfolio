const Footer = () => {
    return (
        <footer className="bg-blue-900 rounded-none shadow">
            <div className="w-full mx-0 p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between container mx-auto">
                    <a href="" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <div className="bg-blue-900 border-0 rounded-xl w-16 h-16 mr-4" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-200">Theekshana</span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-400 sm:mb-0">
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
               
            </div>
        </footer>
    );
};

export default Footer;
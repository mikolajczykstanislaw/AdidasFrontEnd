const Button = ({ label, iconURL, backgroundColor }) => {
    return (
        <button className="relative inline-flex items-center px-8 py-4 bg-white text-black font-bold border-2 border-black rounded-sm shadow-[4px_4px_0px_#000000]
        transform transition-all duration-300 hover:shadow-[2px_2px_0px_#000000] active:shadow-[0px_0px_0px_#000000] active:translate-x-1 active:translate-y-1"
        >
            {label}
            {iconURL && (
                <img src={iconURL} alt="arrow right icon" className="ml-2" />
            )}
        </button>
    );
};

export default Button;

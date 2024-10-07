const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
    const handleClick = () => {
        if (bigShoeImg !== imgURL.bigShoe) {
            changeBigShoeImage(imgURL.bigShoe);
        }
    };

    return (
        <div
            className={`border-2 rounded-xl ${
                bigShoeImg === imgURL.bigShoe
                    ? "border-blue-500"
                    : "border-transparent"
            } cursor-pointer flex-1`}
            onClick={handleClick}
        >
            <div className="flex justify-center items-center bg-card bg-center bg-cover w-full h-32 sm:w-40 sm:h-40 rounded-xl p-2">
                <img
                    src={imgURL.thumbnail}
                    alt="shoe collection"
                    className="object-contain w-full h-full"
                />
            </div>
        </div>
    );
};

export default ShoeCard;
import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
    return (
        <section
            id="about-us"
            className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
        >
            <div className="flex flex-1 flex-col">
                <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
                    We Provide You
                    <span className="text-blue-500"> Super</span>
                    <span className="text-blue-500"> Quality</span> Shoes
                </h2>
                <p className="mt-4 lg:max-w-lg info-text">
                    Our super quality shoes combine comfort and style, crafted
                    from premium materials. Enjoy durability and confidence for
                    any occasion!
                </p>
                <p className="mt-6 lg:max-w-lg info-text">
                    Experience the perfect fit with our stylish footwear.
                    Elevate your look effortlessly!
                </p>
                <div className="mt-11">
                    <Button label="See More" />
                </div>
            </div>

            <div className="flex-1 flex justify-center items-center">
                <img
                    src={shoe8}
                    alt="shoe8"
                    width={570}
                    height={522}
                    className="object-contain"
                />
            </div>
        </section>
    );
};

export default SuperQuality;

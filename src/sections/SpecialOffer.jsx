import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
    return (
        <section className="flex flex-col-reverse md:flex-row justify-between items-center gap-10 max-container">
            <div className="flex-1">
                <img
                    src={offer}
                    alt="Shoe Promotion"
                    className="object-contain w-full h-auto" // Upewnij się, że obrazek jest responsywny
                />
            </div>
            <div className="flex flex-1 flex-col">
                <h2 className="text-4xl font-palanquin font-bold">
                    <span className="text-blue-500">Special </span>
                    Offer
                </h2>
                <p className="mt-4 info-text">
                    Discover the classic Adidas Samba shoes, which combine
                    timeless style with exceptional comfort. Crafted from
                    premium leather and featuring the iconic three stripes,
                    these shoes are perfect for both athletic activities and
                    everyday wear.
                </p>
                <p className="mt-6 info-text">
                    For a limited time, buy two pairs and get 20% off the second
                    pair! Plus, enjoy free shipping and a 30-day return
                    guarantee. Don’t miss out on this chance to elevate your
                    footwear collection—shop now!
                </p>
                <div className="mt-11 flex flex-wrap gap-4">
                    <Button label="Shop now" iconURL={arrowRight} />
                    <Button label="Learn more" />
                </div>
            </div>
        </section>
    );
};

export default SpecialOffer;

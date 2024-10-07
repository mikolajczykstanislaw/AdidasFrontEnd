import { products } from "../constants";
import PopularProductCard from "../components/PopularProductCard";

const PopularProducts = () => {
    return (
        <section id="products" className="max-container max-sm:mt-12">
            <div className="flex flex-col justify-start gap-5">
                <h2 className="text-4xl font-palanquin font-bold">
                    The Most <span className="text-blue-500">Popular</span> For
                    You
                </h2>
                <p className="lg:max-w-lg font-montserrat text-slate-gray">
                    Features the top trending shoes, selected based on your
                    style. Discover the best-selling sneakers, boots, and more,
                    all tailored to your preferences. Step into the latest
                    trends effortlessly!
                </p>
            </div>

            <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
              {products.map((product) => (
                <PopularProductCard key={product.name} {...product}/>
              ))}
            </div>
        </section>
    );
};

export default PopularProducts;

import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

import Product from "../components/Product";
import Hero from '../components/Hero';
const Home = () => {
    const { products } = useContext(ProductContext);


    const filteredProducts = products.filter(
        (item) =>
            item.category === "men's clothing" ||
            item.category === "women's clothing"
    );

    if (filteredProducts.length === 0) {
        return <div className="text-center mt-20 text-lg">Loading clothing products...</div>;
    }
    console.log(filteredProducts)

    return (
        <div>
            <Hero />
            <section className='py-16'>
                <div className="container mx-auto">
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0 '>
                        {filteredProducts.map((product) => {
                            return (
                                <Product product={product} key={product.id} />
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>

    );
};

export default Home;

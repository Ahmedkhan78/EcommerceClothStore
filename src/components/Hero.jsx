import React from 'react'
import WomenImg from '../img/woman_hero.png'
import { Link } from 'react-router-dom'
const Hero = () => {
    return (
        <section className='bg-violet-200 h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24 '>
            <div className="container mx-auto flex justify-around h-full ">
                {/* text */}
                <div className='flex flex-col justify-center'>
                    <div className='font-semibold flex items-center uppercase'>
                        {/* prtitle */}
                        <div className='w-10 h-[2px] bg-red-500 mr-3'></div>
                        New Trend
                    </div>
                    {/* title */}
                    <h1 className='text-[70px] leading-[1.1] font-light mb-4 '>AUTUMN SALE STYLISH <br /> <span className='font-semibold'>WOMENS</span></h1>
                    <Link to={'/'} className='self-start uppercase font-semibold border-b-2 border-gray-950 '>
                        Discover More </Link>
                </div>
                {/* image */}
                <div className='hidden lg:block'>
                    <img src={WomenImg} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Hero
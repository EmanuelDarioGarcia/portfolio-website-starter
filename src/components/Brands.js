import React from 'react'
//BRANDSDATA
import  {brands} from '../data'

const Brands = () => {
    return (
        <section className='min-h-[146px] bg-tertiary flex items-center'>
            <div className='container mx-auto flex md:justify-between items-center flex-wrap justify-evenly'>
                {brands.map((brands, index) => {
                    return (
                        <div key={index}>
                            <img src={brands.img} alt='' />
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Brands
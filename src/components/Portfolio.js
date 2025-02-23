import React from 'react'
//imgs comp 
import Projects from '../components/Projects'
const Portfolio = () => {
    return (
        <section 
            id='portfolio'
            className='section-bg-primary bg-primary min-h-[1400px]' 
        >
            <div className='container mx-auto'>
                <div className='flex flex-col items-center text-center'>
                    <h2 className='section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block'>My latest work</h2>
                    <p className='subtitles'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed aliquam orci, vestibulum cursus sem.
                    </p>
                </div>
                <Projects />
            </div>
        </section>
    )
}

export default Portfolio

import React from 'react';
import { Carousel } from 'react-bootstrap';
import CarouselItemsData from '../Helpers/CarouselItemsData';
import '../styles/Home.css';


function Home() {
    return <>
        <div className='af-height-90 af-max-width mx-auto mt-2'>
            <Carousel>
                <Carousel.Item>
                    <img
                        srcSet={`
                          ${CarouselItemsData[0].link200} 200w,
                          ${CarouselItemsData[0].link400} 400w,
                          ${CarouselItemsData[0].link600} 600w,
                          ${CarouselItemsData[0].link800} 800w,
                          ${CarouselItemsData[0].link1000} 1000w,
                          ${CarouselItemsData[0].link1200} 1200w,
                          
                          
                          
                        `}

                        src={CarouselItemsData[0].link1200}
                        alt='First slide'
                    />
                    <Carousel.Caption >
                        <div className='af-position-lg af-bg-dark-transparent '>
                            <h3>{CarouselItemsData[0].title}</h3>
                            <p>{CarouselItemsData[0].description}</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        srcSet={`
                          ${CarouselItemsData[1].link200} 200w,
                          ${CarouselItemsData[1].link400} 400w,
                          ${CarouselItemsData[1].link600} 600w,
                          ${CarouselItemsData[1].link800} 800w,
                          ${CarouselItemsData[1].link1000} 1000w,
                          ${CarouselItemsData[1].link1200} 1200w
                    `}
                        src={CarouselItemsData[1].link1200}
                        alt='Third slide'
                    />
                    <Carousel.Caption >
                        <div className='af-position-lg af-bg-dark-transparent '>
                            <h3>{CarouselItemsData[1].title}</h3>
                            <p>{CarouselItemsData[1].description}</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        srcSet={`
                          ${CarouselItemsData[2].link200} 200w,
                          ${CarouselItemsData[2].link400} 400w,
                          ${CarouselItemsData[2].link600} 600w,
                          ${CarouselItemsData[2].link800} 800w,
                          ${CarouselItemsData[2].link1000} 1000w,
                          ${CarouselItemsData[2].link1200} 1200w
                          `}
                        src={CarouselItemsData[2].link1200}
                        alt='Third slide'
                    />
                    <Carousel.Caption>
                        <div className='af-position-lg af-bg-dark-transparent '>
                            <h3>{CarouselItemsData[2].title}</h3>
                            <p>{CarouselItemsData[2].description}</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </div>
    </>
}

export default Home;


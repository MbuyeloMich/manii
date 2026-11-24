import React, { useEffect, useState } from 'react'
import img1 from '../../../../assets/img_13.webp'
import img2 from '../../../../assets/img_14.webp'
import img3 from '../../../../assets/sofas/img_1.jpg'
import img4 from '../../../../assets/beds/img_5.webp'
import img5 from '../../../../assets/beds/img_4.webp'
import useMediaQ from '../../../../hooks/useMediaQ'
 
import SliderNav from './SliderNav'
import Slide from './Slide'
export default function Slider() {

    const slideData = [{
        image: img1,
        name: 'CHESTERFIELD SOFAS AND ARMCHAIRS',
        description: 'How to style traditional upholstered furniture in a range of interiors.'
    }, {
        image: img2,

        name: "Mani at HELPER'S BAZAAR",
        description: "Revisit the day with us and our furniture."
    }, {
        image: img3,
        name: `The "Country House Makeover" show featuring our furniture`,
        description: "Sometimes our standard collection takes the spotlight; other times, we have the privilege of making furniture to a designer's unique brief."
    }, {
        image: img4,
        name: "Our furniture in customers' homes",
        description: "A selection of photos shared by our customers."
    }, {
        image: img5,
        name: "How our beds are made",
        description: "Answers to your questions about our beds."
    },]

    const [transformIndex, setTransformIndex] = useState(0)
    const [activeSlide, setActiveSlide] = useState(7)
    const [adjustTransition, setAdjustTransition] = useState(false)
    const [indicator, setIndicator] = useState(0);

    const query = useMediaQ('(max-width: 769px)');
    function handleNextSlide() {
        setAdjustTransition(true)
        setTransformIndex((prev) => (prev - 1))
        setActiveSlide((prev) => (prev + 1))
    }

    function handlePrevSlide() {
        setAdjustTransition(true)
        setTransformIndex((prev) => (prev + 1))
        setActiveSlide((prev) => (prev - 1))
    }

    function handleTransitionEnd(e) {
        if (e.propertyName === 'left') {
            setAdjustTransition(false)
        }
    }

    useEffect(() => {
        setTransformIndex(0)
        setIndicator(0)
        setActiveSlide(7)
    }, [query])

    return (<>

        <div className='slider-container'>
            <div className='slider-wrapper row gap-20'
                onTransitionEnd={(e) => handleTransitionEnd(e)}
                style={{
                    transition: adjustTransition ? 'var(--transition) 1s left' : 'none',
                    left: `calc(${transformIndex} * (var(--projects-slider-img-width) + 20px))`,
                }}
            >
                {
                    [...slideData, ...slideData, ...slideData].map((el, i) => {
                        return <Slide
                            key={i}
                            activeSlide={activeSlide}
                            el={{ index: i, ...el }}
                            adjustTransition={adjustTransition}
                        />
                    })
                }
            </div>

        </div>
        <SliderNav
            indicator={indicator}
            transformIndex={transformIndex}
            setIndicator={setIndicator}
            onPrev={handlePrevSlide}
            onNext={handleNextSlide}
        />
    </>

    )
}

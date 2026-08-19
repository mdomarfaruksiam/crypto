import React, { useEffect, useRef, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

import ImgPlaceholder from '../../public/ImgPlaceholder2.png'

export default function CustomresFeedBack() {

    const sliderRef = useRef(null)

    const feedbacks = [
        {
            name: 'Linda Frances',
            position: 'CEO “Blockchain LTD”',
            feedback:
                '“Nunc congue sit amet ex eu suscipit. Praesent in consequat ligula. Etiam faucibus ligula augue, non tempor justo blandit rutrum. Aenean scelerisque sed tellus nec pretium. Curabitur at orci arcu. Maecenas vitae mattis urna, eu faucibus massa”'
        },
        {
            name: 'John Smith',
            position: 'CEO “Crypto LTD”',
            feedback:
                '“Praesent in consequat ligula. Etiam faucibus ligula augue, non tempor justo blandit rutrum. Aenean scelerisque sed tellus nec pretium. Curabitur at orci arcu. Maecenas vitae mattis urna, eu faucibus massa”'
        },
        {
            name: 'Michael Brown',
            position: 'Founder “Web3 LTD”',
            feedback:
                '“Etiam faucibus ligula augue, non tempor justo blandit rutrum. Aenean scelerisque sed tellus nec pretium. Curabitur at orci arcu. Maecenas vitae mattis urna, eu faucibus massa”'
        },
        {
            name: 'Sarah Wilson',
            position: 'Director “Finance LTD”',
            feedback:
                '“Duis sapien metus, egestas rhoncus metus id, dignissim malesuada. Aenean scelerisque sed tellus nec pretium. Curabitur at orci arcu. Maecenas vitae mattis urna, eu faucibus massa”'
        },
        {
            name: 'John Smith',
            position: 'CEO “Crypto LTD”',
            feedback:
                '“Praesent in consequat ligula. Etiam faucibus ligula augue, non tempor justo blandit rutrum. Aenean scelerisque sed tellus nec pretium. Curabitur at orci arcu. Maecenas vitae mattis urna, eu faucibus massa”'
        },
        {
            name: 'Michael Brown',
            position: 'Founder “Web3 LTD”',
            feedback:
                '“Etiam faucibus ligula augue, non tempor justo blandit rutrum. Aenean scelerisque sed tellus nec pretium. Curabitur at orci arcu. Maecenas vitae mattis urna, eu faucibus massa”'
        },
        {
            name: 'Sarah Wilson',
            position: 'Director “Finance LTD”',
            feedback:
                '“Duis sapien metus, egestas rhoncus metus id, dignissim malesuada. Aenean scelerisque sed tellus nec pretium. Curabitur at orci arcu. Maecenas vitae mattis urna, eu faucibus massa”'
        }
    ]

    const [activeDot, setActiveDot] = useState(0)

    /*
        Small device:
        1 card per slide
        4 cards = 4 dots

        Bigger device:
        2 cards per slide
        4 cards = 2 dots
    */
    const getTotalSlides = () => {
        if (window.innerWidth >= 768) {
            return Math.ceil(feedbacks.length / 2)
        }

        return feedbacks.length
    }

    const [totalSlides, setTotalSlides] = useState(
        typeof window !== 'undefined'
            ? getTotalSlides()
            : feedbacks.length
    )

    useEffect(() => {

        const handleResize = () => {
            setTotalSlides(getTotalSlides())
            setActiveDot(0)

            if (sliderRef.current) {
                sliderRef.current.scrollTo({
                    left: 0,
                    behavior: 'smooth'
                })
            }
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }

    }, [])

    const scrollLeft = () => {

        if (!sliderRef.current) return

        sliderRef.current.scrollBy({
            left: -sliderRef.current.clientWidth,
            behavior: 'smooth'
        })
    }

    const scrollRight = () => {

        if (!sliderRef.current) return

        sliderRef.current.scrollBy({
            left: sliderRef.current.clientWidth,
            behavior: 'smooth'
        })
    }

    const handleScroll = () => {

        if (!sliderRef.current) return

        const scrollLeft = sliderRef.current.scrollLeft
        const width = sliderRef.current.clientWidth

        const index = Math.round(scrollLeft / width)

        setActiveDot(index)
    }

    const goToSlide = (index) => {

        if (!sliderRef.current) return

        sliderRef.current.scrollTo({
            left: sliderRef.current.clientWidth * index,
            behavior: 'smooth'
        })

        setActiveDot(index)
    }

    return (
        <div className='container mx-auto flex flex-col justify-center items-center gap-4 px-4 py-10'>

            {/* Heading */}
            <h1 className='font-bold text-[28px] md:text-[34px] text-center'>
                Customers Feedback
            </h1>

            {/* Description */}
            <p className='font-["lato"] text-[#727272] text-center md:w-1/2 leading-6'>
                Nullam vestibulum, justo vitae varius interdum, nibh turpis
                eleifend tellus, sit amet porttitor orci erat vitae odio.
                Duis sapien metus, egestas rhoncus metus id, dignissim malesuada
            </p>

            {/* Slider */}
            <div className='w-full flex items-center gap-3 md:gap-6 mt-6'>

                {/* Left Button */}
                <button
                    onClick={scrollLeft}
                    className='
                        shrink-0
                        w-9 h-9
                        md:w-11 md:h-11
                        flex items-center justify-center
                        rounded-full
                        cursor-pointer
                        transition-all duration-300
                        hover:bg-[#d8d3d3]
                        hover:scale-110
                    '
                >
                    <FaChevronLeft />
                </button>

                {/* Cards */}
                <div
                    ref={sliderRef}
                    onScroll={handleScroll}
                    className='
                        w-full
                        flex
                        gap-6
                        overflow-x-auto
                        snap-x
                        snap-mandatory
                        scroll-smooth
                        scrollbar-none
                        [-ms-overflow-style:none]
                        [&::-webkit-scrollbar]:hidden
                    '
                >

                    {feedbacks.map((feedback, index) => (

                        <div
                            key={index}
                            className='
                                shrink-0
                                w-full
                                md:w-[calc(50%-12px)]
                                flex flex-col
                                gap-4
                                bg-[#F5F5FF]
                                p-4 md:p-5
                                rounded-lg
                                snap-start
                                transition-all duration-300
                                hover:-translate-y-1
                                hover:shadow-lg
                            '
                        >

                            {/* Customer Info */}
                            <div className='flex items-center'>

                                <img
                                    className='
                                        w-14 h-14
                                        md:w-16 md:h-16
                                        mr-4
                                        rounded-full
                                        object-cover
                                    '
                                    src={ImgPlaceholder}
                                    alt={feedback.name}
                                />

                                <div>
                                    <h2 className='font-bold'>
                                        {feedback.name}
                                    </h2>

                                    <p className='font-["lato"] text-[#727272]'>
                                        {feedback.position}
                                    </p>
                                </div>

                            </div>

                            {/* Feedback */}
                            <div className='font-["lato"] text-[#727272] leading-6'>
                                {feedback.feedback}
                            </div>

                        </div>

                    ))}

                </div>

                {/* Right Button */}
                <button
                    onClick={scrollRight}
                    className='
                        shrink-0
                        w-9 h-9
                        md:w-11 md:h-11
                        flex items-center justify-center
                        rounded-full
                        cursor-pointer
                        transition-all duration-300
                        hover:bg-[#d8d3d3]
                        hover:scale-110
                    '
                >
                    <FaChevronRight />
                </button>

            </div>

            {/* Dots */}
            <div className='flex items-center justify-center gap-2 mt-2'>

                {Array.from({ length: totalSlides }).map((_, index) => (

                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`
                            rounded-full
                            transition-all duration-300
                            cursor-pointer
                            ${activeDot === index
                                ? 'w-7 h-2 bg-[#FF5851]'
                                : 'w-2 h-2 bg-[#d8d3d3] hover:bg-[#FF5851]'
                            }
                        `}
                    />

                ))}

            </div>

        </div>
    )
}
import React, { useEffect, useState } from 'react'

export default function PreSaleTimer() {

    // Set your presale end date here
    const targetDate = new Date('2026-09-19T00:00:00').getTime()

    const calculateTimeLeft = () => {

        const difference = targetDate - new Date().getTime()

        if (difference <= 0) {
            return {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0
            }
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor(
                (difference / (1000 * 60 * 60)) % 24
            ),
            minutes: Math.floor(
                (difference / (1000 * 60)) % 60
            ),
            seconds: Math.floor(
                (difference / 1000) % 60
            )
        }
    }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

    useEffect(() => {

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000)

        return () => clearInterval(timer)

    }, [])

    return (
        <div className='text-white rounded-md flex flex-col gap-4 p-4'>

            <p className='text-center text-[#C9B5E5] font-bold'>
                Pre-Sale ICO starts in
            </p>

            <div className='flex justify-around items-center'>

                {/* Days */}
                <div className='flex flex-col items-center'>
                    <span className='text-[#FF5851] font-bold text-2xl'>
                        {String(timeLeft.days).padStart(2, '0')}
                    </span>

                    <span className='text-[#C9B5E5] font-bold text-xs'>
                        Days
                    </span>
                </div>

                <span className='text-[#C9B5E5] font-bold text-xl'>
                    :
                </span>

                {/* Hours */}
                <div className='flex flex-col items-center'>
                    <span className='text-[#FF5851] font-bold text-2xl'>
                        {String(timeLeft.hours).padStart(2, '0')}
                    </span>

                    <span className='text-[#C9B5E5] font-bold text-xs'>
                        Hours
                    </span>
                </div>

                <span className='text-[#C9B5E5] font-bold text-xl'>
                    :
                </span>

                {/* Minutes */}
                <div className='flex flex-col items-center'>
                    <span className='text-[#FF5851] font-bold text-2xl'>
                        {String(timeLeft.minutes).padStart(2, '0')}
                    </span>

                    <span className='text-[#C9B5E5] font-bold text-xs'>
                        Min
                    </span>
                </div>

                <span className='text-[#C9B5E5] font-bold text-xl'>
                    :
                </span>

                {/* Seconds */}
                <div className='flex flex-col items-center'>
                    <span className='text-[#FF5851] font-bold text-2xl'>
                        {String(timeLeft.seconds).padStart(2, '0')}
                    </span>

                    <span className='text-[#C9B5E5] font-bold text-xs'>
                        Sec
                    </span>
                </div>

            </div>

        </div>
    )
}
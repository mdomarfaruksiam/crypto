import React from 'react'
import { TiTick } from "react-icons/ti";
import ImgPlaceholder2 from '../../public/ImgPlaceholder2.png'
import bg4 from '../../public/bg4.png'


export default function MoreQuestions() {
    const question = [
        {
            que: 'Solid variety of altcoin choices:',
            ans: 'Aliquam bibendum mi egestas mi tempus hendrerit lorem ipsum dolor'
        },
        {
            que: 'Extremely simple user interface:',
            ans: 'Elementum ligula, non posuere metus. Aliquam bibendum mi egestas mi tempus hendrerit'
        },
        {
            que: 'Extremely simple user interface:',
            ans: 'Elementum ligula, non posuere metus. Aliquam bibendum mi egestas mi tempus hendrerit'
        },
    ]
    return (
        <div className='p-2 pt-20 flex gap-4 items-center'>
            <div className='w-full'>
                <h1 className='font-bold text-[42px] text-[#1920E0]'>
                    Somemore Questions
                </h1>
                <div className='flex flex-col gap-5 mt-8 m-2'>
                    {question.map((q, i) => (
                        <div
                            key={i}
                            className='flex flex-col gap-2'>
                            <div className='flex gap-2 items-center'>
                                <TiTick className='text-blue-600' />
                                <h2 className='font-bold'>{q.que}</h2>
                            </div>
                            <p>
                                {q.ans}
                            </p>
                        </div>
                    ))}
                </div>
                <button className='p-2 bg-[red] rounded-2xl px-4 font-bold my-4 text-white'>Read more</button>

            </div>
            <div
                className="w-full hidden md:block "
            >
                <img className='relative z-10' src={ImgPlaceholder2} alt="" />
                <img className='absolute bottom-20 z-0' src={bg4} alt="" />
            </div>
        </div>
    )
} 

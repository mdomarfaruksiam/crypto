import React from 'react'
import { IoIosCall, IoMdMail } from "react-icons/io";



import PagePath from '../components/PagePath'
import { IoLocation } from 'react-icons/io5';
import ContactForm from '../components/ContactForm';
import Suggestions from '../components/Suggestions';

export default function Contact() {
    return (
        <main>
            <PagePath path={'Contact Us'} />
            <div className='flex flex-wrap gap-8 justify-center items-center py-10'>
                <div className='flex flex-col justify-center gap-2 items-center'>
                    <div className='text-[#00C3B7] text-[28px] p-2 rounded-[50%] shadow shadow-[#00C3B7] w-12 h-12 flex items-center justify-center'>
                        <IoMdMail />
                    </div>
                    <h1 className='font-bold text-[20px]'>Email</h1>
                    <p className='flex flex-col justify-center items-center text-[#727272] text-[16px] font-bold font-["lato"]'>
                        <span>monnersupport@email.com</span>
                        <span>monnerhr@email.com</span>
                    </p>
                </div>


                <div className='flex flex-col justify-center gap-2 items-center'>
                    <div className='text-[#00C3B7] text-[28px] p-2 rounded-[50%] shadow shadow-[#00C3B7] w-12 h-12 flex items-center justify-center'>
                        <IoIosCall />
                    </div>
                    <h1 className='font-bold text-[20px]'>Call Us</h1>
                    <p className='flex flex-col justify-center items-center text-[#727272] text-[16px] font-bold font-["lato"]'>
                        <span>(+1) 123-123-123</span>
                        <span>(+1) 123-123-123</span>
                    </p>
                </div>


                <div className='flex flex-col justify-center gap-2 items-center'>
                    <div className='text-[#00C3B7] text-[28px] p-2 rounded-[50%] shadow shadow-[#00C3B7] w-12 h-12 flex items-center justify-center'>
                        <IoLocation />
                    </div>
                    <h1 className='font-bold text-[20px]'>Location</h1>
                    <p className='flex flex-col justify-center items-center text-[#727272] text-[16px] font-bold font-["lato"]'>
                        <span>275 Jimmy Way</span>
                        <span>Copperopolis, California(CA), 95228</span>
                    </p>
                </div>
            </div>
            <ContactForm />
            <div className='bg-[#F2F2FF]'>
                <Suggestions />
            </div>
        </main>
    )
}

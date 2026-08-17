import React from 'react'
import Input from '../utils/Input'
import Button from '../utils/Button'

export default function ContactForm() {
    return (
        <form className='container mx-auto p-2 py-10 flex flex-col gap-8'>
            <h1 className='font-bold text-[34px] text-center'>We are ready to help grow your idea</h1>
            <p className='font-["lato"] text-[#727272] text-center'>Ut feugiat dictum consequat. Aenean varius, augue malesuada eleifend faucibus</p>
            <div className='grid grid-cols-2 gap-4 p-2 lg:w-1/2 m-auto'>
                <Input
                    type={'text'}
                    placeholder={'Your Name'} />
                <Input
                    type={'text'}
                    placeholder={'Your Email'} />
                <Input
                    type={'text'}
                    placeholder={'Company Name'} />
                <Input
                    type={'text'}
                    placeholder={'Phone Number'} />

                <Input
                    type={'textarea'}
                    placeholder={'Tell About Your Project'}
                    className={'col-span-2 row-span-10'} />
                <div className='col-span-2 flex justify-center'>
                    <Button
                        label={'Send'}
                        className='bg-[linear-gradient(to_right,#FF357D_0%,#FF6F33_100%)] w-1/2 max-w-50 font-semibold' />
                </div>
            </div>
        </form>
    )
}

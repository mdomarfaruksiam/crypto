import React from 'react'
import Input from '../utils/Input'
import Button from '../utils/Button'

export default function MessageQuestion() {
    return (
        <div className='container m-auto py-20'>
            <h1 className='font-bold text-[42px] text-[#1920E0]'>Need More Answers?</h1>
            <form
                className='grid grid-cols-2 gap-4 py-4 p-2 md:w-1/2'>
                <Input
                    type={'textarea'}
                    placeholder={'Your questions'}
                    className='col-span-2' />
                <Input
                    type='text'
                    placeholder={'Your Name'} />
                <Input
                    type={'email'}
                    placeholder={'Your Email'} />
                <Input
                    name="rememberMe"
                    type="checkbox"
                    label="Remember me"
                    className="col-span-2 text-left my-2"
                />
                <Button
                    label={'Send'}
                    className='bg-[linear-gradient(to_right,#FF357D_0%,#FF6F33_100%)] lg:w-1/2 w-full max-w-60 font-semibold' />
            </form>
        </div>
    )
}

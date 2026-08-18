import React from 'react'

import { FaArrowRight, FaSearch } from "react-icons/fa";



import PagePath from '../components/PagePath'


import ImgPlaceholder from '../../public/ImgPlaceholder2.png'
import Input from '../utils/Input';
import Button from '../utils/Button';
import PreSaleTimer from '../components/PreSaleTimer';
import BlogPost from '../components/BlogPost';
import BlogSearch from '../components/BlogSearch';

export default function Blog() {
    return (
        <main>
            <PagePath path={'Blog'} />
            <div className='container mx-auto p-2 flex flex-col md:flex-row justify-center gap-4'>

                <div className='flex flex-col justify-center items-center gap-4 w-[80%] mx-auto md:order-1 order-2'>
                    <BlogPost />
                </div>
                <BlogSearch />
            </div>
        </main>
    )
}

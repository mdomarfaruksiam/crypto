import React from 'react'

import TimeLine from '../../public/Timeline.png'

export default function MarketReporterApp() {
    return (
        <section className='container mx-auto p-2 py-42 flex flex-col gap-8'>
            <h1 className='font-bold text-[34px] text-black text-center'>Market Reporter App</h1>
            <p className='font-["lato"] text-center text-[#727272]'>Phasellus sodales est id sapien condimentum sagittis. Vivamus eget lorem augue. Nunc ut diam tellus. Fusce mattis luctus sem, sollicitudin tincidunt ante ullamcorper non. Ut feugiat dictum consequat. Aenean varius, augue malesuada eleifend faucibus</p>
            <img src={TimeLine} alt="" />
        </section>
    )
}

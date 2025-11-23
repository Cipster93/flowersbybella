import React from 'react'
import SwiperImg from '../components/SwiperImg'
import About from './About'
import Topics from './Topics'
import Events from '../home/Events'
import QRCode from './CodeQr'
import WeeklyOffers from '../components/WeeklyOffers'

const HomeView = () => {
    return (
        <main className="w-full h-auto flex bg-black flex-col items-center sm:gap-1 sm:py-2 gap-6 py-6">
            {/* <WeeklyOffers /> */}
            <SwiperImg />
            <About />
            <Topics />
            <Events />
            <QRCode />
        </main>
    )
}

export default HomeView

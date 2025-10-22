import React from 'react'
import SwiperImg from '../components/SwiperImg'
import About from './About'
import Topics from './Topics'
import Events from '../home/Events'
import QRCode from './CodeQr'

const HomeView = () => {
    return (
        <main className="w-full h-auto flex flex-col items-center gap-16 py-6">
            <SwiperImg />
            <About />
            <Topics />
            <Events />
            <QRCode />
        </main>
    )
}

export default HomeView

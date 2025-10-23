import Image from 'next/image'
import React from 'react'
import {dancingScript, caveat} from '../lib/fonts'

const Events = () => {
    return (
        <section
            role="region"
            aria-label="Evenimente Flowers by Bella"
            className="w-full bg-black py-2 flex flex-col lg:flex-row items-center justify-center gap-12 px-2"
        >
            {/* Left banner */}
            <div className="w-full lg:w-1/3 flex justify-center">
                <Image
                    src="/banner_left1.jpg"
                    alt="Decor floral Flowers by Bella pentru evenimente"
                    width={380}
                    height={380}
                    className="w-full max-w-sm h-160 object-contain rounded-xl shadow-lg"
                />
            </div>

            {/* Center content */}
            <div className="w-full lg:w-1/3 text-center flex flex-col items-center justify-center gap-10">
                <header>
                    <h2 className={`text-3xl md:text-7xl font-bold bg-black text-yellow-500 mb-4 font-serif ${dancingScript.className}`}>
                        Flowers by Bella la evenimente
                    </h2>
                    <p className={`text-gray-300 text-2xl md:text-2xl leading-relaxed bg-black ${caveat.className}`}>
                        Flowers by Bella participa la nunti, botezuri, evenimente corporate si expozitii locale,
                        aducand un strop de eleganta si rafinament in fiecare moment special. Oferim aranjamente florale
                        personalizate, consultanta florala dedicata pentru a transforma fiecare spatiu intr-un decor memorabil
                        si livrare la eveniment, prompt si sigur. Echipa noastra este pasionata de detalii, combinand culorile
                        si formele pentru a crea experiente vizuale unice. Contacteaza-ne pentru colaborari si pachete speciale,
                        concepute sa se potriveasca perfect stilului si tematicii evenimentului tau.
                    </p>
                </header>
            </div>

            {/* Right banner */}
            <div className="w-full lg:w-1/3 flex justify-center">
                <Image
                    src="/banner_right2.jpg"
                    alt="Decor floral Flowers by Bella pentru evenimente"
                    width={380}
                    height={380}
                    className="w-full max-w-sm h-160 object-contain rounded-xl shadow-lg"
                />
            </div>
        </section>
    )
}

export default Events

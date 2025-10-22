'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import about from '../../public/about.jpg'

export default function About() {
    return (
        <main
            role="main"
            aria-label="Despre Flowers by Bella"
            className='relative w-full flex flex-col md:flex-row items-center justify-center py-20 px-6 md:px-20'
        >
            <section
                aria-label="Imagine Flowers by Bella"
                className='relative w-full md:w-1/2 h-80 md:h-[500px] flex items-center justify-center'
            >
                <Image
                    src={about}
                    alt='Flowers by Bella'
                    className='object-cover rounded-xl shadow-2xl z-[-1]'
                    fill
                />
            </section>
            <section
                aria-label="Descriere Flowers by Bella"
                className='w-full md:w-1/2 mt-10 md:mt-0 md:pl-16 text-gray-300 border-r-2 border-yellow-500 px-6'
            >
                <header>
                    <motion.h1
                        className='text-3xl md:text-4xl font-bold font-serif text-yellow-500 mb-4 text-center'
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        viewport={{ once: true }}
                    >
                        Flowers by Bella
                    </motion.h1>
                </header>
                <motion.p
                    className='text-lg md:text-xl leading-relaxed'
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    Un loc unde visele infloresc in fiecare petala, iar pasiunea pentru frumos se transforma in arta.
                    Fiecare floare care ajunge in mainile noastre este atent selectata, fiecare aranjament se naste din inspiratie si dragostea creatorului sau, iar fiecare compozitie spune o poveste unica.
                    Aici, delicatețea intalneste eleganta, culorile si aromele trezesc emotii, iar natura efemera a florii devine un moment memorabil.
                    Flowers by Bella nu este doar o florarie: este un vis devenit realitate, un omagiu adus naturii si artei de a transmite sentimente prin frumusete.
                </motion.p>
            </section>
        </main>
    )
}

'use client'
import React from 'react'

const Header = () => {
  return (
    <header
      role="banner"
      aria-label="Header principal Flowers by Bella"
      className="w-full h-auto flex flex-col items-center justify-center py-8 text-center gap-8 bg-black"
    >
      <h1 className="text-8xl font-extrabold text-yellow-400 font-serif tracking-wider">
        <span className="inline-block text-white text-5xl align-middle font-serif">~</span>
        Flowers by Bella
        <span className="inline-block text-white text-5xl align-middle font-serif">~</span>
      </h1>

      <p
        className="text-xl text-gray-300 font-serif max-w-md flex"
        aria-label="Descriere brand Flowers by Bella"
      >
        Emotie, rafinament si eleganta in fiecare petala.
      </p>
    </header>
  )
}

export default Header

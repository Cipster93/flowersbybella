'use client'
import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatupContact() {
    const [isMobile, setIsMobile] = useState(true); 
    const [show, setShow] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            const mobile = window.innerWidth < 1024;
            setIsMobile(mobile);
            if (!mobile) setShow(true); 
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <aside
            role="complementary"
            aria-label="Contact WhatsApp Flowers by Bella"
            className={`relative flex items-center gap-2 text-green-500 text-4xl cursor-pointer ${!isMobile ? 'group' : ''}`}
            onMouseEnter={() => !isMobile && setShow(true)}
        >
            <span
                onClick={() => isMobile && setShow((s) => !s)}
                className={`transition-transform duration-300 ${!isMobile ? 'group-hover:scale-110 group-hover:text-green-400' : ''} drop-shadow-lg`}
                aria-label="Deschide conversație WhatsApp"
            >
                <FaWhatsapp />
            </span>

            {show && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-label="Detalii contact WhatsApp"
                    className="absolute left-0 bottom-full -translate-x-[90%] mb-4 z-50 bg-black text-white rounded-2xl p-5 min-w-[320px] shadow-2xl flex flex-col items-start animate-fade-in"
                >
                    <button
                        className="absolute top-2 right-2 text-yellow-500 text-2xl font-bold rounded-full bg-black/40 px-2 py-0.5 shadow-md"
                        onClick={() => setShow(false)}
                        aria-label="Închide detalii WhatsApp"
                    >
                        ×
                    </button>

                    <header className="flex items-center gap-2 mb-2">
                        <FaWhatsapp className="text-green-400 text-2xl drop-shadow" />
                        <h2 className="font-bold text-yellow-400 text-lg tracking-wide">Contact WhatsApp</h2>
                    </header>

                    <p className="text-sm mb-2 font-medium text-gray-200">
                        Comenzi rapide, întrebări sau detalii despre flori și aranjamente.
                    </p>

                    <p className="text-sm mb-1">
                        <span className="font-semibold text-yellow-400">Număr: 0728-361-107</span>
                    </p>

                    <p className="text-xs text-gray-300 mt-2 italic">
                        Răspundem rapid pe WhatsApp!
                    </p>
                </div>
            )}
        </aside>
    );
}

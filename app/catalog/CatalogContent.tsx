import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { dinamicCategory } from '../types/dinamicCat';


const CatalogCategories = () => {
    return (
        <main className="w-full min-h-screen flex flex-col items-center py-12">
            <h1 className="text-4xl md:text-4xl font-serif font-bold text-yellow-500 mb-4 text-center">
                Categorii Flowers by Bella
            </h1>
            <p className="text-lg md:text-base text-gray-300 mb-6 max-w-3xl text-center">
                Explorează categoriile noastre de buchete și aranjamente florale — fiecare creat cu grijă și rafinament pentru orice ocazie specială.
            </p>

            <section className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full px-3">
                {dinamicCategory.map((cat, idx) => (
                    <div
                        key={idx}
                        className="rounded-2xl shadow-lg p-3 flex flex-col items-center border-t-2 border-b-2 border-yellow-500 bg-black/70"
                    >
                        <Image
                            src={cat.img}
                            alt={cat.name}
                            width={384}
                            height={384}
                            className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-xl mb-4"
                        />
                        <h2 className="text-2xl md:text-3xl font-semibold text-yellow-500 mb-2 text-center">
                            {cat.name}
                        </h2>
                        <p className="text-gray-300 text-center mb-4 text-lg md:text-base">
                            {cat.desc}
                        </p>
                        <Link
                            href={`/catalog/${cat.slug}`}
                            className="bg-yellow-400 text-white px-4 py-1 rounded-full font-semibold hover:bg-yellow-500 transition"
                        >
                            Vezi detalii
                        </Link>
                    </div>
                ))}
            </section>
        </main>
    );
};

export default CatalogCategories;

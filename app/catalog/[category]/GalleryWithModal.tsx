"use client";

import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import ImageModal from "../../components/ImageModal";
import { caveat } from "@/app/lib/fonts";
import type { DinamicCategory } from "@/app/types/dinamicCat";

interface CategoryClientProps {
    foundCategory: DinamicCategory;
    flowers: { name: string; img?: string; imgTop?: string; imgBottom?: string; desc: string; price?: number }[];
}


export default function CategoryClient({ foundCategory, flowers }: CategoryClientProps) {
    const [modalImage, setModalImage] = useState<string | null>(null);

    if (foundCategory.slug === "nunti-si-botezuri") {
        return (
            <>
                <Head>
                    <title>{`Nunti și botezuri | Flori, lumânări și buchete de mireasă`}</title>
                    <meta name="description" content="Descoperă colecția noastră de buchete de mireasă, lumânări și aranjamente florale pentru nunți și botezuri. Calitate, eleganță și rafinament cu diacritice!" />
                    <meta name="keywords" content="nunti, botezuri, buchete de mireasă, lumânări, flori, aranjamente florale, eleganță, rafinament, oferte, momente de neuitat, flori cu diacritice" />
                </Head>
                <main className="min-h-screen py-10 px-4 w-full">
                    <div className="mx-auto">
                        <h1 className={` text-4xl md:text-4xl font-bold text-yellow-500 mb-1 text-center`}>
                            {foundCategory.name}
                        </h1>
                        <p className={`${caveat.className} text-xl md:text-xl text-gray-300 mb-6 text-center max-w-3xl mx-auto`}>
                            {foundCategory.desc}
                        </p>
                        <div className={` text-4xl md:text-6xl font-bold text-yellow-500 mb-1 py-3 text-center`}>
                            <u><h2 className="">Buchete și lumânări</h2></u>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {flowers
                                .filter(flower => {
                                    const top = flower.imgTop || "";
                                    const bottom = flower.imgBottom || "";
                                    const topOk = /bl\d+\.[a-zA-Z0-9]+$/.test(top);
                                    const bottomOk = /l\d+\.[a-zA-Z0-9]+$/.test(bottom);
                                    return topOk && bottomOk;
                                })
                                .map((flower, idx) => (
                                    <div key={idx} className="rounded-3xl px-2 py-3 flex flex-col items-center border-t-2 border-b-2 border-yellow-500 bg-black/80">
                                        <h2 className={` text-3xl font-semibold text-yellow-500 mb-1 text-center`}>
                                            {flower.name} - {idx + 1}
                                        </h2>
                                        <Image
                                            src={flower.imgTop || ""}
                                            alt={flower.name + " sus"}
                                            width={384}
                                            height={192}
                                            className="w-72 h-72 md:w-80 md:h-72 object-cover rounded-2xl mb-2 cursor-pointer"
                                            onClick={() => setModalImage(flower.imgTop ?? "")}
                                        />
                                        <p className={`${caveat.className} text-3xl text-yellow-500 text-center p-2 h-auto`}>
                                            Lumanari
                                        </p>
                                        <Image
                                            src={flower.imgBottom || ""}
                                            alt={flower.name + " jos"}
                                            width={384}
                                            height={192}
                                            className="w-72 h-72 md:w-80 md:h-72 object-cover rounded-2xl mt-2 cursor-pointer"
                                            onClick={() => setModalImage(flower.imgBottom ?? "")}
                                        />
                                        <p className={` text-3xl font-semibold text-yellow-500 text-center py-2`}>
                                            Preț: <span className="text-white">{flower.price} lei</span>
                                        </p>
                                        <p className={` text-2xl font-semibold text-yellow-500 text-center py-2`}>
                                            <a
                                                href="https://wa.me/40728361107"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hover:text-yellow-400 transition"
                                            >
                                                Comandă aici
                                            </a>
                                        </p>
                                    </div>
                                ))}
                        </div>
                    </div>
                    <div className="mx-auto">
                        <div className={` text-4xl md:text-6xl font-bold text-yellow-500 mb-1 py-3 text-center`}>
                            <u><h2 className="">Lumânări</h2></u>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {flowers
                                .filter(flower =>
                                    (flower.img || flower.imgTop || flower.imgBottom)?.match(/\/lumanare\d+\.webp$/i)
                                )
                                .map((flower, idx) => (
                                    <div key={idx} className="rounded-3xl px-2 py-3 flex flex-col items-center border-t-2 border-b-2 border-yellow-500 bg-black/80">
                                        <h2 className={` text-3xl font-semibold text-yellow-500 mb-1 text-center`}>
                                            {flower.name} - {idx + 1}
                                        </h2>
                                        <Image
                                            src={flower.img || ""}
                                            alt={flower.name}
                                            width={384}
                                            height={192}
                                            className="w-72 h-72 md:w-80 md:h-72 object-cover rounded-2xl mb-2 cursor-pointer"
                                            onClick={() => setModalImage(flower.img ?? "")}
                                        />
                                        <p className={` text-3xl font-semibold text-yellow-500 text-center py-2`}>
                                            Preț: <span className="text-white">{flower.price} lei</span>
                                        </p>
                                        <p className={` text-2xl font-semibold text-yellow-500 text-center py-2`}>
                                            <a
                                                href="https://wa.me/40728361107"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hover:text-yellow-400 transition"
                                            >
                                                Comandă aici
                                            </a>
                                        </p>
                                    </div>
                                ))}
                        </div>
                    </div>
                    <div className="mx-auto">
                        <div className={` text-4xl md:text-6xl font-bold text-yellow-500 mb-1 py-3 text-center`}>
                            <u><h2 className="">Buchete de mireasă</h2></u>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {flowers
                                .filter(flower =>
                                    (flower.img || flower.imgTop || flower.imgBottom)?.match(/\/buc[1-9]\.webp$/i)
                                )
                                .map((flower, idx) => (
                                    <div key={idx} className="rounded-3xl px-2 py-3 flex flex-col items-center border-t-2 border-b-2 border-yellow-500 bg-black/80">
                                        <h2 className={` text-3xl font-semibold text-yellow-500 mb-1 text-center`}>
                                            {flower.name} - {idx + 1}
                                        </h2>
                                        <Image
                                            src={flower.img || ""}
                                            alt={flower.name}
                                            width={384}
                                            height={192}
                                            className="w-72 h-72 md:w-80 md:h-72 object-cover rounded-2xl mb-2 cursor-pointer"
                                            onClick={() => setModalImage(flower.img ?? "")}
                                        />
                                        <p className={` text-3xl font-semibold text-yellow-500 text-center py-2`}>
                                            Preț: <span className="text-white">{flower.price} lei</span>
                                        </p>
                                        <p className={` text-2xl font-semibold text-yellow-500 text-center py-2`}>
                                            <a
                                                href="https://wa.me/40728361107"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hover:text-yellow-400 transition"
                                            >
                                                Comandă aici
                                            </a>
                                        </p>
                                    </div>
                                ))}
                        </div>
                    </div>
                    <ImageModal image={modalImage} onClose={() => setModalImage(null)} />
                </main>

            </>
        );
    }
    return (
        <>
            <Head>
                <title>{`${foundCategory.name} | Catalog flori cu diacritice`}</title>
                <meta name="description" content={`Descoperă colecția de flori, buchete, aranjamente și oferte speciale pentru categoria ${foundCategory.name} cu diacritice!`} />
                <meta name="keywords" content={`flori, buchete, aranjamente, oferte, ${foundCategory.name}, catalog, flori cu diacritice`} />
            </Head>
            <main className="min-h-screen py-10 px-4 w-full">
                <div className="mx-auto">
                    <h1 className={` text-4xl md:text-4xl font-bold text-yellow-500 mb-1 text-center`}>
                        {foundCategory.name}
                    </h1>
                    <p className={`${caveat.className} text-xl md:text-xl text-gray-300 mb-6 text-center max-w-3xl mx-auto`}>
                        {foundCategory.desc}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {flowers.map((flower, idx) => (
                            <div key={idx} className="rounded-3xl px-2 py-3 flex flex-col items-center border-t-2 border-b-2 border-yellow-500">
                                <Image
                                    src={flower.imgTop || flower.img || ""}
                                    alt={flower.name}
                                    width={384}
                                    height={384}
                                    className="w-72 h-72 md:w-80 md:h-86 object-cover rounded-2xl mb-2 cursor-pointer"
                                    onClick={() => setModalImage(flower.img ?? "")}
                                />
                                <h2 className={` text-4xl font-semibold text-yellow-500 mb-1 text-center`}>
                                    {flower.name} - {idx + 1}
                                </h2>
                                <p className={` text-2xl font-semibold text-yellow-500 mb-1 text-center`}>
                                    Preț: <span className="text-white">{flower.price} lei</span>
                                </p>
                                <p className={`${caveat.className} text-xl text-gray-300 text-center p-2 h-auto`}>
                                    {flower.desc}
                                </p>
                                <p className={` text-2xl font-semibold text-yellow-500 text-center py-2`}>
                                    <a
                                        href="https://wa.me/40728361107"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-yellow-400 transition"
                                    >
                                        Comandă aici
                                    </a>
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <ImageModal image={modalImage} onClose={() => setModalImage(null)} />
            </main>
        </>
    );
}
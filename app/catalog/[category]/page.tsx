"use client";
import React, { useState } from "react";
import ImageModal from "../../components/ImageModal";
import { notFound, useRouter } from "next/navigation";
import Image from "next/image";
import { dinamicCategory } from "@/app/types/dinamicCat";


type CategoryParams = { params: Promise<{ category: string }> };

export default function CategoryPage({ params }: CategoryParams) {
    const router = useRouter();
    const { category } = React.use(params);
    const foundCategory = dinamicCategory.find(cat => cat.slug === category);
    if (!foundCategory) return notFound();

    // Example flowers for each category
    const flowers = [
        {
            name: "Trandafir Roșu",
            img: "/flower1.jpg",
            desc: "Simbol al iubirii și pasiunii, perfect pentru orice ocazie romantică.",
        },
        {
            name: "Lalele Galbene",
            img: "/eleganta2.jpg",
            desc: "Aduc veselie și optimism, ideale pentru aniversări și zile însorite.",
        },
        {
            name: "Orhidee Albă",
            img: "/armonie2.jpg",
            desc: "Eleganță pură, potrivită pentru evenimente speciale și decoruri rafinate.",
        },
        {
            name: "Crini Imperiali",
            img: "/modern1.jpg",
            desc: "Florile regalității, aduc noblețe și rafinament oricărui aranjament.",
        },
        {
            name: "Gerbera Roz",
            img: "/rafinament2.jpg",
            desc: "Simbolizează prietenia și bucuria, perfecte pentru a însenina orice zi.",
        },
    ];

    const [modalImage, setModalImage] = useState<string | null>(null);

    return (
        <main className="min-h-screen py-10 px-4 w-full">
            <div className="mx-auto">
                <button
                    onClick={() => router.back()}
                    className="px-6 py-2 text-white rounded-full font-semibold border-2 border-yellow-500"
                >
                    ← Înapoi
                </button>
                <h1 className="text-4xl md:text-4xl font-bold text-yellow-500 mb-1 text-center font-serif">
                    {foundCategory.name}
                </h1>
                <p className="text-xl md:text-lg text-gray-300 mb-6 text-center max-w-3xl mx-auto">
                    {foundCategory.desc}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
                    {flowers.map((flower, idx) => (
                        <div
                            key={idx}
                            className="rounded-3xl shadow-2xl p-3 flex flex-col items-center border-t-2 border-b-2 border-yellow-500"
                        >
                            <Image
                                src={flower.img}
                                alt={flower.name}
                                width={384}
                                height={384}
                                className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-2xl mb-6 cursor-pointer"
                                onClick={() => setModalImage(flower.img)}
                            />
                            <h2 className="text-2xl font-semibold text-yellow-500 mb-1 text-center font-serif">
                                {flower.name}
                            </h2>
                            <p className="text-base text-gray-300 text-center">
                                {flower.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <ImageModal image={modalImage} onClose={() => setModalImage(null)} />
        </main>
    );
}

"use client";

import React, { useState } from "react";
import ImageModal from "../components/ImageModal";
import { motion } from "framer-motion";
import { topics, Topic } from "../types/topics";
import { caveat } from "../lib/fonts";
import Image from "next/image";

const borderStyles = [
  "border-l-2 border-b-2 border-yellow-500 shadow-[0_-4px_15px_rgba(255,215,0,0.1)]",
  "border-r-2 border-b-2 border-yellow-500 shadow-[0_-4px_15px_rgba(255,215,0,0.1)]",
  "border-l-2 border-b-2 border-yellow-500 shadow-[0_-4px_15px_rgba(255,215,0,0.1)]",
  "border-b-2 border-r-2 border-yellow-500 shadow-[0_-4px_15px_rgba(255,215,0,0.1)]",
  "border-b-2 border-l-2 border-yellow-500 shadow-[0_-4px_15px_rgba(255,215,0,0.1)]",
];

const Topics = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="w-full flex flex-col gap-12 items-center justify-center py-12 relative">
      {topics.map((topic: Topic, idx: number) => {
        const reverse = idx % 2 !== 0;
        const borderClass = borderStyles[idx % borderStyles.length];

        return (
          <section
            key={idx}
            aria-label={topic.title}
            className={`w-full flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""
              } items-center justify-between rounded-2xl shadow-2xl p-6 gap-8 ${borderClass}`}
          >
            {/* Text Section */}
            <div className="w-full md:max-w-md md:w-1/3 flex flex-col justify-center items-start h-full gap-4">
              <h2
                className={`text-6xl font-bold text-yellow-600 mb-2 `}
              >
                {topic.title}
              </h2>
              <motion.p
                className={`text-gray-300 text-2xl mb-2 ${caveat.className}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                {topic.desc}
              </motion.p>
            </div>

            {/* Images Section */}
            <div className="w-full md:w-2/3 flex flex-col sm:flex-row gap-6 items-center justify-center">
              {topic.images.map((img: string, i: number) => (
                <figure key={i} className="w-full sm:w-1/3">
                  <Image
                    src={img}
                    alt={`${topic.title} ${i + 1}`}
                    className="w-full h-56 md:h-72 object-cover rounded-xl shadow-md transition-transform duration-300 hover:scale-105 cursor-pointer"
                    onClick={() => setSelectedImage(img)}
                    width={346}
                    height={461}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 346px"
                  />
                </figure>
              ))}
            </div>
          </section>
        );
      })}

      {/* Modală pentru imagine */}
      <ImageModal
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </main>
  );
};

export default Topics;

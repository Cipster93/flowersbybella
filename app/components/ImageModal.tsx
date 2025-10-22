import React from "react";
import { motion } from "framer-motion";

interface ImageModalProps {
    image: string | null;
    onClose: () => void;
}

export default function ImageModal({ image, onClose }: ImageModalProps) {
    if (!image) return null;

    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-label="Vizualizare imagine mărită"
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            onClick={onClose}
        >
            <motion.img
                src={image}
                alt="Imagine mărită"
                className="max-w-[90%] max-h-[85%] rounded-xl shadow-2xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
            />
        </div>
    );
}

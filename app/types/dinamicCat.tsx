export type DinamicCategory = {
    name: string;
    slug: string;
    img: string;
    desc: string;
    price?: string;
};

export const dinamicCategory: DinamicCategory[] = [
    { 
        name: "Oferte", 
        slug: "oferte", 
        img: "/flower1.webp", 
        desc: "Profită de cele mai bune oferte și promoții la buchete și aranjamente florale." 
    },
    { 
        name: "Eleganță", 
        slug: "eleganta", 
        img: "/eleganta2.webp", 
        desc: "Buchete elegante, perfecte pentru evenimente rafinate și momente speciale.",
        price: "50 lei - 150 lei"
    },
    { 
        name: "Rafinament", 
        slug: "rafinament", 
        img: "/eleganta2.webp", 
        desc: "Aranjamente florale cu detalii sofisticate, pentru gusturi exigente.",
        price: "150 lei"
    },
    { 
        name: "Aranjamente", 
        slug: "aranjamente", 
        img: "/armonie2.webp", 
        desc: "Aranjamente florale creative pentru orice ocazie, de la aniversări la evenimente corporate.",
        price: "70 lei"
    },
    { 
        name: "Momente de neuitat", 
        slug: "momente-de-neuitat", 
        img: "/armonie2.webp", 
        desc: "Buchete și aranjamente care transformă orice clipă într-o amintire deosebită.",
        price: "100 lei"
    },
    { 
        name: "Ornamente", 
        slug: "ornamente", 
        img: "/emotie1.webp", 
        desc: "Ornamente florale pentru decorarea spațiilor cu stil și emoție.",
        price: "50 lei"
    },
    { 
        name: "Memorial", 
        slug: "memorial", 
        img: "/modern1.webp", 
        desc: "Compoziții florale pentru momente de reculegere și omagiu.",
        price: "70 lei"
    },
];
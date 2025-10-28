export type DinamicCategory = {
    name: string;
    slug: string;
    img: string;
    desc: string;
    price?: string;
    flowers?: { name: string; img: string; desc: string }[];
};

export const dinamicCategory: DinamicCategory[] = [
    {
        name: "Oferte",
        slug: "oferte",
        img: "/Oferte/of1.webp",
        desc: "Profită de cele mai bune oferte și promoții la buchete și aranjamente florale.",
        flowers: [
            { name: "Buchet Promo", img: "/Oferte/of1.webp", desc: "Buchet promoțional cu flori de sezon." },
            { name: "Aranjament Special", img: "/Oferte/of2.webp", desc: "Aranjament la preț redus." },
            { name: "Cutie Cadou", img: "/Oferte/of3.webp", desc: "Cutie cu flori și surprize." },
            { name: "Cutie Cadou", img: "/Oferte/of4.webp", desc: "Cutie cu flori și surprize." },
            { name: "Cutie Cadou", img: "/Oferte/of5.webp", desc: "Cutie cu flori și surprize." },
            { name: "Cutie Cadou", img: "/Oferte/of6.webp", desc: "Cutie cu flori și surprize." },
            { name: "Cutie Cadou", img: "/Oferte/of7.webp", desc: "Cutie cu flori și surprize." },
        ]
    },
    {
        name: "Eleganță",
        slug: "eleganta",
        img: "/Eleganta/el7.webp",
        desc: "Buchete elegante, perfecte pentru evenimente rafinate și momente speciale.",
        price: "50 lei - 150 lei",
        flowers: [
            { name: "Trandafiri", img: "/Eleganta/el1.webp", desc: "Buchet elegant cu trandafiri, simbol al pasiunii." },
            { name: "Lalele Albe", img: "/Eleganta/el2.webp", desc: "Aranjament rafinat cu lalele albe pentru evenimente speciale." },
            { name: "Orhidee Imperială", img: "/Eleganta/el3.webp", desc: "Cutie cu orhidee, perfectă pentru un cadou sofisticat." },
            { name: "Bujori Roz", img: "/Eleganta/el4.webp", desc: "Buchet cu bujori roz, delicat și elegant." },
            { name: "Crini Albi", img: "/Eleganta/el5.webp", desc: "Aranjament cu crini albi, simbol al purității." },
            { name: "Gerbera Multicoloră", img: "/Eleganta/el6.webp", desc: "Cutie veselă cu gerbera în culori vii." },
            { name: "Mix Floral Elegant", img: "/Eleganta/el7.webp", desc: "Compoziție cu flori de sezon pentru ocazii speciale." },
            { name: "Trandafiri Roz", img: "/Eleganta/el8.webp", desc: "Buchet romantic cu trandafiri roz." },
            { name: "Lalele Galbene", img: "/Eleganta/el9.webp", desc: "Aranjament solar cu lalele galbene." },
            { name: "Orhidee și Frezii", img: "/Eleganta/el10.webp", desc: "Cutie cu orhidee și frezii parfumate." },
            { name: "Crini și Trandafiri", img: "/Eleganta/el12.webp", desc: "Aranjament elegant cu crini și trandafiri." },
            { name: "Bujori și Hortensii", img: "/Eleganta/el13.webp", desc: "Compoziție bogată cu bujori și hortensii." },
            { name: "Cutie Florală Deluxe", img: "/Eleganta/el14.webp", desc: "Cutie de lux cu flori premium pentru ocazii speciale." },
        ]
    },
    {
        name: "Rafinament",
        slug: "rafinament",
        img: "/Rafinament/rf5.webp",
        desc: "Buchete elegante, perfecte pentru evenimente rafinate și momente speciale.",
        price: "50 lei - 150 lei",
        flowers: [
            { name: "Cutie Eleganță 1", img: "/Rafinament/rf1.webp", desc: "Cutie cu flori elegante." },
            { name: "Cutie Eleganță 2", img: "/Rafinament/rf2.webp", desc: "Cutie cu flori elegante." },
            { name: "Cutie Eleganță 3", img: "/Rafinament/rf3.webp", desc: "Cutie cu flori elegante." },
            { name: "Cutie Eleganță 4", img: "/Rafinament/rf4.webp", desc: "Cutie cu flori elegante." },
            { name: "Cutie Eleganță 5", img: "/Rafinament/rf5.webp", desc: "Cutie cu flori elegante." },
            { name: "Cutie Eleganță 6", img: "/Rafinament/rf6.webp", desc: "Cutie cu flori elegante." },
            { name: "Cutie Eleganță 7", img: "/Rafinament/rf7.webp", desc: "Cutie cu flori elegante." },
            { name: "Cutie Eleganță 8", img: "/Rafinament/rf8.webp", desc: "Cutie cu flori elegante." },
            { name: "Cutie Eleganță 9", img: "/Rafinament/rf9.webp", desc: "Cutie cu flori elegante." },
            { name: "Cutie Eleganță 10", img: "/Rafinament/rf10.webp", desc: "Cutie cu flori elegante." },
            { name: "Cutie Eleganță 11", img: "/Rafinament/rf11.webp", desc: "Cutie cu flori elegante." },
            { name: "Cutie Eleganță 12", img: "/Rafinament/rf12.webp", desc: "Cutie cu flori elegante." },
            { name: "Cutie Eleganță 13", img: "/Rafinament/rf13.webp", desc: "Cutie cu flori elegante." },
            { name: "Cutie Eleganță 14", img: "/Rafinament/rf14.webp", desc: "Cutie cu flori elegante." },
            { name: "Cutie Eleganță 15", img: "/Rafinament/rf15.webp", desc: "Cutie cu flori elegante." },
        ]
    },
    {
        name: "Memorial",
        slug: "memorial",
        img: "/Memorial/m24.webp",
        desc: "Buchete elegante, perfecte pentru evenimente rafinate și momente speciale.",
        price: "50 lei - 150 lei",
        flowers: [
            { name: "Cutie Eleganță 1", img: "/Memorial/m1.webp", desc: "Cutie cu flori elegante." },
            { name: "Cutie Eleganță 2", img: "/Memorial/m2.webp", desc: "Cutie cu flori elegante." },
            { name: "Cutie Eleganță 3", img: "/Memorial/m3.webp", desc: "Cutie cu flori elegante." },
            { name: "Cutie Eleganță 4", img: "/Memorial/m4.webp", desc: "Cutie cu flori elegante." },
            { name: "Cutie Eleganță 5", img: "/Memorial/m5.webp", desc: "Cutie cu flori elegante." },
            { name: "Cutie Eleganță 6", img: "/Memorial/m6.webp", desc: "Cutie cu flori elegante." },
            { name: "Cutie Eleganță 7", img: "/Memorial/m7.webp", desc: "Cutie cu flori elegante." },
            { name: "Cutie Eleganță 8", img: "/Memorial/m8.webp", desc: "Cutie cu flori elegante." },
            { name: "Cutie Eleganță 10", img: "/Memorial/m10.webp", desc: "Cutie cu flori elegante." },
            { name: "Cutie Eleganță 12", img: "/Memorial/m12.webp", desc: "Cutie cu flori elegante." },
            { name: "Cutie Eleganță 13", img: "/Memorial/m13.webp", desc: "Cutie cu flori elegante." },
            { name: "Cutie Eleganță 14", img: "/Memorial/m14.webp", desc: "Cutie cu flori elegante." },
            { name: "Cutie Eleganță 15", img: "/Memorial/m15.webp", desc: "Cutie cu flori elegante." },
            { name: "Cutie Eleganță 16", img: "/Memorial/m16.webp", desc: "Cutie cu flori elegante." },
            { name: "Cutie Eleganță 17", img: "/Memorial/m17.webp", desc: "Cutie cu flori elegante." },
            { name: "Cutie Eleganță 18", img: "/Memorial/m18.webp", desc: "Cutie cu flori elegante." },
            { name: "Cutie Eleganță 19", img: "/Memorial/m19.webp", desc: "Cutie cu flori elegante." },
            { name: "Cutie Eleganță 20", img: "/Memorial/m20.webp", desc: "Cutie cu flori elegante." },
            { name: "Cutie Eleganță 21", img: "/Memorial/m21.webp", desc: "Cutie cu flori elegante." },
            { name: "Cutie Eleganță 22", img: "/Memorial/m22.webp", desc: "Cutie cu flori elegante." },
            { name: "Cutie Eleganță 23", img: "/Memorial/m23.webp", desc: "Cutie cu flori elegante." },
            { name: "Cutie Eleganță 24", img: "/Memorial/m24.webp", desc: "Cutie cu flori elegante." },
            { name: "Cutie Eleganță 25", img: "/Memorial/m25.webp", desc: "Cutie cu flori elegante." },
        ]
    },
    // ...restul categoriilor, la fel
];
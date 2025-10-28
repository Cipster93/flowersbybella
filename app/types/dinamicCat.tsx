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
            { name: "Buchet 1", img: "/Oferte/of1.webp", desc: "Buchet elegant, potrivit pentru aniversări" },
            { name: "Buchet 2", img: "/Oferte/of2.webp", desc: "Aranjament floral modern, perfect pentru cadou." },
            { name: "Buchet 3", img: "/Oferte/of3.webp", desc: "Buchet clasic, potrivit pentru orice ocazie." },
            { name: "Buchet 4", img: "/Oferte/of4.webp", desc: "Buchet luminos, perfect pentru a impresiona." },
            { name: "Buchet 5", img: "/Oferte/of5.webp", desc: "Buchet luminos, perfect pentru a impresiona" },
            { name: "Buchet 6", img: "/Oferte/of6.webp", desc: "Buchet colorat, potrivit pentru orice sărbătoare" },
            { name: "Buchet 7", img: "/Oferte/of7.webp", desc: "Surpriză parfumată, ideală pentru cei dragi." },
        ]
    },
    {
        name: "Eleganță",
        slug: "eleganta",
        img: "/Eleganta/el7.webp",
        desc: "Buchete elegante, perfecte pentru evenimente rafinate și momente speciale.",
        price: "50 lei - 150 lei",
        flowers: [
            { name: "Eleganță 1", img: "/Eleganta/el1.webp", desc: "Aranjament floral, potrivit pentru orice ocazie." },
            { name: "Eleganță 2", img: "/Eleganta/el2.webp", desc: "Buchet luminos, ideal pentru a aduce zâmbete." },
            { name: "Eleganță 3", img: "/Eleganta/el3.webp", desc: "Delicate, perfectă pentru cadou." },
            { name: "Eleganță 4", img: "/Eleganta/el4.webp", desc: "Compoziție rafinată pentru evenimente speciale." },
            { name: "Eleganță 5", img: "/Eleganta/el5.webp", desc: "Buchet elegant, plin de culoare și prospețime." },
            { name: "Eleganță 6", img: "/Eleganta/el6.webp", desc: "Aranjament vesel, potrivit pentru orice moment." },
            { name: "Eleganță 7", img: "/Eleganta/el7.webp", desc: "Mix floral sofisticat pentru momente speciale." },
            { name: "Eleganță 8", img: "/Eleganta/el8.webp", desc: "Buchet romantic, ideal pentru a impresiona." },
            { name: "Eleganță 9", img: "/Eleganta/el9.webp", desc: "Aranjament solar, aduce energie pozitivă." },
            { name: "Eleganță 10", img: "/Eleganta/el10.webp", desc: "Flori parfumate, pentru zile speciale." },
            { name: "Eleganță 11", img: "/Eleganta/el12.webp", desc: "Buchet pastelat, delicat și elegant." },
            { name: "Eleganță 12", img: "/Eleganta/el13.webp", desc: "Mixt de trandafiri, pentru momente unice." },
            { name: "Eleganță 13", img: "/Eleganta/el14.webp", desc: "Aranjament bogat, plin de rafinament și stil." },
        ]
    },
    {
        name: "Rafinament",
        slug: "rafinament",
        img: "/Rafinament/rf5.webp",
        desc: "Buchete elegante, perfecte pentru evenimente rafinate și momente speciale.",
        price: "50 lei - 150 lei",
        flowers: [
            { name: "Rafinament 1", img: "/Rafinament/rf1.webp", desc: "Cutie cu flori elegante." },
            { name: "Rafinament 2", img: "/Rafinament/rf2.webp", desc: "Cutie cu flori elegante." },
            { name: "Rafinament 3", img: "/Rafinament/rf3.webp", desc: "Cutie cu flori elegante." },
            { name: "Rafinament 4", img: "/Rafinament/rf4.webp", desc: "Cutie cu flori elegante." },
            { name: "Rafinament 5", img: "/Rafinament/rf5.webp", desc: "Cutie cu flori elegante." },
            { name: "Rafinament 6", img: "/Rafinament/rf6.webp", desc: "Cutie cu flori elegante." },
            { name: "Rafinament 7", img: "/Rafinament/rf7.webp", desc: "Cutie cu flori elegante." },
            { name: "Rafinament 8", img: "/Rafinament/rf8.webp", desc: "Cutie cu flori elegante." },
            { name: "Rafinament 9", img: "/Rafinament/rf9.webp", desc: "Cutie cu flori elegante." },
            { name: "Rafinament 10", img: "/Rafinament/rf10.webp", desc: "Cutie cu flori elegante." },
            { name: "Rafinament 11", img: "/Rafinament/rf11.webp", desc: "Cutie cu flori elegante." },
            { name: "Rafinament 12", img: "/Rafinament/rf12.webp", desc: "Cutie cu flori elegante." },
            { name: "Rafinament 13", img: "/Rafinament/rf13.webp", desc: "Cutie cu flori elegante." },
            { name: "Rafinament 14", img: "/Rafinament/rf14.webp", desc: "Cutie cu flori elegante." },
            { name: "Rafinament 15", img: "/Rafinament/rf15.webp", desc: "Cutie cu flori elegante." },
        ]
    },
    {
        name: "Memorial",
        slug: "memorial",
        img: "/Memorial/m24.webp",
        desc: "Buchete elegante, perfecte pentru evenimente rafinate și momente speciale.",
        price: "50 lei - 150 lei",
        flowers: [
            { name: "Memorial 1", img: "/Memorial/m1.webp", desc: "Cutie cu flori elegante." },
            { name: "Memorial 2", img: "/Memorial/m2.webp", desc: "Cutie cu flori elegante." },
            { name: "Memorial 3", img: "/Memorial/m3.webp", desc: "Cutie cu flori elegante." },
            { name: "Memorial 4", img: "/Memorial/m4.webp", desc: "Cutie cu flori elegante." },
            { name: "Memorial 5", img: "/Memorial/m5.webp", desc: "Cutie cu flori elegante." },
            { name: "Memorial 6", img: "/Memorial/m6.webp", desc: "Cutie cu flori elegante." },
            { name: "Memorial 7", img: "/Memorial/m7.webp", desc: "Cutie cu flori elegante." },
            { name: "Memorial 8", img: "/Memorial/m8.webp", desc: "Cutie cu flori elegante." },
            { name: "Memorial 10", img: "/Memorial/m10.webp", desc: "Cutie cu flori elegante." },
            { name: "Memorial 12", img: "/Memorial/m12.webp", desc: "Cutie cu flori elegante." },
            { name: "Memorial 13", img: "/Memorial/m13.webp", desc: "Cutie cu flori elegante." },
            { name: "Memorial 14", img: "/Memorial/m14.webp", desc: "Cutie cu flori elegante." },
            { name: "Memorial 15", img: "/Memorial/m15.webp", desc: "Cutie cu flori elegante." },
            { name: "Memorial 16", img: "/Memorial/m16.webp", desc: "Cutie cu flori elegante." },
            { name: "Memorial 17", img: "/Memorial/m17.webp", desc: "Cutie cu flori elegante." },
            { name: "Memorial 18", img: "/Memorial/m18.webp", desc: "Cutie cu flori elegante." },
            { name: "Memorial 19", img: "/Memorial/m19.webp", desc: "Cutie cu flori elegante." },
            { name: "Memorial 20", img: "/Memorial/m20.webp", desc: "Cutie cu flori elegante." },
            { name: "Memorial 21", img: "/Memorial/m21.webp", desc: "Cutie cu flori elegante." },
            { name: "Memorial 22", img: "/Memorial/m22.webp", desc: "Cutie cu flori elegante." },
            { name: "Memorial 23", img: "/Memorial/m23.webp", desc: "Cutie cu flori elegante." },
            { name: "Memorial 24", img: "/Memorial/m24.webp", desc: "Cutie cu flori elegante." },
            { name: "Memorial 25", img: "/Memorial/m25.webp", desc: "Cutie cu flori elegante." },
        ]
    },
    // ...restul categoriilor, la fel
];
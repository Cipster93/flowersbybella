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
        name: "Momente de neuitat",
        slug: "momente-de-neuitat",
        img: "/MomenteDeNeuitat/mdn1.webp",
        desc: "Buchete care transformă fiecare clipă într-o amintire specială.",
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
        desc: "Aranjamente florale ce reflectă luxul și exclusivitatea fiecărui detaliu.",
        price: "50 lei - 150 lei",
        flowers: [
            { name: "Rafinament 1", img: "/Rafinament/rf1.webp", desc: "Buchet cu flori în tonuri pastel, pentru o notă de rafinament" },
            { name: "Rafinament 2", img: "/Rafinament/rf2.webp", desc: "Aranjament cu flori de lux, pentru evenimente exclusiviste" },
            { name: "Rafinament 3", img: "/Rafinament/rf3.webp", desc: "Buchet cu flori de sezon, într-o prezentare rafinată" },
            { name: "Rafinament 4", img: "/Rafinament/rf4.webp", desc: "Aranjament floral ce emană eleganță și bun gust" },
            { name: "Rafinament 5", img: "/Rafinament/rf5.webp", desc: "Buchet cu design modern, pentru gusturi rafinate" },
            { name: "Rafinament 6", img: "/Rafinament/rf6.webp", desc: "Aranjament cu accente fine, perfect pentru aniversări" },
            { name: "Rafinament 7", img: "/Rafinament/rf7.webp", desc: "Flori alese cu grijă pentru un cadou memorabil" },
            { name: "Rafinament 8", img: "/Rafinament/rf8.webp", desc: "Aranjament bogat, plin de rafinament și stil." },
            { name: "Rafinament 9", img: "/Rafinament/rf9.webp", desc: "Buchet cu linii elegante și cromatică subtilă." },
            { name: "Rafinament 10", img: "/Rafinament/rf10.webp", desc: "Buchet cu linii elegante și cromatică subtilă." },
            { name: "Rafinament 11", img: "/Rafinament/rf11.webp", desc: "Aranjament cu trandafiri și flori exotice" },
            { name: "Rafinament 12", img: "/Rafinament/rf12.webp", desc: "Buchet cu flori catifelate, pentru un cadou deosebit" },
            { name: "Rafinament 13", img: "/Rafinament/rf13.webp", desc: "Aranjament cu flori rare și accesorii elegante" },
            { name: "Rafinament 14", img: "/Rafinament/rf14.webp", desc: "Buchet cu flori parfumate, pentru clipe rafinate" },
            { name: "Rafinament 15", img: "/Rafinament/rf15.webp", desc: "Buchet cu flori albe, simbol al rafinamentului" },
        ]
    },
    {
        name: "Memorial",
        slug: "memorial",
        img: "/Memorial/m24.webp",
        desc: "Flori pentru momente de reflecție, respect și amintire.",
        price: "50 lei - 150 lei",
        flowers: [
            { name: "Memorial 1", img: "/Memorial/m1.webp", desc: "Coroana eleganta, menit să aducă un omagiu discret" },
            { name: "Memorial 2", img: "/Memorial/m2.webp", desc: "Compoziție florală pentru ceremonii de adio" },
            { name: "Memorial 3", img: "/Memorial/m3.webp", desc: "Flori alese cu grijă pentru a exprima respectul și compasiunea" },
            { name: "Memorial 4", img: "/Memorial/m4.webp", desc: "Flori delicate, pentru a onora memoria celor dragi" },
            { name: "Memorial 5", img: "/Memorial/m5.webp", desc: "Coroana cu accente discrete, pentru a transmite gânduri de alinare" },
            { name: "Memorial 6", img: "/Memorial/m6.webp", desc: "Aranjament solemn, potrivit pentru comemorări" },
            { name: "Memorial 7", img: "/Memorial/m7.webp", desc: "Coroana simpla, cu un mesaj de prețuire și respect" },
            { name: "Memorial 8", img: "/Memorial/m8.webp", desc: "Coroana cu accente discrete, pentru a transmite gânduri de alinare" },
            { name: "Memorial 10", img: "/Memorial/m10.webp", desc: "Flori pentru a marca momente de reflecție și amintire" },
            { name: "Memorial 12", img: "/Memorial/m12.webp", desc: "Compoziție florală cu tonuri pastelate, pentru un omagiu delicat" },
            { name: "Memorial 13", img: "/Memorial/m13.webp", desc: "Flori de sezon, pentru a păstra vie amintirea" },
            { name: "Memorial 14", img: "/Memorial/m14.webp", desc: "Coroana cu flori albe, simbol al purității și recunoștinței" },
            { name: "Memorial 15", img: "/Memorial/m15.webp", desc: "Aranjament cu crini, simbol al speranței și păcii" },
            { name: "Memorial 16", img: "/Memorial/m16.webp", desc: "Aranjament cu flori elegante, pentru a exprima prețuire și respect" },
            { name: "Memorial 17", img: "/Memorial/m17.webp", desc: "Compoziție cu flori simple, pentru momente de reculegere" },
            { name: "Memorial 18", img: "/Memorial/m18.webp", desc: "Coroana cu flori galbene, pentru a aduce lumină în amintire" },
            { name: "Memorial 19", img: "/Memorial/m19.webp", desc: "Coroana cu flori albe, pentru un omagiu sincer" },
            { name: "Memorial 20", img: "/Memorial/m20.webp", desc: "Coroana cu trandafiri albi, pentru un omagiu sincer" },
            { name: "Memorial 21", img: "/Memorial/m21.webp", desc: "Aranjament cu flori discrete, pentru un omagiu liniștit" },
            { name: "Memorial 22", img: "/Memorial/m22.webp", desc: "Aranjament cu flori elegante, pentru a exprima prețuire și respect" },
            { name: "Memorial 23", img: "/Memorial/m23.webp", desc: "Coroana cu flori albe, simbol al purității și recunoștinței" },
            { name: "Memorial 24", img: "/Memorial/m24.webp", desc: "Coroana cu flori galbene, pentru a aduce lumină în amintire" },
            { name: "Memorial 25", img: "/Memorial/m25.webp", desc: "Coroană cu trandafiri albi, pentru a transmite compasiune și prețuire" },
        ]
    },
    // ...restul categoriilor, la fel
];
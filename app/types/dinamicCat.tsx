export type Flower = {
    name: string;
    img?: string;
    imgTop?: string;
    imgBottom?: string;
    desc: string;
    price?: number;
};

export type DinamicCategory = {
    name: string;
    slug: string;
    img: string;
    desc: string;
    price?: string;
    flowers?: Flower[];
    metaTitle?: string;
    metaDescription?: string;
};
export const momenteDeNeuitatImages = [
    "/momenteDeNeuitat/mom1.webp",
    "/momenteDeNeuitat/mom2.webp",
    "/momenteDeNeuitat/mom3.webp",
    "/momenteDeNeuitat/mom4.webp",
];

export const dinamicCategory: DinamicCategory[] = [
    // {
    //     name: "Oferte",
    //     slug: "oferte",
    //     img: "/Oferte/of1.webp",
    //     desc: "Profită de cele mai bune oferte și promoții la buchete și aranjamente florale.",
    //     flowers: [
    //         { name: "Buchet 1", img: "/Oferte/of1.webp", desc: "Buchet elegant, potrivit pentru aniversări" },
    //         { name: "Buchet 2", img: "/Oferte/of2.webp", desc: "Aranjament floral modern, perfect pentru cadou." },
    //         { name: "Buchet 3", img: "/Oferte/of3.webp", desc: "Buchet clasic, potrivit pentru orice ocazie." },
    //         { name: "Buchet 4", img: "/Oferte/of4.webp", desc: "Buchet luminos, perfect pentru a impresiona." },
    //         { name: "Buchet 5", img: "/Oferte/of5.webp", desc: "Buchet luminos, perfect pentru a impresiona" },
    //         { name: "Buchet 6", img: "/Oferte/of6.webp", desc: "Buchet colorat, potrivit pentru orice sărbătoare" },
    //         { name: "Buchet 7", img: "/Oferte/of7.webp", desc: "Surpriză parfumată, ideală pentru cei dragi." },
    //     ]
    // },
    {
        name: "Eleganță",
        slug: "eleganta",
        img: "/Eleganta/el7.webp",
        price: "Pret",
        desc: "Pozele și prețurile au caracter informativ, ele pot varia în funcție de cerințele clientului și de disponibilitatea florilor (florile de sezon sunt disponibile doar într-o anumită perioadă a anului).",
        metaTitle: "Aranjamente florale elegante | Flowers by Bella",
        metaDescription: "Descoperă colecția Eleganță de la Flowers by Bella: buchete și aranjamente florale sofisticate, perfecte pentru evenimente speciale sau cadouri de neuitat. Comandă online!",
        flowers: [
            { name: "Eleganță 1", img: "/Eleganta/el3.webp", desc: "Delicate, perfectă pentru cadou.", price: 150 },
            { name: "Eleganță 2", img: "/Eleganta/el4.webp", desc: "Compoziție rafinată pentru evenimente speciale.", price: 150 },
            { name: "Eleganță 3", img: "/Eleganta/el6.webp", desc: "Aranjament vesel, potrivit pentru orice moment.", price: 150 },
            { name: "Eleganță 4", img: "/Eleganta/el8.webp", desc: "Buchet romantic, ideal pentru a impresiona.", price: 200 },
            { name: "Eleganță 5", img: "/Eleganta/el7.webp", desc: "Mix floral sofisticat pentru momente speciale.", price: 200 },
            { name: "Eleganță 6", img: "/Eleganta/el9.webp", desc: "Aranjament solar, aduce energie pozitivă.", price: 200 },
            { name: "Eleganță 7", img: "/Eleganta/el14.webp", desc: "Aranjament bogat, plin de rafinament și stil.", price: 200 },
            { name: "Eleganță 8", img: "/Eleganta/el12.webp", desc: "Buchet pastelat, delicat și elegant.", price: 250 },
            { name: "Eleganță 9", img: "/Eleganta/el1.webp", desc: "Aranjament floral, potrivit pentru orice ocazie.", price: 250 },
            { name: "Eleganță 10", img: "/Eleganta/el5.webp", desc: "Buchet elegant, plin de culoare și prospețime.", price: 300 },
            { name: "Eleganță 11", img: "/Eleganta/el10.webp", desc: "Flori parfumate, pentru zile speciale.", price: 300 },
            { name: "Eleganță 12", img: "/Eleganta/el2.webp", desc: "Buchet luminos, ideal pentru a aduce zâmbete.", price: 500 },
            { name: "Eleganță 13", img: "/Eleganta/el13.webp", desc: "Mixt de trandafiri, pentru momente unice.", price: 500 },
        ]
    },
    {
        name: "Nunți și Botezuri",
        slug: "nunti-si-botezuri",
        img: "/Eleganta/el3.webp",
        desc: "Pozele și prețurile au caracter informativ; ele pot varia în funcție de cerințele clientului și de disponibilitatea florilor (florile de sezon sunt disponibile doar într-o anumită perioadă a anului).",
        metaTitle: "Aranjamente florale pentru nunți și botezuri | Flowers by Bella",
        metaDescription: "Alege aranjamente florale deosebite pentru nunți și botezuri de la Flowers by Bella. Personalizăm fiecare detaliu pentru evenimente memorabile. Vezi galeria noastră!",
        flowers: [
            { name: "Pachet lumanari si buchete pentru nunti 1", imgTop: "/MomenteDeNeuitat/bl1.webp", imgBottom: "/MomenteDeNeuitat/l1.webp", desc: "Buchet cu flori în tonuri pastel, pentru o notă de rafinament" },
            { name: "Pachet lumanari si buchete pentru nunti 2", imgTop: "/MomenteDeNeuitat/bl2.webp", imgBottom: "/MomenteDeNeuitat/l2.webp", desc: "Buchet cu flori în tonuri pastel, pentru o notă de rafinament" },
            { name: "Pachet lumanari si buchete pentru nunti 3", imgTop: "/MomenteDeNeuitat/bl3.webp", imgBottom: "/MomenteDeNeuitat/l3.webp", desc: "Buchet cu flori în tonuri pastel, pentru o notă de rafinament" },
            { name: "Pachet lumanari si buchete pentru nunti 4", imgTop: "/MomenteDeNeuitat/bl4.webp", imgBottom: "/MomenteDeNeuitat/l4.webp", desc: "Buchet cu flori în tonuri pastel, pentru o notă de rafinament" },
            { name: "Pachet lumanari si buchete pentru nunti 5", imgTop: "/MomenteDeNeuitat/bl5.webp", imgBottom: "/MomenteDeNeuitat/l5.webp", desc: "Buchet cu flori în tonuri pastel, pentru o notă de rafinament" },
            { name: "Pachet lumanari si buchete pentru nunti 6", imgTop: "/MomenteDeNeuitat/bl6.webp", imgBottom: "/MomenteDeNeuitat/l6.webp", desc: "Buchet cu flori în tonuri pastel, pentru o notă de rafinament" },
            { name: "Pachet lumanari si buchete pentru nunti 7", imgTop: "/MomenteDeNeuitat/bl7.webp", imgBottom: "/MomenteDeNeuitat/l7.webp", desc: "Buchet cu flori în tonuri pastel, pentru o notă de rafinament" },
            { name: "Lumari mari de nunta 1", img: "/MomenteDeNeuitat/lumanare1.webp", desc: "Lumari mari de nunta" },
            { name: "Buchete de mireasa 1", img: "/MomenteDeNeuitat/buc1.webp", desc: "Buchete de nunta mireasa" },
            { name: "Buchete de  mireasa 2", img: "/MomenteDeNeuitat/buc2.webp", desc: "Buchete de nunta mireasa" },
            { name: "Buchete de  mireasa 3", img: "/MomenteDeNeuitat/buc3.webp", desc: "Buchete de nunta mireasa" },
            { name: "Buchete de  mireasa 4", img: "/MomenteDeNeuitat/buc4.webp", desc: "Buchete de nunta mireasa" },
            { name: "Buchete de  mireasa 5", img: "/MomenteDeNeuitat/buc5.webp", desc: "Buchete de nunta mireasa" },
            { name: "Buchete de  mireasa 6", img: "/MomenteDeNeuitat/buc6.webp", desc: "Buchete de nunta mireasa" },
            { name: "Buchete de  mireasa 7", img: "/MomenteDeNeuitat/buc7.webp", desc: "Buchete de nunta mireasa" },
            { name: "Buchete de  mireasa 8", img: "/MomenteDeNeuitat/buc8.webp", desc: "Buchete de nunta mireasa" },
            { name: "Buchete de  mireasa 9", img: "/MomenteDeNeuitat/buc9.webp", desc: "Buchete de nunta mireasa" },
        ]
    },
    {
        name: "Rafinament",
        slug: "rafinament",
        img: "/Rafinament/rf5.webp",
        desc: "Pozele și prețurile au caracter informativ, ele pot varia în funcție de cerințele clientului și de disponibilitatea florilor (florile de sezon sunt disponibile doar într-o anumită perioadă a anului).",
        metaTitle: "Aranjamente florale rafinate | Flowers by Bella",
        metaDescription: "Explorează colecția Rafinament de la Flowers by Bella: buchete și aranjamente florale cu design modern și accente elegante, ideale pentru gusturi rafinate.",
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
            { name: "Rafinament 16", img: "/Rafinament/rf16.webp", desc: "Aranjament cu accente fine, perfect pentru aniversări" },
        ]
    },
    {
        name: "Memorial",
        slug: "memorial",
        img: "/Memorial/m24.webp",
        desc: "Pozele și prețurile au caracter informativ, ele pot varia în funcție de cerințele clientului și de disponibilitatea florilor (florile de sezon sunt disponibile doar într-o anumită perioadă a anului).",
        metaTitle: "Aranjamente florale memoriale | Flowers by Bella",
        metaDescription: "Comandă aranjamente florale pentru ceremonii memoriale de la Flowers by Bella. Oferim compoziții elegante pentru a onora memoria celor dragi.",
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
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
            { name: "Eleganță", img: "/Eleganta/el3.webp", desc: "Delicate, perfectă pentru cadou.", price: 150 },
            { name: "Eleganță", img: "/Eleganta/el4.webp", desc: "Compoziție rafinată pentru evenimente speciale.", price: 150 },
            { name: "Eleganță", img: "/Eleganta/el6.webp", desc: "Aranjament vesel, potrivit pentru orice moment.", price: 150 },
            { name: "Eleganță", img: "/Eleganta/el8.webp", desc: "Buchet romantic, ideal pentru a impresiona.", price: 200 },
            { name: "Eleganță", img: "/Eleganta/el7.webp", desc: "Mix floral sofisticat pentru momente speciale.", price: 200 },
            { name: "Eleganță", img: "/Eleganta/el9.webp", desc: "Aranjament solar, aduce energie pozitivă.", price: 200 },
            { name: "Eleganță", img: "/Eleganta/el14.webp", desc: "Aranjament bogat, plin de rafinament și stil.", price: 200 },
            { name: "Eleganță", img: "/Eleganta/el12.webp", desc: "Buchet pastelat, delicat și elegant.", price: 250 },
            { name: "Eleganță", img: "/Eleganta/el1.webp", desc: "Aranjament floral, potrivit pentru orice ocazie.", price: 250 },
            { name: "Eleganță", img: "/Eleganta/el5.webp", desc: "Buchet elegant, plin de culoare și prospețime.", price: 300 },
            { name: "Eleganță", img: "/Eleganta/el10.webp", desc: "Flori parfumate, pentru zile speciale.", price: 300 },
            { name: "Eleganță", img: "/Eleganta/el2.webp", desc: "Buchet luminos, ideal pentru a aduce zâmbete.", price: 500 },
            { name: "Eleganță", img: "/Eleganta/el13.webp", desc: "Mixt de trandafiri, pentru momente unice.", price: 500 },
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
            { name: "Pachet lumanari si buchete pentru nunti", imgTop: "/MomenteDeNeuitat/bl1.webp", imgBottom: "/MomenteDeNeuitat/l1.webp", desc: "Buchet cu flori în tonuri pastel, pentru o notă de rafinament" },
            { name: "Pachet lumanari si buchete pentru nunti", imgTop: "/MomenteDeNeuitat/bl2.webp", imgBottom: "/MomenteDeNeuitat/l2.webp", desc: "Buchet cu flori în tonuri pastel, pentru o notă de rafinament" },
            { name: "Pachet lumanari si buchete pentru nunti", imgTop: "/MomenteDeNeuitat/bl3.webp", imgBottom: "/MomenteDeNeuitat/l3.webp", desc: "Buchet cu flori în tonuri pastel, pentru o notă de rafinament" },
            { name: "Pachet lumanari si buchete pentru nunti", imgTop: "/MomenteDeNeuitat/bl4.webp", imgBottom: "/MomenteDeNeuitat/l4.webp", desc: "Buchet cu flori în tonuri pastel, pentru o notă de rafinament" },
            { name: "Pachet lumanari si buchete pentru nunti", imgTop: "/MomenteDeNeuitat/bl5.webp", imgBottom: "/MomenteDeNeuitat/l5.webp", desc: "Buchet cu flori în tonuri pastel, pentru o notă de rafinament" },
            { name: "Pachet lumanari si buchete pentru nunti", imgTop: "/MomenteDeNeuitat/bl6.webp", imgBottom: "/MomenteDeNeuitat/l6.webp", desc: "Buchet cu flori în tonuri pastel, pentru o notă de rafinament" },
            { name: "Pachet lumanari si buchete pentru nunti", imgTop: "/MomenteDeNeuitat/bl7.webp", imgBottom: "/MomenteDeNeuitat/l7.webp", desc: "Buchet cu flori în tonuri pastel, pentru o notă de rafinament" },
            { name: "Lumari mari de nunta", img: "/MomenteDeNeuitat/lumanare1.webp", desc: "Lumari mari de nunta" },
            { name: "Buchete de mireasa", img: "/MomenteDeNeuitat/buc1.webp", desc: "Buchete de nunta mireasa" },
            { name: "Buchete de  mireasa", img: "/MomenteDeNeuitat/buc2.webp", desc: "Buchete de nunta mireasa" },
            { name: "Buchete de  mireasa", img: "/MomenteDeNeuitat/buc3.webp", desc: "Buchete de nunta mireasa" },
            { name: "Buchete de  mireasa", img: "/MomenteDeNeuitat/buc4.webp", desc: "Buchete de nunta mireasa" },
            { name: "Buchete de  mireasa", img: "/MomenteDeNeuitat/buc5.webp", desc: "Buchete de nunta mireasa" },
            { name: "Buchete de  mireasa", img: "/MomenteDeNeuitat/buc6.webp", desc: "Buchete de nunta mireasa" },
            { name: "Buchete de  mireasa", img: "/MomenteDeNeuitat/buc7.webp", desc: "Buchete de nunta mireasa" },
            { name: "Buchete de  mireasa", img: "/MomenteDeNeuitat/buc8.webp", desc: "Buchete de nunta mireasa" },
            { name: "Buchete de  mireasa", img: "/MomenteDeNeuitat/buc9.webp", desc: "Buchete de nunta mireasa" },
        ]
    },
    {
        name: "Rafinament",
        slug: "rafinament",
        img: "/Rafinament/rf5.webp",
        price: "Pret",
        desc: "Pozele și prețurile au caracter informativ, ele pot varia în funcție de cerințele clientului și de disponibilitatea florilor (florile de sezon sunt disponibile doar într-o anumită perioadă a anului).",
        metaTitle: "Aranjamente florale rafinate | Flowers by Bella",
        metaDescription: "Explorează colecția Rafinament de la Flowers by Bella: buchete și aranjamente florale cu design modern și accente elegante, ideale pentru gusturi rafinate.",
        flowers: [
            { name: "Rafinament", img: "/Rafinament/rf11.webp", desc: "Aranjament cu trandafiri și flori exotice", price: 150 },
            { name: "Rafinament", img: "/Rafinament/rf2.webp", desc: "Aranjament cu flori de lux, pentru evenimente exclusiviste", price: 200 },
            { name: "Rafinament", img: "/Rafinament/rf4.webp", desc: "Aranjament floral ce emană eleganță și bun gust", price: 200 },
            { name: "Rafinament", img: "/Rafinament/rf8.webp", desc: "Aranjament bogat, plin de rafinament și stil.", price: 200 },
            { name: "Rafinament", img: "/Rafinament/rf10.webp", desc: "Buchet cu linii elegante și cromatică subtilă.", price: 200 },
            { name: "Rafinament", img: "/Rafinament/rf12.webp", desc: "Buchet cu flori catifelate, pentru un cadou deosebit", price: 200 },
            { name: "Rafinament", img: "/Rafinament/rf13.webp", desc: "Aranjament cu flori rare și accesorii elegante", price: 200 },
            { name: "Rafinament", img: "/Rafinament/rf16.webp", desc: "Aranjament cu accente fine, perfect pentru aniversări", price: 200 },
            { name: "Rafinament", img: "/Rafinament/rf7.webp", desc: "Flori alese cu grijă pentru un cadou memorabil", price: 250 },
            { name: "Rafinament", img: "/Rafinament/rf5.webp", desc: "Buchet cu design modern, pentru gusturi rafinate", price: 250 },
            { name: "Rafinament", img: "/Rafinament/rf6.webp", desc: "Aranjament cu accente fine, perfect pentru aniversări", price: 250 },
            { name: "Rafinament", img: "/Rafinament/rf1.webp", desc: "Buchet cu flori în tonuri pastel, pentru o notă de rafinament", price: 300 },
            { name: "Rafinament", img: "/Rafinament/rf15.webp", desc: "Buchet cu flori albe, simbol al rafinamentului", price: 300 },
            { name: "Rafinament", img: "/Rafinament/rf3.webp", desc: "Buchet cu flori de sezon, într-o prezentare rafinată", price: 350 },
            { name: "Rafinament", img: "/Rafinament/rf9.webp", desc: "Buchet cu linii elegante și cromatică subtilă.", price: 350 },
            { name: "Rafinament", img: "/Rafinament/rf14.webp", desc: "Buchet cu flori parfumate, pentru clipe rafinate", price: 500 },
        ]
    },
    {
        name: "Memorial",
        slug: "memorial",
        img: "/Memorial/m24.webp",
        price: "Pret",
        desc: "Pozele și prețurile au caracter informativ, ele pot varia în funcție de cerințele clientului și de disponibilitatea florilor (florile de sezon sunt disponibile doar într-o anumită perioadă a anului).",
        metaTitle: "Aranjamente florale memoriale | Flowers by Bella",
        metaDescription: "Comandă aranjamente florale pentru ceremonii memoriale de la Flowers by Bella. Oferim compoziții elegante pentru a onora memoria celor dragi.",
        flowers: [
            { name: "Memorial", img: "/Memorial/m22.webp", desc: "Aranjament cu flori elegante, pentru a exprima prețuire și respect", price: 200 },
            { name: "Memorial", img: "/Memorial/m13.webp", desc: "Flori de sezon, pentru a păstra vie amintirea", price: 250 },
            { name: "Memorial", img: "/Memorial/m7.webp", desc: "Coroana simpla, cu un mesaj de prețuire și respect", price: 300 },
            { name: "Memorial", img: "/Memorial/m14.webp", desc: "Coroana cu flori albe, simbol al purității și recunoștinței", price: 350 },
            { name: "Memorial", img: "/Memorial/m4.webp", desc: "Flori delicate, pentru a onora memoria celor dragi", price: 400 },
            { name: "Memorial", img: "/Memorial/m15.webp", desc: "Aranjament cu crini, simbol al speranței și păcii", price: 400 },
            { name: "Memorial", img: "/Memorial/m24.webp", desc: "Coroana cu flori galbene, pentru a aduce lumină în amintire", price: 450 },
            { name: "Memorial", img: "/Memorial/m12.webp", desc: "Compoziție florală cu tonuri pastelate, pentru un omagiu delicat", price: 500 },
            { name: "Memorial", img: "/Memorial/m23.webp", desc: "Coroana cu flori albe, simbol al purității și recunoștinței", price: 500 },
            { name: "Memorial", img: "/Memorial/m5.webp", desc: "Coroana cu accente discrete, pentru a transmite gânduri de alinare", price: 600 },
            { name: "Memorial", img: "/Memorial/m25.webp", desc: "Coroană cu trandafiri albi, pentru a transmite compasiune și prețuire", price: 700 },
            { name: "Memorial", img: "/Memorial/m2.webp", desc: "Compoziție florală pentru ceremonii de adio", price: 800},
            { name: "Memorial", img: "/Memorial/m18.webp", desc: "Coroana cu flori galbene, pentru a aduce lumină în amintire", price: 800 },
            { name: "Memorial", img: "/Memorial/m3.webp", desc: "Flori alese cu grijă pentru a exprima respectul și compasiunea" , price: 800 },
            { name: "Memorial", img: "/Memorial/m20.webp", desc: "Coroana cu trandafiri albi, pentru un omagiu sincer", price: 850 },
            { name: "Memorial", img: "/Memorial/m6.webp", desc: "Aranjament solemn, potrivit pentru comemorări", price: 850 },
            { name: "Memorial", img: "/Memorial/m16.webp", desc: "Aranjament cu flori elegante, pentru a exprima prețuire și respect", price: 850 },
            { name: "Memorial", img: "/Memorial/m17.webp", desc: "Compoziție cu flori simple, pentru momente de reculegere", price: 900 },
            { name: "Memorial", img: "/Memorial/m19.webp", desc: "Coroana cu flori albe, pentru un omagiu sincer", price: 1000 },
            { name: "Memorial", img: "/Memorial/m21.webp", desc: "Aranjament cu flori discrete, pentru un omagiu liniștit", price: 1000 },
            { name: "Memorial", img: "/Memorial/m1.webp", desc: "Coroana eleganta, menit să aducă un omagiu discret", price: 1000 },
        ]
    },
    // ...restul categoriilor, la fel
];
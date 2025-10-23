export type Topic = {
    title: string;
    images: string[];
    desc: string;
};

export const topics: Topic[] = [
    {
        title: "Eleganta",
        images: ["/eleganta1.jpg", "/eleganta2.jpg", "/eleganta3.jpg"],
        desc: "Eleganta florilor noastre aduce rafinament si stil in orice moment. Fiecare aranjament este creat cu grija pentru detalii, potrivit pentru evenimente speciale sau decoruri sofisticate.",
    },
    {
        title: "Rafinament",
        images: ["/rafinament1.jpg", "/rafinament2.jpg", "/rafinament3.jpg"],
        desc: "Rafinamentul se regaseste in fiecare buchet, unde culorile si formele se imbina armonios. Florile noastre sunt alese pentru a oferi o experienta vizuala deosebita si eleganta discreta.",
    },
    {
        title: "Aranjamente",
        images: ["/armonie.jpg", "/armonie2.jpg", "/armonie3.jpg"],
        desc: "Aranjamentele florale sunt gandite pentru a aduce frumusete si energie in orice spatiu. Compozitiile noastre imbina creativitatea cu naturaletea, fiind ideale pentru orice ocazie.",
    },
    {
        title: "Momente de neuitat",
        images: ["/modern.jpg", "/modern1.jpg", "/modern2.jpg"],
        desc: "Transforma fiecare clipa intr-o amintire speciala cu buchetele noastre. Florile sunt alese pentru a marca momentele importante din viata ta, oferind emotie si culoare.",
    },
    {
        title: "Ornamente",
        images: ["/emotie1.jpg", "/emotie2.jpg", "/emotie3.jpg"],
        desc: "Ornamentele florale aduc un plus de stil si personalitate decorului tau. Fiecare piesa este realizata cu pasiune, pentru a transmite sentimente si a infrumuseta orice incapere.",
    },
];

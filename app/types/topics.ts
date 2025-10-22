export type Topic = {
    title: string;
    images: string[];
    desc: string;
};

export const topics: Topic[] = [
    {
        title: "Eleganta",
        images: ["/eleganta1.jpg", "/eleganta2.jpg", "/eleganta3.jpg"],
        desc: "Eleganta florilor noastre este o declaratie de stil. Fiecare petala este aleasa cu atentie, iar aranjamentele sunt create pentru a reflecta finetea si gratia moderna. Perfecte pentru evenimente rafinate, spatii luxoase sau momente in care vrei sa transmiti distinctie si clasa.",
    },
    {
        title: "Rafinament",
        images: ["/rafinament1.jpg", "/rafinament2.jpg", "/rafinament3.jpg"],
        desc: "Rafinamentul este arta echilibrului intre culoare, forma si emotie. Fiecare buchet poarta o poveste subtila, unde textura petalelor, tonurile pastelate si parfumul delicat se combina pentru a crea o experienta vizuala sofisticata — ca o piesa couture florala.",
    },
    {
        title: "Armonie",
        images: ["/armonie.jpg", "/armonie2.jpg", "/armonie3.jpg"],
        desc: "Armonia defineste frumusetea naturala a creatiilor noastre. Culorile, lumina si proportiile se intalnesc intr-un dans al simturilor, dand viata unor compozitii care aduc pace, energie si eleganta oricarui spatiu. Inspirate din natura, dar gandite ca pentru o galerie de arta florala.",
    },
    {
        title: "Stil Modern",
        images: ["/modern.jpg", "/modern1.jpg", "/modern2.jpg"],
        desc: "Pentru cei care iubesc designul contemporan, stilul modern aduce minimalismul si expresivitatea intr-o singura compozitie. Linii curate, contraste indraznete si texturi inedite — buchetele noastre sunt creatii fashion, potrivite pentru evenimente urbane sau decoruri exclusiviste.",
    },
    {
        title: "Emotie",
        images: ["/emotie1.jpg", "/emotie2.jpg", "/emotie3.jpg"],
        desc: "Florile au puterea de a transmite emotii fara cuvinte. De la gingasia unei roze pana la intensitatea unui bujor, fiecare detaliu este o expresie sincera a sentimentelor. Noi le aranjam cu pasiune, astfel incat emotia sa devina arta vizuala.",
    },
];

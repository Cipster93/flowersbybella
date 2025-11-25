import React from "react";

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen font-sans py-10 px-4 w-full bg-black text-white">
            <div className="max-w-3xl mx-auto bg-black/80 rounded-2xl p-8 shadow-lg">
                <h1 className="text-4xl font-bold text-yellow-500 mb-6 text-center">Politica de Confidențialitate</h1>
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-yellow-400 mb-2">De ce avem nevoie de această politică?</h2>
                    <p className="text-gray-200 text-lg mb-2">
                        Politica de confidențialitate este un document esențial care explică modul în care colectăm, folosim, stocăm și protejăm datele personale ale clienților noștri. Este necesară pentru a respecta legislația în vigoare (GDPR) și pentru a oferi transparență și siguranță tuturor vizitatorilor și clienților magazinului nostru online.
                    </p>
                    <p className="text-gray-200 text-lg">
                        Această politică vă informează despre drepturile dumneavoastră, despre ce date colectăm, de ce le colectăm și cum le folosim. Respectarea confidențialității este o prioritate pentru noi.
                    </p>
                </section>
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-yellow-400 mb-2">Datele firmei</h2>
                    <ul className="text-gray-200 text-lg list-disc ml-6">
                        <li><span className="font-bold">Nume:</span> FLOWER STYLE BY BELLA S.R.L</li>
                        <li><span className="font-bold">Sediu social:</span> Dâmbovița, Târgoviște</li>
                        <li><span className="font-bold">CUI:</span> 46259373</li>
                        <li><span className="font-bold">Nr. de ordine în registrul comerțului:</span> J15/915/07.06.2022</li>
                    </ul>
                </section>
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-yellow-400 mb-2">Ce date colectăm?</h2>
                    <ul className="text-gray-200 text-lg list-disc ml-6">
                        <li>Nume și prenume</li>
                        <li>Număr de telefon</li>
                        <li>Adresă de email</li>
                        <li>Adresă de livrare</li>
                        <li>Detalii despre comandă (produs, cantitate, preferințe)</li>
                    </ul>
                </section>
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-yellow-400 mb-2">De ce colectăm aceste date?</h2>
                    <ul className="text-gray-200 text-lg list-disc ml-6">
                        <li>Pentru procesarea și livrarea comenzilor</li>
                        <li>Pentru contactarea clientului în legătură cu comanda</li>
                        <li>Pentru emiterea facturii și gestionarea plății</li>
                        <li>Pentru a respecta obligațiile legale</li>
                    </ul>
                </section>
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-yellow-400 mb-2">Cum folosim și protejăm datele?</h2>
                    <ul className="text-gray-200 text-lg list-disc ml-6">
                        <li>Datele nu sunt stocate după finalizarea comenzii</li>
                        <li>Nu sunt partajate cu terți fără acordul dumneavoastră, cu excepția cazurilor legale</li>
                        <li>Folosim datele doar pe durata procesării comenzii</li>
                        <li>Accesul la date este limitat la personalul implicat în procesarea și livrarea comenzii</li>
                    </ul>
                </section>
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-yellow-400 mb-2">Drepturile dumneavoastră</h2>
                    <ul className="text-gray-200 text-lg list-disc ml-6">
                        <li>Dreptul de a solicita informații despre datele folosite la comandă</li>
                        <li>Dreptul de rectificare sau ștergere a datelor înainte de finalizarea comenzii</li>
                        <li>Pentru orice solicitare, ne puteți contacta la <span className="text-yellow-400">0728-361-107</span></li>
                    </ul>
                </section>
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-yellow-400 mb-2">De ce este importantă această politică?</h2>
                    <p className="text-gray-200 text-lg">
                        Politica de confidențialitate vă protejează drepturile și vă oferă control asupra datelor personale. Este o dovadă a angajamentului nostru față de transparență, siguranță și respectarea clienților.
                    </p>
                </section>
                <p className="text-gray-400 text-base mt-8 text-center">
                    Prin utilizarea site-ului Flowers by Bella, confirmați că ați citit și sunteți de acord cu această politică de confidențialitate.
                </p>
            </div>
        </main>
    );
}

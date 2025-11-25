import Link from 'next/link'
import React from 'react'

interface PrivacyPolicyModalProps {
  open: boolean
  onClose: () => void
}

export default function PrivacyPolicyModal({ open, onClose }: PrivacyPolicyModalProps) {
  if (!open) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Politica de confidentialitate"
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
    >
      <section className="rounded-xl font-serif  max-w-2xl bg-black w-full p-8 relative">
        {/* Header modal */}
        <header className="flex justify-between items-center mb-4">
          <div className='flex flex-col'>
            <h1 className="text-2xl font-bold text-yellow-500 font-serif">
              Politica de Confidentialitate
            </h1>
            <p className="mt-4 text-center">
              <Link
                href="/privacy-policy"
                className="text-yellow-400 underline hover:text-yellow-300 transition"
                rel="noopener noreferrer"
                onClick={onClose}
              >
                Citește politica de confidențialitate detaliată
              </Link>
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-yellow-500 font-bold text-xl"
            aria-label="Inchide"
          >
            ×
          </button>
        </header>
        {/* Main content */}
        <main className="text-gray-300 text-base max-h-[70vh] overflow-y-auto space-y-4 text-left ">
          <p>
            Flowers by Bella respecta confidentialitatea datelor dumneavoastra personale. Datele nu sunt stocate nicaieri permanent. Sunt preluate doar pentru procesarea platilor si a livrarilor.
          </p>

          <p>
            Dupa ce livrarea sau plata a fost efectuata, nu pastram datele clientilor in nicio baza de date sau alt sistem. Folosim datele strict in momentul comenzii, pentru a putea livra produsele si a procesa plata.
          </p>

          <section>
            <h2 className="text-lg font-semibold text-yellow-400 mt-6 mb-2">1. Ce date colectam?</h2>
            <ul className="list-disc ml-6 mb-4">
              <li>Nume si prenume</li>
              <li>Numar de telefon</li>
              <li>Adresa de email</li>
              <li>Adresa de livrare</li>
              <li>Detalii despre comanda (produs, cantitate, preferinte)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-yellow-400 mt-6 mb-2">2. Cum folosim datele?</h2>
            <ul className="list-disc ml-6 mb-4">
              <li>Pentru procesarea si livrarea comenzilor de flori sau buchete</li>
              <li>Pentru contactarea clientului in legatura cu comanda</li>
              <li>Pentru emiterea facturii si gestionarea platii</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-yellow-400 mt-6 mb-2">3. Cine are acces la date?</h2>
            <ul className="list-disc ml-6 mb-4">
              <li>Patronul firmei Flowers by Bella</li>
              <li>Personalul implicat in procesarea si livrarea comenzii</li>
              <li>Furnizori de servicii de curierat (doar datele necesare livrarii)</li>
              <li>Autoritati, doar daca exista obligatii legale</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-yellow-400 mt-6 mb-2">4. Cum sunt protejate datele?</h2>
            <ul className="list-disc ml-6 mb-4">
              <li>Datele nu sunt stocate dupa finalizarea comenzii</li>
              <li>Nu sunt partajate cu terti fara acordul dumneavoastra, cu exceptia cazurilor legale</li>
              <li>Folosim datele doar pe durata procesarii comenzii</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-yellow-400 mt-6 mb-2">5. Drepturile clientului</h2>
            <ul className="list-disc ml-6 mb-4">
              <li>Dreptul de a solicita informatii despre datele folosite la comanda</li>
              <li>Dreptul de rectificare sau stergere a datelor inainte de finalizarea comenzii</li>
              <li>Pentru orice solicitare, ne puteti contacta la <span className="text-yellow-400">0728-361-107</span></li>
            </ul>
          </section>

          <p>
            Prin utilizarea site-ului Flowers by Bella, confirmati ca ati citit si sunteti de acord cu aceasta politica de confidentialitate.
          </p>

        </main>
      </section>
    </div>
  )
}

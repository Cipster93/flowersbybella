import { dancingScript } from "../lib/fonts";
import { getCurrentWeekString } from "../lib/dateUtils";
import { weeklyOfferImages } from "../types/images";
import WeeklyImage from "./WeeklyImage";

export default function WeeklyOffers() {
  const weekString = getCurrentWeekString();

  return (
    <section
      className="w-full rounded-2xl p-6 lg:p-6 gap-8 lg:border-l-8 lg:border-red-600 flex flex-col lg:flex-row items-center justify-between"
      aria-labelledby="weekly-offers-heading"
    >
      <figure className="w-full lg:w-1/3 flex items-center justify-center">
        <WeeklyImage images={weeklyOfferImages} />
      </figure>

      <article className="w-full flex flex-col justify-center items-start gap-6 px-2 lg:px-8">
        <p className="text-base lg:text-lg text-gray-400 font-semibold mb-2">
          Săptămâna în curs: {weekString}
        </p>

        <h2
          id="weekly-offers-heading"
          className={`text-3xl lg:text-6xl font-bold text-yellow-600 mb-2 ${dancingScript.className}`}
        >
          Descoperă ofertele săptămânii
        </h2>

        <p
          className={`text-lg lg:text-2xl text-gray-400 mb-4 ${dancingScript.className}`}
        >
          Bucură-te de aranjamente florale speciale, selectate cu grijă pentru a
          aduce prospețime și culoare în fiecare zi. Ofertele sunt valabile doar
          săptămâna aceasta!
        </p>

        <section className="flex flex-wrap items-center gap-4 mt-2 w-full">
          <div
            className={`text-xl rounded-lg px-4 py-2 text-gray-400 font-semibold text-center border-2 border-gray-400 flex-1 min-w-[120px] ${dancingScript.className}`}
          >
            Bonus: comenzi peste <span className="text-yellow-600">150 lei</span> –  
            O cutie de bomboane cadou
          </div>

          <div
            className={`text-xl rounded-lg px-4 py-2 text-gray-400 font-semibold text-center border-2 border-gray-400 flex-1 min-w-[120px] ${dancingScript.className}`}
          >
            Bonus: comenzi peste <span className="text-yellow-600">250 lei</span> –  
            O sticlă de vin / șampanie
          </div>
        </section>
      </article>
    </section>
  );
}

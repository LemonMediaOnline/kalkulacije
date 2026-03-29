import React from 'react';
import { CheckCircle } from 'lucide-react';

const benefits = [
  {
    title: 'Izbjegnite iznenađenja',
    description:
      'Porez na nekretnine u Hrvatskoj uveden je 2024. i mnogi vlasnici nekretnina tek sada dobivaju prve obavijesti o razrezu poreza. Kalkulator vam pomaže da unaprijed znate koliki iznos možete očekivati i planirate budžet.',
  },
  {
    title: 'Usporedite nekretnine',
    description:
      'Razmišljate o kupnji kuće ili stana na više lokacija? Koristite kalkulator da usporedite godišnji porezni teret za različite nekretnine i lokacije te donesete informiranu odluku.',
  },
  {
    title: 'Provjerite rješenje o razrezu',
    description:
      'Primili ste rješenje o razrezu poreza na nekretnine i niste sigurni je li iznos točan? Unesite podatke i usporedite s kalkulatorom. Ako se iznosi značajno razlikuju, možete podnijeti prigovor Poreznoj upravi.',
  },
  {
    title: 'Korisno za iznajmljivače',
    description:
      'Iznajmljujete nekretninu? Porez na nekretnine je trošak kojeg morate uzeti u obzir pri određivanju najamnine. Kalkulator vam pomaže odrediti pravu cijenu najma koja pokriva sve troškove.',
  },
];

export function PropertyTaxBenefits() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Zašto koristiti kalkulator poreza na nekretnine?
          </h2>
          <p className="text-gray-600 mb-10 text-base sm:text-lg">
            Porez na nekretnine u Hrvatskoj je nova obveza za mnoge vlasnike. Razumijevanje načina izračuna i planiranje troška može vam uštedjeti stres i novac.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((b) => (
              <div key={b.title} className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{b.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{b.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Informational block */}
          <div className="mt-12 bg-blue-50 rounded-2xl p-8">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
              Kako se obračunava porez na nekretnine u Hrvatskoj?
            </h3>
            <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
              <p>
                Porez na nekretnine u Hrvatskoj uveden je 2024. godine kao zamjena za komunalnu naknadu. Prihod od poreza ide jedinicama lokalne samouprave (JLS) — gradovima i općinama.
              </p>
              <p>
                <strong>Osnovica za izračun</strong> je tržišna vrijednost nekretnine, koju procjenjuje Porezna uprava na temelju podataka o stvarnim prodajama nekretnina u vašoj zoni.
              </p>
              <p>
                <strong>Porezna stopa</strong> je između 0,6‰ i 8‰ godišnje od tržišne vrijednosti. Svaki grad ili općina samostalno određuje točnu stopu u ovim granicama. Primjerice, ako je vaša nekretnina procijenjena na 200.000 EUR i stopa je 1,5‰, godišnji porez iznosi 300 EUR.
              </p>
              <p>
                <strong>Oslobođenja i popusti:</strong> Vlasnici koji u nekretnini imaju prijavljeno primarno boravište mogu ostvariti popust do 50%. Postoje i posebne odredbe za osobe s invaliditetom, branitelje i nekretnine u ruralnim područjima.
              </p>
              <p>
                <strong>Rok plaćanja:</strong> Porez se plaća na temelju rješenja Porezne uprave, obično jednom godišnje ili kvartalno, ovisno o visini iznosa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'Tko mora plaćati porez na nekretnine u Hrvatskoj?',
    answer:
      'Porez na nekretnine plaćaju svi vlasnici nekretnina u Republici Hrvatskoj — fizičke i pravne osobe. To uključuje vlasnike stanova, kuća, poslovnih prostora, garaža, zemljišta i ostalih nekretnina. Iznimka su određene kategorije nekretnina koje su zakonom oslobođene, poput nekretnina u vlasništvu države, vjerskih zajednica i nekih neprofitnih organizacija.',
  },
  {
    question: 'Kolika je stopa poreza na nekretnine?',
    answer:
      'Stopa poreza na nekretnine u Hrvatskoj je između 0,6‰ i 8‰ godišnje od tržišne vrijednosti nekretnine. Svaka jedinica lokalne samouprave (grad ili općina) samostalno određuje točnu stopu u ovim zakonskim granicama. Prosječna stopa za stambene nekretnine u većini gradova iznosi između 1‰ i 2‰.',
  },
  {
    question: 'Kako se računa tržišna vrijednost nekretnine za potrebe poreza?',
    answer:
      'Tržišnu vrijednost nekretnine procjenjuje Porezna uprava na temelju podataka o stvarnim transakcijama nekretnina u vašem području. Uzimaju se u obzir lokacija, površina, starost i stanje nekretnine, te prosječne tržišne cijene u zoni. Ako smatrate da je procjena netočna, možete podnijeti prigovor Poreznoj upravi u roku od 30 dana od dostave rješenja.',
  },
  {
    question: 'Imam li pravo na popust ako je to moja jedina nekretnina?',
    answer:
      'Pravo na popust na porez na nekretnine imaju vlasnici koji u nekretnini imaju prijavljeno primarno boravište. Popust može iznositi do 50% od redovnog poreza. Da biste ostvarili popust, nekretnina mora biti vaše primarno mjesto stanovanja prema evidenciji o prebivalištu. Popust se ne primjenjuje automatski u svim JLS-ovima — provjerite uvjete u svom gradu ili općini.',
  },
  {
    question: 'Što ako ne platim porez na nekretnine na vrijeme?',
    answer:
      'Neplaćanje poreza na nekretnine u propisanom roku dovodi do obračuna zateznih kamata. U slučaju dugotrajnog neplaćanja, Porezna uprava može pokrenuti ovršni postupak. Godišnja kamatna stopa za nepravovremeno plaćanje poreza u Hrvatskoj iznosi trenutno oko 10%. Preporučujemo pravovremeno plaćanje ili dogovor o obročnoj otplati s Poreznom upravom.',
  },
  {
    question: 'Je li porez na nekretnine isti za sve gradove u Hrvatskoj?',
    answer:
      'Ne. Svaki grad i općina u Hrvatskoj samostalno određuje stopu poreza na nekretnine u zakonski propisanom rasponu. Primjerice, Zagreb može imati drugu stopu od Splita, Rijeke ili malih općina. Zbog toga je važno saznati točnu stopu za svoju lokaciju kod nadležne lokalne samouprave ili Porezne uprave.',
  },
  {
    question: 'Vrijedi li ista stopa za poslovne i stambene nekretnine?',
    answer:
      'Zakon dopušta jedinicama lokalne samouprave da odrede različite stope za različite vrste nekretnina. U praksi, poslovni prostori, garaže i neizgrađeno građevinsko zemljište često imaju višu stopu od stambenih nekretnina. U kalkulatoru smo postavili zadane procijenjene stope prema vrstama, ali preporučujemo provjeru točne stope za vaš tip nekretnine u vašoj JLS.',
  },
  {
    question: 'Koliko puta godišnje plaćam porez na nekretnine?',
    answer:
      'Porez na nekretnine plaća se na temelju rješenja Porezne uprave. Ako je godišnji iznos poreza manji od 100 EUR, plaća se jednokratno. Ako je iznos viši, plaćanje je moguće u ratama — obično kvartalno (4 puta godišnje). Točan raspored plaćanja naveden je u rješenju koje ćete primiti od Porezne uprave ili lokalne samouprave.',
  },
  {
    question: 'Kako prigovoriti rješenju o porezu na nekretnine?',
    answer:
      'Ako smatrate da je rješenje o razrezu poreza na nekretnine netočno — bila to procjena tržišne vrijednosti, primijenjena stopa ili neopravdano uskraćivanje popusta — imate pravo podnijeti prigovor u roku od 30 dana od dana dostave rješenja. Prigovor se podnosi Poreznoj upravi, a u slučaju neprihvaćanja prigovora, možete pokrenuti upravni spor pred Upravnim sudom.',
  },
];

export function PropertyTaxFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center">
            Često postavljana pitanja o porezu na nekretnine
          </h2>
          <p className="text-center text-gray-600 mb-10">
            Sve što trebate znati o porezu na nekretnine u Hrvatskoj — od načina izračuna do prigovora na rješenje.
          </p>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  {openIndex === i ? (
                    <ChevronUp className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openIndex === i && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

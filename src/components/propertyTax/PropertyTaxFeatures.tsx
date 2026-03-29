import React from 'react';
import { Calculator, MapPin, Home, Percent, Clock, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Calculator,
    title: 'Točan izračun prema zakonu',
    description:
      'Kalkulator koristi zakonski raspon stopa od 0,6‰ do 8‰ koji su propisani Zakonom o lokalnim porezima (NN 115/16, 101/17). Izračun uzima u obzir vrstu nekretnine i zonu.',
    color: 'text-blue-500',
    bg: 'bg-blue-50',
  },
  {
    icon: MapPin,
    title: 'Četiri zone u Hrvatskoj',
    description:
      'Hrvatska je podijeljena u četiri zone prema prosječnim tržišnim vrijednostima nekretnina: Zagreb i obala (A), veći gradovi (B), manji gradovi (C) i ruralna područja (D).',
    color: 'text-green-500',
    bg: 'bg-green-50',
  },
  {
    icon: Home,
    title: 'Popust za primarno boravište',
    description:
      'Vlasnici koji koriste nekretninu kao primarno boravište imaju pravo na popust do 50% na godišnji porez. Kalkulator automatski primjenjuje ovaj popust.',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
  },
  {
    icon: Percent,
    title: 'Prilagodljiva porezna stopa',
    description:
      'Svaka jedinica lokalne samouprave (JLS) samostalno određuje stopu unutar zakonskog raspona. Možete unijeti stvarnu stopu svoje općine ili koristiti zadanu procjenu.',
    color: 'text-orange-500',
    bg: 'bg-orange-50',
  },
  {
    icon: Clock,
    title: 'Godišnje, kvartalno i mjesečno',
    description:
      'Kalkulator prikazuje iznos poreza na godišnjoj, kvartalnoj i mjesečnoj razini, što vam pomaže planirati financije i rezervirati sredstva na vrijeme.',
    color: 'text-teal-500',
    bg: 'bg-teal-50',
  },
  {
    icon: ShieldCheck,
    title: 'Besplatno i bez registracije',
    description:
      'Kalkulator je potpuno besplatan i radi lokalno u vašem pregledniku. Nikakvi osobni podaci niti informacije o nekretnini ne napuštaju vaš uređaj.',
    color: 'text-red-500',
    bg: 'bg-red-50',
  },
];

export function PropertyTaxFeatures() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-4">
          Sve što trebate znati o porezu na nekretnine
        </h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Naš kalkulator uzima u obzir sve ključne faktore koji utječu na visinu poreza na nekretnine u Hrvatskoj — lokaciju, vrstu, površinu i status boravišta.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((f) => (
            <div key={f.title} className="bg-white rounded-2xl p-6 shadow-sm">
              <div className={`w-12 h-12 rounded-xl ${f.bg} flex items-center justify-center mb-4`}>
                <f.icon className={`w-6 h-6 ${f.color}`} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

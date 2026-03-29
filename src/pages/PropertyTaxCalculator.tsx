import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PropertyTaxForm } from '../components/propertyTax/PropertyTaxForm';
import { PropertyTaxFeatures } from '../components/propertyTax/PropertyTaxFeatures';
import { PropertyTaxBenefits } from '../components/propertyTax/PropertyTaxBenefits';
import { PropertyTaxFAQ } from '../components/propertyTax/PropertyTaxFAQ';

const PAGE_URL = 'https://kalkulacije.com/kalkulator-poreza-na-nekretnine';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Tko mora plaćati porez na nekretnine u Hrvatskoj?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Porez na nekretnine plaćaju svi vlasnici nekretnina u Republici Hrvatskoj — fizičke i pravne osobe. To uključuje vlasnike stanova, kuća, poslovnih prostora, garaža i zemljišta.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kolika je stopa poreza na nekretnine u Hrvatskoj?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Stopa poreza na nekretnine u Hrvatskoj je između 0,6‰ i 8‰ godišnje od tržišne vrijednosti nekretnine. Svaka jedinica lokalne samouprave samostalno određuje točnu stopu.',
      },
    },
    {
      '@type': 'Question',
      name: 'Imam li pravo na popust ako je to moje primarno boravište?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Da. Vlasnici koji u nekretnini imaju prijavljeno primarno boravište imaju pravo na popust do 50% na godišnji porez na nekretnine.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kako prigovoriti rješenju o porezu na nekretnine?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Prigovor možete podnijeti Poreznoj upravi u roku od 30 dana od dostave rješenja. Ako prigovor bude odbijen, možete pokrenuti upravni spor pred Upravnim sudom.',
      },
    },
    {
      '@type': 'Question',
      name: 'Koliko puta godišnje plaćam porez na nekretnine?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ako je godišnji iznos poreza manji od 100 EUR, plaća se jednokratno. Viši iznosi plaćaju se kvartalno (4 puta godišnje) prema rasporedu u rješenju Porezne uprave.',
      },
    },
  ],
};

const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Kalkulator Poreza na Nekretnine',
  url: PAGE_URL,
  description:
    'Besplatni online kalkulator poreza na nekretnine za Hrvatsku. Izračunajte godišnji, kvartalni i mjesečni porez prema površini, vrsti nekretnine i lokaciji.',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'All',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR',
  },
  inLanguage: 'hr',
  author: {
    '@type': 'Organization',
    name: 'Kalkulacije.com',
    url: 'https://kalkulacije.com',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Kalkulatori',
      item: 'https://kalkulacije.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Kalkulator Poreza na Nekretnine',
      item: PAGE_URL,
    },
  ],
};

export function PropertyTaxCalculator() {
  return (
    <>
      <Helmet>
        <title>Kalkulator Poreza na Nekretnine 2026 | Kalkulacije.com</title>
        <meta
          name="description"
          content="Besplatni kalkulator poreza na nekretnine za Hrvatsku 2026. Izračunajte godišnji porez na stan, kuću ili poslovni prostor prema zoni, površini i vrsti nekretnine. Uključen popust za primarno boravište."
        />
        <meta
          name="keywords"
          content="kalkulator poreza na nekretnine, porez na nekretnine hrvatska, porez na stan, porez na kuću, porezna uprava nekretnine, razrez poreza nekretnine 2026"
        />
        <link rel="canonical" href={PAGE_URL} />

        {/* Open Graph */}
        <meta property="og:title" content="Kalkulator Poreza na Nekretnine 2026 | Kalkulacije.com" />
        <meta
          property="og:description"
          content="Izračunajte porez na nekretnine u Hrvatskoj prema vašoj zoni, površini i vrsti nekretnine. Popust za primarno boravište uključen."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="hr_HR" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Kalkulator Poreza na Nekretnine 2026 | Kalkulacije.com" />
        <meta
          name="twitter:description"
          content="Besplatni online izračun poreza na nekretnine u Hrvatskoj. Unesite površinu, zonu i vrstu — dobijete godišnji iznos za platiti."
        />

        {/* Schema.org */}
        <script type="application/ld+json">{JSON.stringify(webAppSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      {/* Hero */}
      <section className="pt-16 pb-8 text-center">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-6 flex justify-center gap-2" aria-label="Breadcrumb">
            <a href="/" className="hover:text-blue-600 transition-colors">Kalkulatori</a>
            <span>›</span>
            <span className="text-gray-900">Porez na Nekretnine</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Kalkulator Poreza na Nekretnine
          </h1>
          <p className="text-base sm:text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
            Izračunajte godišnji porez na nekretnine u Hrvatskoj za 2026. godinu.
            Unesite površinu, vrstu i lokaciju nekretnine — rezultat odmah.
          </p>
          <div className="inline-flex items-start sm:items-center gap-2 bg-amber-50 border border-amber-200 text-amber-800 text-sm font-medium px-4 py-2 rounded-full text-left">
            <span className="flex-shrink-0">⚠️</span>
            <span>Rok za prijavu podataka o nekretninama: 31. ožujka 2026.</span>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <PropertyTaxForm />
        </div>
      </section>

      {/* Content sections */}
      <PropertyTaxFeatures />
      <PropertyTaxBenefits />
      <PropertyTaxFAQ />

      {/* Bottom CTA / disclaimer */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
            Niste sigurni u iznos vašeg poreza?
          </h2>
          <p className="text-gray-600 mb-6">
            Ovaj kalkulator daje procjenski iznos. Za točan iznos uvijek provjerite rješenje Porezne uprave ili se obratite vašoj lokalnoj samoupravi (gradu ili općini). Prigovor na rješenje možete podnijeti u roku od 30 dana od dostave.
          </p>
          <a
            href="https://porezna-uprava.gov.hr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
          >
            Posjetite Poreznu upravu →
          </a>
        </div>
      </section>
    </>
  );
}

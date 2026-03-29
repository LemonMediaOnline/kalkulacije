import React, { useState } from 'react';
import { GradientCard } from '../GradientCard';
import {
  PropertyTaxInput,
  PropertyTaxResult,
  PropertyType,
  ZoneType,
  ZONE_PRICES,
  PROPERTY_TYPE_LABELS,
  DEFAULT_RATES,
  calculatePropertyTax,
  formatEur,
} from '../../utils/propertyTaxCalculator';
import { Home, Building2, Info } from 'lucide-react';

const defaultInput: PropertyTaxInput = {
  area: 80,
  propertyType: 'stambena',
  zone: 'A',
  isPrimaryResidence: true,
};

export function PropertyTaxForm() {
  const [input, setInput] = useState<PropertyTaxInput>(defaultInput);
  const [showRateInfo, setShowRateInfo] = useState(false);

  const result: PropertyTaxResult = calculatePropertyTax(input);

  const handleChange = (changes: Partial<PropertyTaxInput>) => {
    setInput((prev) => ({ ...prev, ...changes }));
  };

  const inputClasses = `
    block w-full rounded-lg
    border-2 border-gray-200
    focus:border-blue-500 focus:ring-blue-500
    shadow-sm hover:border-gray-300
    text-base py-3 px-4
    transition-colors duration-200
  `;

  const selectClasses = `
    block w-full rounded-lg
    border-2 border-gray-200
    focus:border-blue-500 focus:ring-blue-500
    shadow-sm hover:border-gray-300
    text-base py-3 px-4
    transition-colors duration-200
    bg-white
  `;

  return (
    <div className="grid gap-6 md:gap-8 md:grid-cols-2">
      {/* INPUT PANEL */}
      <div className="space-y-6">
        <GradientCard>
          <div className="space-y-6">

            {/* Area */}
            <div className="space-y-2">
              <label className="block text-base font-medium text-gray-700">
                Površina nekretnine (m²)
              </label>
              <input
                type="number"
                min="1"
                max="10000"
                value={input.area}
                onChange={(e) => handleChange({ area: Math.max(1, Number(e.target.value)) })}
                className={inputClasses}
              />
            </div>

            {/* Property type */}
            <div className="space-y-2">
              <label className="block text-base font-medium text-gray-700">
                Vrsta nekretnine
              </label>
              <div className="grid grid-cols-1 gap-2">
                {(Object.keys(PROPERTY_TYPE_LABELS) as PropertyType[]).map((type) => (
                  <button
                    key={type}
                    onClick={() => handleChange({ propertyType: type })}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg border-2 text-left transition-colors duration-200
                      ${input.propertyType === type
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'}`}
                  >
                    {type === 'stambena' ? <Home className="w-5 h-5 flex-shrink-0" /> : <Building2 className="w-5 h-5 flex-shrink-0" />}
                    <span className="font-medium">{PROPERTY_TYPE_LABELS[type]}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Zone */}
            <div className="space-y-2">
              <label className="block text-base font-medium text-gray-700">
                Lokacija (zona)
              </label>
              <select
                value={input.zone}
                onChange={(e) => handleChange({ zone: e.target.value as ZoneType })}
                className={selectClasses}
              >
                {(Object.keys(ZONE_PRICES) as ZoneType[]).map((zone) => (
                  <option key={zone} value={zone}>
                    {ZONE_PRICES[zone].label}
                  </option>
                ))}
              </select>
            </div>

            {/* Primary residence */}
            <div className="space-y-2">
              <label className="block text-base font-medium text-gray-700">
                Primarna adresa stanovanja?
              </label>
              <div className="flex gap-3">
                {[true, false].map((val) => (
                  <button
                    key={String(val)}
                    onClick={() => handleChange({ isPrimaryResidence: val })}
                    className={`flex-1 py-3 rounded-lg border-2 font-medium transition-colors duration-200
                      ${input.isPrimaryResidence === val
                        ? 'border-blue-500 bg-blue-500 text-white'
                        : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'}`}
                  >
                    {val ? 'Da' : 'Ne'}
                  </button>
                ))}
              </div>
              {input.isPrimaryResidence && (
                <p className="text-sm text-green-600 flex items-center gap-1">
                  <Info className="w-4 h-4" />
                  Primjenjuje se popust 50% za primarno boravište
                </p>
              )}
            </div>

            {/* Custom rate toggle */}
            <div className="space-y-2">
              <button
                onClick={() => setShowRateInfo(!showRateInfo)}
                className="text-sm text-blue-600 hover:underline flex items-center gap-1"
              >
                <Info className="w-4 h-4" />
                Prilagodi stopu poreza (‰)
              </button>
              {showRateInfo && (
                <div className="space-y-2">
                  <p className="text-xs text-gray-500">
                    Zakonski raspon: 0,6‰ – 8‰. Zadana stopa za odabranu vrstu nekretnine: {DEFAULT_RATES[input.propertyType]}‰
                  </p>
                  <input
                    type="number"
                    min="0.6"
                    max="8"
                    step="0.1"
                    placeholder={String(DEFAULT_RATES[input.propertyType])}
                    value={input.customRate ?? ''}
                    onChange={(e) =>
                      handleChange({
                        customRate: e.target.value === '' ? undefined : Number(e.target.value),
                      })
                    }
                    className={inputClasses}
                  />
                </div>
              )}
            </div>

          </div>
        </GradientCard>
      </div>

      {/* RESULT PANEL */}
      <div className="space-y-6">
        <GradientCard>
          <div className="space-y-5">
            <h2 className="text-xl font-semibold text-gray-900">Rezultat izračuna</h2>

            <div className="bg-blue-50 rounded-xl p-4 space-y-1">
              <p className="text-sm text-blue-600 font-medium">Godišnji porez na nekretnine</p>
              <p className="text-2xl sm:text-4xl font-bold text-blue-700 break-all">{formatEur(result.annualTaxAfterDiscount)}</p>
              {result.primaryResidenceDiscount > 0 && (
                <p className="text-sm text-green-600">Popust za primarno boravište: -{formatEur(result.primaryResidenceDiscount)}</p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-xs text-gray-500 mb-1">Kvartalno</p>
                <p className="text-base sm:text-lg font-semibold text-gray-900 break-all">{formatEur(result.quarterlyTax)}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-xs text-gray-500 mb-1">Mjesečno</p>
                <p className="text-base sm:text-lg font-semibold text-gray-900 break-all">{formatEur(result.monthlyTax)}</p>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-4 space-y-3">
              <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Detalji izračuna</h3>
              <Row label="Površina" value={`${input.area} m²`} />
              <Row label="Procjenjena tržišna vrijednost" value={formatEur(result.estimatedMarketValue)} />
              <Row label={`Cijena po m² (${result.zoneName})`} value={formatEur(result.pricePerSqm)} />
              <Row label="Primijenjena stopa" value={`${result.appliedRate}‰`} />
              <Row label="Porez prije popusta" value={formatEur(result.annualTax)} />
              {result.primaryResidenceDiscount > 0 && (
                <Row label="Popust za primarno boravište (50%)" value={`-${formatEur(result.primaryResidenceDiscount)}`} highlight="green" />
              )}
              <div className="border-t border-gray-200 pt-2">
                <Row label="Ukupni godišnji porez" value={formatEur(result.annualTaxAfterDiscount)} bold />
              </div>
            </div>

            <p className="text-xs text-gray-400">
              * Izračun je procjenski na temelju prosječnih tržišnih cijena za odabranu zonu. Stvarni porez ovisi o procijeni jedince lokalne samouprave.
            </p>
          </div>
        </GradientCard>
      </div>
    </div>
  );
}

function Row({
  label,
  value,
  bold = false,
  highlight,
}: {
  label: string;
  value: string;
  bold?: boolean;
  highlight?: 'green';
}) {
  return (
    <div className="flex flex-col xs:flex-row xs:justify-between xs:items-center gap-0.5 xs:gap-2">
      <span className={`text-sm ${bold ? 'font-semibold text-gray-900' : 'text-gray-600'}`}>{label}</span>
      <span
        className={`text-sm font-semibold whitespace-nowrap ${
          highlight === 'green' ? 'text-green-600' : bold ? 'text-blue-700' : 'text-gray-900'
        }`}
      >
        {value}
      </span>
    </div>
  );
}

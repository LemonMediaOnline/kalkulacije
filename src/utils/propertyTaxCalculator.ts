export type PropertyType = 'stambena' | 'poslovna' | 'ostalo';
export type ZoneType = 'A' | 'B' | 'C' | 'D';

export interface PropertyTaxInput {
  area: number;            // m²
  propertyType: PropertyType;
  zone: ZoneType;
  isPrimaryResidence: boolean;
  customRate?: number;     // ‰ — optional override
}

export interface PropertyTaxResult {
  estimatedMarketValue: number;
  appliedRate: number;       // ‰
  annualTax: number;
  monthlyTax: number;
  quarterlyTax: number;
  primaryResidenceDiscount: number;
  annualTaxAfterDiscount: number;
  pricePerSqm: number;
  zone: ZoneType;
  zoneName: string;
}

// Average market prices per m² by zone (EUR, 2026 estimates)
export const ZONE_PRICES: Record<ZoneType, { name: string; label: string; pricePerSqm: number }> = {
  A: {
    name: 'Zagreb i obala',
    label: 'Zona A — Zagreb, Split, Dubrovnik, obalna područja',
    pricePerSqm: 2600,
  },
  B: {
    name: 'Veći gradovi',
    label: 'Zona B — Rijeka, Osijek, Zadar, Pula, veći gradovi',
    pricePerSqm: 1600,
  },
  C: {
    name: 'Manji gradovi',
    label: 'Zona C — Manji gradovi i prigradska područja',
    pricePerSqm: 900,
  },
  D: {
    name: 'Ruralna područja',
    label: 'Zona D — Sela i ruralna područja',
    pricePerSqm: 400,
  },
};

// Default tax rates (‰) per property type — mid-range of 0.6‰–8‰ legal range
export const DEFAULT_RATES: Record<PropertyType, number> = {
  stambena: 1.5,
  poslovna: 3.0,
  ostalo: 2.0,
};

export const PROPERTY_TYPE_LABELS: Record<PropertyType, string> = {
  stambena: 'Stambena nekretnina',
  poslovna: 'Poslovna nekretnina',
  ostalo: 'Ostalo (garaže, zemljište...)',
};

export const PRIMARY_RESIDENCE_DISCOUNT_RATE = 0.5; // 50% discount for primary residence

export function calculatePropertyTax(input: PropertyTaxInput): PropertyTaxResult {
  const zoneData = ZONE_PRICES[input.zone];
  const pricePerSqm = zoneData.pricePerSqm;
  const estimatedMarketValue = input.area * pricePerSqm;

  const appliedRate = (input.customRate ?? DEFAULT_RATES[input.propertyType]) / 1000; // convert ‰ to fraction

  const annualTaxBeforeDiscount = estimatedMarketValue * appliedRate;

  const primaryResidenceDiscount = input.isPrimaryResidence
    ? annualTaxBeforeDiscount * PRIMARY_RESIDENCE_DISCOUNT_RATE
    : 0;

  const annualTaxAfterDiscount = annualTaxBeforeDiscount - primaryResidenceDiscount;
  const monthlyTax = annualTaxAfterDiscount / 12;
  const quarterlyTax = annualTaxAfterDiscount / 4;

  return {
    estimatedMarketValue: round2(estimatedMarketValue),
    appliedRate: input.customRate ?? DEFAULT_RATES[input.propertyType],
    annualTax: round2(annualTaxBeforeDiscount),
    monthlyTax: round2(monthlyTax),
    quarterlyTax: round2(quarterlyTax),
    primaryResidenceDiscount: round2(primaryResidenceDiscount),
    annualTaxAfterDiscount: round2(annualTaxAfterDiscount),
    pricePerSqm,
    zone: input.zone,
    zoneName: zoneData.name,
  };
}

function round2(n: number): number {
  return Math.round(n * 100) / 100;
}

export function formatEur(value: number): string {
  return new Intl.NumberFormat('hr-HR', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

import { pricing } from '../config/brand';

export function calculatePerTestPrice(studentCount) {
  const { basePrice, tiers } = pricing.perTest;
  let total = basePrice;
  let remaining = studentCount;

  for (const tier of tiers) {
    if (remaining <= 0) break;
    const tierMin = tier.min;
    const tierMax = Math.min(tier.max, studentCount);
    const tierCount = tierMax - tierMin + 1;
    const applicable = Math.min(remaining, tierCount);
    total += applicable * tier.rate;
    remaining -= applicable;
  }

  return total;
}

export function getTierRate(studentCount) {
  const { tiers } = pricing.perTest;
  for (const tier of tiers) {
    if (studentCount >= tier.min && studentCount <= tier.max) return tier.rate;
  }
  return tiers[tiers.length - 1].rate;
}

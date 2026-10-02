export const ROLES = ["top", "jungle", "mid", "adc", "support"] as const;

export type Role = (typeof ROLES)[number];

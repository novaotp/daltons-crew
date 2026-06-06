import z from "zod";

export const MINIMUM_PREFERENCE = 1;
export const MAXIMUM_PREFERENCE = 5;

export const MINIMUM_SKILL = 1;
export const MAXIMUM_SKILL = 10;

export const UpdateLeaguePlayerSchema = z.object({
    id: z.string(),
    preference: z.object({
        top: z
            .number({ error: "Ce champ doit être un numéro." })
            .min(MINIMUM_PREFERENCE, {
                error: (issue) => `La valeur ne peut pas être plus petite que ${issue.minimum}.`,
            })
            .max(MAXIMUM_PREFERENCE, {
                error: (issue) => `La valeur ne peut pas être plus grande que ${issue.maximum}.`,
            }),
        jungle: z
            .number({ error: "Ce champ doit être un numéro." })
            .min(MINIMUM_PREFERENCE, {
                error: (issue) => `La valeur ne peut pas être plus petite que ${issue.minimum}.`,
            })
            .max(MAXIMUM_PREFERENCE, {
                error: (issue) => `La valeur ne peut pas être plus grande que ${issue.maximum}.`,
            }),
        mid: z
            .number({ error: "Ce champ doit être un numéro." })
            .min(MINIMUM_PREFERENCE, {
                error: (issue) => `La valeur ne peut pas être plus petite que ${issue.minimum}.`,
            })
            .max(MAXIMUM_PREFERENCE, {
                error: (issue) => `La valeur ne peut pas être plus grande que ${issue.maximum}.`,
            }),
        adc: z
            .number({ error: "Ce champ doit être un numéro." })
            .min(MINIMUM_PREFERENCE, {
                error: (issue) => `La valeur ne peut pas être plus petite que ${issue.minimum}.`,
            })
            .max(MAXIMUM_PREFERENCE, {
                error: (issue) => `La valeur ne peut pas être plus grande que ${issue.maximum}.`,
            }),
        support: z
            .number({ error: "Ce champ doit être un numéro." })
            .min(MINIMUM_PREFERENCE, {
                error: (issue) => `La valeur ne peut pas être plus petite que ${issue.minimum}.`,
            })
            .max(MAXIMUM_PREFERENCE, {
                error: (issue) => `La valeur ne peut pas être plus grande que ${issue.maximum}.`,
            }),
    }),
    skill: z.object({
        top: z
            .number({ error: "Ce champ doit être un numéro." })
            .min(MINIMUM_SKILL, {
                error: (issue) => `La valeur ne peut pas être plus petite que ${issue.minimum}.`,
            })
            .max(MAXIMUM_SKILL, {
                error: (issue) => `La valeur ne peut pas être plus grande que ${issue.maximum}.`,
            }),
        jungle: z
            .number({ error: "Ce champ doit être un numéro." })
            .min(MINIMUM_SKILL, {
                error: (issue) => `La valeur ne peut pas être plus petite que ${issue.minimum}.`,
            })
            .max(MAXIMUM_SKILL, {
                error: (issue) => `La valeur ne peut pas être plus grande que ${issue.maximum}.`,
            }),
        mid: z
            .number({ error: "Ce champ doit être un numéro." })
            .min(MINIMUM_SKILL, {
                error: (issue) => `La valeur ne peut pas être plus petite que ${issue.minimum}.`,
            })
            .max(MAXIMUM_SKILL, {
                error: (issue) => `La valeur ne peut pas être plus grande que ${issue.maximum}.`,
            }),
        adc: z
            .number({ error: "Ce champ doit être un numéro." })
            .min(MINIMUM_SKILL, {
                error: (issue) => `La valeur ne peut pas être plus petite que ${issue.minimum}.`,
            })
            .max(MAXIMUM_SKILL, {
                error: (issue) => `La valeur ne peut pas être plus grande que ${issue.maximum}.`,
            }),
        support: z
            .number({ error: "Ce champ doit être un numéro." })
            .min(MINIMUM_SKILL, {
                error: (issue) => `La valeur ne peut pas être plus petite que ${issue.minimum}.`,
            })
            .max(MAXIMUM_SKILL, {
                error: (issue) => `La valeur ne peut pas être plus grande que ${issue.maximum}.`,
            }),
    }),
});

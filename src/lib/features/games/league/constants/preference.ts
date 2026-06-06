export const PREFERENCE_LEVELS: Record<number, string> = {
    1: "Mon main",
    2: "J'aime bien",
    3: "Pourquoi pas",
    4: "Bof",
    5: "Jamais",
};

export function getPreferenceLevel(preference: number): string {
    return PREFERENCE_LEVELS[preference];
}

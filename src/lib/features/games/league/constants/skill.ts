export const SKILL_LEVELS: Record<number, string> = {
    1: "Noob",
    2: "Fragile",
    3: "Passable",
    4: "Fiable",
    5: "Impactant",
    6: "Dominant",
    7: "Carry",
    8: "Elite",
    9: "Intouchable",
    10: "Légendaire",
};

export function getSkillLevel(skill: number): string {
    return SKILL_LEVELS[skill];
}

import type { Member } from "$lib/generated/prisma/browser";
import type { Prettify } from "$types/prettify";
import type { Role } from "./role";

export type LeaguePlayer = Prettify<
    Member & {
        preference: Record<Role, number>;
        skill: Record<Role, number>;
    }
>;

/** A player with his stats for a specific role. */
export type PlayerWithRoleStat = Prettify<
    Member & {
        preference: number;
        skill: number;
    }
>;

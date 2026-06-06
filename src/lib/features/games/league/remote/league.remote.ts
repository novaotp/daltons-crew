import type { JsonValue } from "@prisma/client/runtime/client";
import { error } from "@sveltejs/kit";
import z from "zod";
import { form, query } from "$app/server";
import { prisma } from "$lib/providers/prisma.server";
import type { LeaguePlayer, Role } from "../types";
import { UpdateLeaguePlayerSchema } from "./schemas";

type RawLeaguePlayer = {
    leagueStats: {
        skill: JsonValue;
        preference: JsonValue;
    } | null;
} & {
    id: string;
    name: string;
    nickname: string;
    createdAt: Date;
    updatedAt: Date;
};

export const getLeaguePlayer = query(z.cuid2(), async (id) => {
    const member = await prisma.member.findUnique({
        include: {
            leagueStats: {
                select: {
                    preference: true,
                    skill: true,
                },
            },
        },
        where: {
            id,
            leagueStats: {
                isNot: null,
            },
        },
    });
    if (!member) error(404, "Aucun joueur trouvé.");

    return rawToLeaguePlayer(member);
});

export const getLeaguePlayers = query(async () => {
    const rawMembers = await prisma.member.findMany({
        include: {
            leagueStats: {
                select: {
                    preference: true,
                    skill: true,
                },
            },
        },
        where: {
            leagueStats: {
                isNot: null,
            },
        },
    });

    return rawMembers.map(rawToLeaguePlayer);
});

export const updateLeaguePlayer = form(
    UpdateLeaguePlayerSchema,
    async ({ id, preference, skill }) => {
        const member = await prisma.member.findUnique({
            where: {
                id,
                leagueStats: {
                    isNot: null,
                },
            },
        });
        if (!member) error(404, "Ce membre n'existe pas ou ne joue pas à LoL.");

        await prisma.leagueStat.update({
            where: {
                memberId: id,
            },
            data: {
                preference,
                skill,
            },
        });
    }
);

function rawToLeaguePlayer(member: RawLeaguePlayer): LeaguePlayer {
    return {
        id: member.id,
        name: member.name,
        nickname: member.nickname,
        preference: member.leagueStats!.preference as Record<Role, number>,
        skill: member.leagueStats!.skill as Record<Role, number>,
        createdAt: member.createdAt,
        updatedAt: member.updatedAt,
    };
}

import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { Member, PrismaClient } from "../src/lib/generated/prisma/client";
import data from "./data.json";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
export const prisma = new PrismaClient({ adapter });

try {
    await main();
    await prisma.$disconnect();
} catch (error) {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
}

async function main() {
    const members = await upsertMembers();

    await upsertLeagueStats(members);
}

async function upsertMembers() {
    const futureMembers = data.map(async (member) => {
        return prisma.member.upsert({
            where: {
                name_nickname: {
                    name: member.name,
                    nickname: member.nickname,
                },
            },
            create: {
                name: member.name,
                nickname: member.nickname,
            },
            update: {
                name: member.name,
                nickname: member.nickname,
            },
        });
    });

    return Promise.all(futureMembers);
}

async function upsertLeagueStats(members: Member[]) {
    const futureLeagueStats = members.map(async (member) => {
        const memberData = data.find(
            (m) => m.name === member.name && m.nickname === member.nickname
        );
        if (!memberData) return null;

        return await prisma.leagueStat.upsert({
            where: {
                memberId: member.id,
            },
            update: {
                skill: memberData.skill,
                preference: memberData.preference,
            },
            create: {
                memberId: member.id,
                skill: memberData.skill,
                preference: memberData.preference,
            },
        });
    });

    return Promise.all(futureLeagueStats);
}

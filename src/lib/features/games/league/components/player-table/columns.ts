import type { ColumnDef } from "@tanstack/table-core";
import { createRawSnippet } from "svelte";
import { SortableHeader, renderComponent, renderSnippet } from "$components";
import type { PlayerWithRoleStat } from "../../types";
import PreferenceCell from "./PreferenceCell.svelte";
import SkillCell from "./SkillCell.svelte";
import UpdateModal from "./update-modal/UpdateModal.svelte";

export const columns: ColumnDef<PlayerWithRoleStat>[] = [
    {
        accessorKey: "name",
        header: "Nom",
        cell: ({ row }) => {
            const nameCellSnippet = createRawSnippet<[{ nickname: string; name: string }]>(
                (getData) => {
                    const { name, nickname } = getData();

                    return {
                        render: () => `<div>${nickname} (${name})</div>`,
                    };
                }
            );

            return renderSnippet(nameCellSnippet, {
                name: row.original.name,
                nickname: row.original.nickname,
            });
        },
    },
    {
        accessorKey: "skill",
        header: ({ column }) => {
            return renderComponent(SortableHeader, {
                header: "Compétence",
                sortDirection: column.getIsSorted(),
                onclick: column.getToggleSortingHandler(),
            });
        },
        cell: ({ row }) => {
            return renderComponent(SkillCell, {
                value: row.original.skill,
            });
        },
    },
    {
        accessorKey: "preference",
        header: ({ column }) => {
            return renderComponent(SortableHeader, {
                header: "Préférence",
                sortDirection: column.getIsSorted(),
                onclick: column.getToggleSortingHandler(),
            });
        },
        cell: ({ row }) => {
            return renderComponent(PreferenceCell, {
                value: row.original.preference,
            });
        },
    },
    {
        id: "actions",
        cell: ({ row }) => {
            return renderComponent(UpdateModal, { memberId: row.original.id });
        },
    },
];

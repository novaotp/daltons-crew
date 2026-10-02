<script lang="ts">
    import { type SortingState, getCoreRowModel, getSortedRowModel } from "@tanstack/table-core";
    import { FlexRender, createSvelteTable } from "$components/data-table";
    import { Table } from "$components/table";
    import type { PlayerWithRoleStat } from "../../types";
    import { columns } from "./columns";

    type DataTableProps = {
        data: PlayerWithRoleStat[];
    };

    let { data }: DataTableProps = $props();

    let sorting = $state<SortingState>([{ id: "skill", desc: true }]);

    const table = createSvelteTable({
        get data() {
            return data;
        },
        get columns() {
            return columns;
        },
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        onSortingChange: (updater) => {
            if (typeof updater === "function") {
                sorting = updater(sorting);
            } else {
                sorting = updater;
            }
        },
        state: {
            get sorting() {
                return sorting;
            },
        },
    });
</script>

<div class="max-w-[calc(100dvw-32px)] rounded-2xl border overflow-hidden">
    <Table.Root>
        <Table.Header>
            {#each table.getHeaderGroups() as headerGroup (headerGroup.id)}
                <Table.Row>
                    {#each headerGroup.headers as header (header.id)}
                        <Table.Head colspan={header.colSpan}>
                            {#if !header.isPlaceholder}
                                <FlexRender
                                    content={header.column.columnDef.header}
                                    context={header.getContext()}
                                />
                            {/if}
                        </Table.Head>
                    {/each}
                </Table.Row>
            {/each}
        </Table.Header>
        <Table.Body>
            {#each table.getRowModel().rows as row (row.id)}
                <Table.Row data-state={row.getIsSelected() && "selected"}>
                    {#each row.getVisibleCells() as cell (cell.id)}
                        <Table.Cell>
                            <FlexRender
                                content={cell.column.columnDef.cell}
                                context={cell.getContext()}
                            />
                        </Table.Cell>
                    {/each}
                </Table.Row>
            {:else}
                <Table.Row>
                    <Table.Cell colspan={columns.length} class="h-24 text-center">
                        Aucun résultat.
                    </Table.Cell>
                </Table.Row>
            {/each}
        </Table.Body>
    </Table.Root>
</div>

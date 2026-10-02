import type { RemoteForm, RemoteFormInput } from "@sveltejs/kit";

export type EnhanceParameterForm<
    T extends { enhance: RemoteForm<RemoteFormInput | void, unknown>["enhance"] },
> = Parameters<Parameters<T["enhance"]>[0]>[0];

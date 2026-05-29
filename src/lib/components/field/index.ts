import Content from "./field-content.svelte";
import Description from "./field-description.svelte";
import Error from "./field-error.svelte";
import Group from "./field-group.svelte";
import Label from "./field-label.svelte";
import Legend from "./field-legend.svelte";
import Separator from "./field-separator.svelte";
import Set from "./field-set.svelte";
import Title from "./field-title.svelte";
import CField from "./field.svelte";

export const Field = {
    Field: CField,
    Set,
    Legend,
    Group,
    Content,
    Label,
    Title,
    Description,
    Separator,
    Error,
};

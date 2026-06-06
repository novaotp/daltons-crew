import adcImage from "$assets/league/icons/adc.png";
import jungleImage from "$assets/league/icons/jungle.png";
import midImage from "$assets/league/icons/mid.png";
import supportImage from "$assets/league/icons/support.png";
import topImage from "$assets/league/icons/top.png";
import type { Role } from "../types/role";

type RoleConfig = {
    label: string;
    image: string
}

export const ROLE_CONFIGS: Record<Role, RoleConfig> = {
    top: {
        label: "Top",
        image: topImage
    },
    jungle: {
        label: "Jungle",
        image: jungleImage
    },
    mid: {
        label: "Mid",
        image: midImage
    },
    adc: {
        label: "ADC",
        image: adcImage
    },
    support: {
        label: "Support",
        image: supportImage
    },
};

export function getRoleConfig(role: Role): RoleConfig {
    return ROLE_CONFIGS[role];
}

// src/data/socials.ts
import { Github, Linkedin } from "lucide-astro";

export interface Social {
    label: string;
    handle: string;
    href: string;
    icon: any;
    color: string;
}

export const socials: Social[] = [
    {
        label: "GitHub",
        handle: "arcibyte",
        href: "https://github.com/arcibyte",
        icon: Github,
        color: "bg-zinc-100",
    },
    {
        label: "LinkedIn",
        handle: "Jhon Arciniegas",
        href: "https://linkedin.com/in/arcibyte",
        icon: Linkedin,
        color: "bg-blue-400",
    },
    {
        label: "Kaggle",
        handle: "arcibyte",
        href: "https://www.kaggle.com/arcibyte",
        icon: null,
        color: "bg-amber-300",
    },
];
import { getEntry } from 'astro:content';

export const supportedLocales = ["en", "es"] as const;
export type Locale = (typeof supportedLocales)[number];

export function getCurrentLocale(currentLocale: string | undefined): Locale {
    return supportedLocales.includes(currentLocale as Locale)
        ? (currentLocale as Locale)
        : "en";
}

export function getRelativeLocaleUrl(locale: string, path: string): string {
    const cleanPath = path.replace(/^\/(en|es)(\/|$)/, "/").replace(/\/+$/, "");
    const normalizedPath = cleanPath.startsWith("/")
        ? cleanPath
        : `/${cleanPath}`;

    return `/${locale}${normalizedPath === "/" ? "" : normalizedPath}`;
}

export function getOtherLocale(currentLang: Locale): Locale {
    return currentLang === "en" ? "es" : "en";
}

export function getCurrentPathWithoutLang(pathname: string): string {
    return pathname.replace(/^\/(es|en)(\/|$)/, "/");
}

export async function getLocaleSwitchUrl(
    currentLang: Locale,
    pathname: string
): Promise<{ url: string; label: string }> {
    const otherLang = getOtherLocale(currentLang);
    const currentPathWithoutLang = getCurrentPathWithoutLang(pathname);

    let switchTo = getRelativeLocaleUrl(otherLang, currentPathWithoutLang);

    if (currentPathWithoutLang.startsWith("/posts/")) {
        const slug = currentPathWithoutLang.split("/").filter(Boolean).pop();
        if (slug) {
            const entry = await getEntry("posts", `${otherLang}/${slug}`);
            if (!entry) {
                switchTo = getRelativeLocaleUrl(otherLang, "blog");
            }
        }
    }

    return {
        url: switchTo,
        label: otherLang.toUpperCase()
    };
}
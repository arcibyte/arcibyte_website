import { getLangFromUrl, useTranslations } from './utils';

export { useTranslations } from './utils';

export function initTranslations(url: URL) {
    const lang = getLangFromUrl(url);
    const t = useTranslations(lang);
    return { lang, t };
}
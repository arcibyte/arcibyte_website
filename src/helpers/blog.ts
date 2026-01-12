import { getCollection, type CollectionEntry } from "astro:content";
import type { Locale } from "../i18n/logicNav";

export interface BlogPost {
    title: string;
    date: Date;
    url: string;
    displayDate: string;
    tags: string[];
}

export async function getPostsByLang(lang: Locale): Promise<BlogPost[]> {
    const allPosts = await getCollection("blog");

    return allPosts
        .filter((post: CollectionEntry<"blog">) =>
            post.id.startsWith(`${lang}/`)
        )
        .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime())
        .map((post) => ({
            title: post.data.title,
            date: post.data.pubDate,
            url: getPostUrl(post.id, lang),
            displayDate: formatPostDate(post.data.pubDate, lang),
            tags: post.data.tags || [],
        }));
}

function getPostUrl(postId: string, lang: Locale): string {
    const slug = postId.split("/").pop()?.replace(/\.(md|mdx)$/, "");
    return `/${lang}/posts/${slug}`;
}

function formatPostDate(date: Date, lang: Locale): string {
    return date.toLocaleDateString(
        lang === "es" ? "es-ES" : "en-US",
        {
            year: "numeric",
            month: "long",
            day: "numeric",
        }
    );
}
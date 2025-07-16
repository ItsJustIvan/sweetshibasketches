import { contentfulClient } from "../lib/contentful";
import type { Document } from "@contentful/rich-text-types";

export interface Post {
    id: string;
    slug: string;
    body: string;
    data: {
        title: string;
        description: string;
        pubDate: Date;
        heroImage?: string;
        tags: string[];
        categories: string[];
        carouselImages?: Array<{ url: string; description?: string }>;
    };
}

const mapContentfulPost = (entry: any): Post => {
    return {
        id: entry.sys.id,
        slug: entry.fields.slug,
        body: entry.fields.body as Document,
         data: {
          title: entry.fields.title,
          description: entry.fields.description,
          pubDate: new Date(entry.fields.publishDate),
          heroImage: entry.fields.heroImage?.fields?.file?.url,
          tags: entry.fields.tags || [],
          categories: entry.fields.categories || [],
          carouselImages: entry.fields.carouselImages
            ? entry.fields.carouselImages.map((image: any) => ({
                url: image.fields.file.url,
                description: image.fields.description || "", // Provide a default
              }))
            : [],
        }
      }
}

export const getSortedPosts = async () => {
    const entries = await contentfulClient.getEntries({
        content_type: "post",
        order: ["-fields.publishDate"],
    });

    const allPosts = entries.items.map(mapContentfulPost);
	return allPosts;
};

export interface Category {
    // Updated to reflect tags, keeping the name for compatibility
    name: string;
    count: number;
    url: string;
}

export const getCategoryList = async (): Promise<Category[]> => {
    const allPosts = await getSortedPosts();
    const categoryCounts: Map<string, number> = new Map(); // Updated variable name

    allPosts.forEach(post => {
        post.data.categories?.forEach(tag => { // Access categories
            categoryCounts.set(tag, (categoryCounts.get(tag) || 0) + 1);
        });
    });

    const categories = Array.from(categoryCounts.entries()).map(([name, count]) => ({
        name,
        count,
        url: `/archive/?category=${encodeURIComponent(name)}`
    }));

    // Sort by count descending, then by name ascending
    categories.sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));

    return categories;
};

export interface Tag {
    name: string;
    count: number;
    url: string;
}

export const getTagList = async (): Promise<Tag[]> => {
    const allPosts = await getSortedPosts();
    const tagCounts: Map<string, number> = new Map();

    allPosts.forEach(post => {
        post.data.tags?.forEach(tag => {
            tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1);
        });
    });

    const tags = Array.from(tagCounts.entries()).map(([name, count]) => ({
        name,
        count,
        url: `/archive/?tag=${encodeURIComponent(name)}`
    }));

    // Sort tags alphabetically by name
    tags.sort((a, b) => a.name.localeCompare(b.name));

    return tags;
};

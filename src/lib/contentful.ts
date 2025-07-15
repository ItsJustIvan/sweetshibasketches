import contentful from "contentful";

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_API_KEY
    : import.meta.env.CONTENTFUL_DELIVERY_API_KEY,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});

export default contentfulClient;
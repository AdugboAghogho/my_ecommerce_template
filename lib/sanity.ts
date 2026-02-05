import { createClient } from "next-sanity";
import { createImageUrlBuilder } from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2026-02-01",
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});

const builder = createImageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

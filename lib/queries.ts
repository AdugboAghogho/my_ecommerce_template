import { groq } from "next-sanity";

export const allProducts = groq`*[_type == "product"] {
  _id,
  name,
  "slug": slug.current,
  price,
  description,
  "imageUrl": images[0].asset->url,
  "category": category->title,
  sizes,
  colors
}`;

export const fourProds = groq`*[_type == "product"][0..3] {
  _id,
  name,
  "slug": slug.current,
  price,
  description,
  "imageUrl": images[0].asset->url,
  "category": category->title
}`;

export const singleProduct = groq`*[_type == "product" && slug.current == $slug][0] {
  _id,
  name,
  price,
  description,
  "images": images[].asset->url,    
  "imageUrl": images[].asset->url,
  "category": category->title,
  sizes,
  colors
}`;

export const allCategories = groq`*[_type == "category"] {
  title,
  "slug": slug.current
}`;

export const relatedProducts = groq`*[_type == "product" && category->title == $category && _id != $currentId][0..3] {
  _id,
  name,
  price,
  "imageUrl": images[0].asset->url,
  "slug": slug.current
}`;

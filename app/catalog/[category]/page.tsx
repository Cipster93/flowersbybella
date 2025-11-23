import { notFound } from "next/navigation";
import { dinamicCategory } from "@/app/types/dinamicCat";
import CategoryClient from "./GalleryWithModal";

export const generateMetadata = async ({ params }: { params: { category: string } }) => {
  const slug = params.category;
  const category = {
    name: slug.charAt(0).toUpperCase() + slug.slice(1),
    description: `Discover our ${slug} collection.`,
    ogImage: null,
  };

  return {
    title: `${category.name} | Flowers by Bella`,
    description: category.description,
    openGraph: {
      title: `${category.name} | Flowers by Bella`,
      description: category.description,
      images: [category.ogImage || "/og-image.jpg"],
    },
  };
};

export default function CategoryPage({ params }: { params: { category: string } }) {
  const foundCategory = dinamicCategory.find(cat => cat.slug === params.category);
  if (!foundCategory) return notFound();
  const flowers = foundCategory.flowers || [];

  return (
    <CategoryClient foundCategory={foundCategory} flowers={flowers} />
  );
}

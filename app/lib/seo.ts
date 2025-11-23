import { dinamicCategory } from "../types/dinamicCat";

type CategoryParams = { slug: string };

export async function generateCategoryMetadata({ params }: { params: CategoryParams }) {
  const { slug } = params;
  const category = dinamicCategory.find(cat => cat.slug === slug);
  if (!category) {
    return {
      title: `Categorie | Flowers by Bella`,
      description: `Descoperă colecția de aranjamente florale de la Flowers by Bella.`,
      openGraph: {
        title: `Categorie | Flowers by Bella`,
        description: `Descoperă colecția de aranjamente florale de la Flowers by Bella.`,
        images: ["/og-image.jpg"],
      },
    };
  }
  return {
    title: category.metaTitle || `${category.name} | Flowers by Bella`,
    description: category.metaDescription || category.desc,
    openGraph: {
      title: category.metaTitle || `${category.name} | Flowers by Bella`,
      description: category.metaDescription || category.desc,
      images: [category.img || "/og-image.jpg"],
    },
  };
}
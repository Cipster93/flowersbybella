import React from 'react'
import CatalogContent from './CatalogContent'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catalog flori | Flowers by Bella",
  description: "Descoperă toate categoriile de buchete și aranjamente florale Flowers by Bella.",
  openGraph: {
    title: "Catalog flori | Flowers by Bella",
    description: "Descoperă toate categoriile de buchete și aranjamente florale Flowers by Bella.",
    images: ["/og-image.jpg"],
  },
};

const Catalog = () => {
  return (
    <main className='flex w-full'><CatalogContent/></main>
  )
}

export default Catalog
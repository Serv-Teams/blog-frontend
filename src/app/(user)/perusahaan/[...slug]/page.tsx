import * as React from "react";
import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { getBlogs, getBlog } from "@/actions/Blog";
// import { getProfile } from "@/actions/perusahaan/Profile";
import { getCompany } from "@/actions/perusahaan/Company";
import { getProduct, getProducts } from "@/actions/perusahaan/Product";
import { Box, Grid, Typography } from "@mui/material";
import Blogs from "./components/Blogs";
import Blog from "./components/Blog";
import Profile from "./components/Profile";
import Company from "./components/Company";
import Products from "./components/Products";
import Product from "./components/Product";


type Props = {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = (await params).slug

  const company = JSON.parse(JSON.stringify(await getCompany(slug[0])));
  const blog = JSON.parse(JSON.stringify(await getBlog(slug[2])));
  const product = JSON.parse(JSON.stringify(await getProduct(slug[2])));

  return {
    title:
      slug.length === 1 ? company.name :
        slug.length === 2 ? (
          slug[1] === "produk" ? `${company.name} - Produk` :
            slug[1] === "profil" ? `${company.name} - Profil` :
              slug[1] === "blog" ? `${company.name} - Blog` : 'Tidak Diketahui') :
          slug.length === 3 ? (
            slug[2] === blog?.slug ? `${company.name} - ${blog.title}` :
              slug[2] === product.slug ? `${company.name} - ${product.name}` : 'Tidak Diketahui') : 'Perusahaan',
    description:
      slug.length === 1 ? company.name :
        slug.length === 2 ? (
          slug[1] === "produk" ? `${company.name} - Produk` :
            slug[1] === "profil" ? `${company.name} - Profil` :
              slug[1] === "blog" ? `${company.name} - Blog` : 'Tidak Diketahui') :
          slug.length === 3 ? (
            slug[2] === blog?.slug ? `${company.name} - ${blog.title}` :
              slug[2] === product.slug ? `${company.name} - ${product.name}` : 'Tidak Diketahui') : 'Perusahaan',
  }
}

export default async function Page({ params, searchParams }: Props) {
  const { slug } = await params;

  const company = JSON.parse(JSON.stringify(await getCompany(slug[0])));
  if (!company) {
    notFound();
  }

  if (slug.length === 1) {
    return <div>{company.description}</div>;
  } else if (slug.length === 2) {
    if (slug[1] === "produk") {
      const products = JSON.parse(JSON.stringify(await getProducts()));
      return (
        <Products products={products} company={company} />
      );
    } else if (slug[1] === "profil") {
      return (
        // <Profile website={profile.website} email={profile.email} city={profile.city} />
        <Company website={company.website} email={company.email} city={company.city} />
      );
    } else if (slug[1] === "blog") {
      const blogs = JSON.parse(JSON.stringify(await getBlogs()));
      return (
        <Blogs blogs={blogs} companyId={company._id} slug={company.slug} />
      );
    } else {
      notFound();
    }
  } else if (slug.length === 3) {
    const blog = JSON.parse(JSON.stringify(await getBlog(slug[2])));
    const product = JSON.parse(JSON.stringify(await getProduct(slug[2])));

    if (slug[2] === blog?.slug) {
      return <Blog content={blog.content} title={blog.title} />;
    } else if (slug[2] === product?.slug) {
      return <Product product={product} />
    } else {
      notFound();
    }
  }
}

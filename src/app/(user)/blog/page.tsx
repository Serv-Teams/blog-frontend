import * as React from 'react';
import Blogs from '../components/Blogs';
import { getBlogs } from '@/actions/Blog';
import { getCompanies } from '@/actions/perusahaan/Company';
import { notFound } from 'next/navigation';

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Serv | Blog',
  description: 'Menampilkan daftar blog yang ditulis oleh para perusahaan.',
}

export default async function Page() {
  const blogs = JSON.parse(JSON.stringify(await getBlogs()));
  const companies = JSON.parse(JSON.stringify(await getCompanies()));

  if (!blogs || !companies) {
    return notFound();
  }

  return (
    <Blogs blogs={blogs} companies={companies} />
  );
}
import * as React from 'react';
import Blogs from './components/Blogs';
import { getBlogs } from '@/actions/Blog';
import { notFound } from 'next/navigation';

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Serv | Blog',
  description: 'Menampilkan daftar blog yang ditulis oleh para perusahaan.',
}

export default async function Page() {
  const data = JSON.parse(JSON.stringify(await getBlogs()));

  if (!data) {
    return notFound();
  } else
    return <Blogs data={data} />
}
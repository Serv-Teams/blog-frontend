import * as React from 'react';
import Blogs from './components/Blogs';
import { getPosts } from '@/actions/blog/Posts';
import { notFound } from 'next/navigation';

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Serv | Blog',
  description: 'Menampilkan daftar blog yang ditulis oleh para perusahaan.',
}

export default async function Page() {
  const data = JSON.parse(JSON.stringify(await getPosts()));

  if (!data) {
    return notFound();
  } else
    return <Blogs data={data} />
}
// import * as React from 'react';
// import Blogs from './components/Blogs';
// import { getPosts } from '@/actions/blog/Posts';
// import { notFound } from 'next/navigation';

// import type { Metadata } from 'next'

// export const metadata: Metadata = {
//   title: 'Serv | Blog',
//   description: 'Menampilkan daftar blog yang ditulis oleh para perusahaan.',
// }

// export default async function Page() {
//   const data = JSON.parse(JSON.stringify(await getPosts()));

//   if (!data) {
//     return notFound();
//   } else
//     return <Blogs data={data} />
// }

// import Link from "next/link";

// export default function HomePage() {
//   return (
//     <main style={{ padding: 40 }}>
//       <h1>Home</h1>

//       <ul>
//         <li>
//           <Link href="http://localhost:4000/auth/google">Login</Link>
//         </li>
//         <li>
//           <Link href="/profile">Profile (Protected)</Link>
//         </li>
//       </ul>
//     </main>
//   );
// }

import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MaterialUILink from '@mui/material/Link';
import NextLink from '@/app/components/Link';

import type { Metadata } from 'next'
import Blogs from './components/Blogs';
import { getPosts } from '@/actions/Posts';
import { notFound } from 'next/navigation';
import AuthButton from '@/app/components/AuthButton';


export const metadata: Metadata = {
  title: 'Serv | Blog',
  description: 'Menampilkan daftar blog yang ditulis oleh para perusahaan.',
}

export default async function Home() {
  const data = JSON.parse(JSON.stringify(await getPosts()));

  if (!data) {
    return notFound();
  }

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >

        {/* sedang di develop */}
        {/* <NextLink href="/login">Login</NextLink> */}
        <Blogs data={data} />
      </Box>
    </Container>
  );
}
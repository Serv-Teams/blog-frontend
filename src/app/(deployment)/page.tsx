import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import type { Metadata } from 'next'
import Blogs from './_components/Blogs';
import { getPosts } from './_actions/Posts';
import { notFound } from 'next/navigation';


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
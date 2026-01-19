import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Footer from './components/Footer';

import { getTopics } from '@/actions/blog/Posts';
import NavigationClient from './components/BlogNavigation'

export default async function Layout({
    children,
}: {
    children: React.ReactNode
}) {

    const posts = await getTopics()

    const menus = posts.map(post => ({
        label: post.topic,
        href: `/${post.slug}`
    }))
    return (
        <>
            <CssBaseline enableColorScheme />
            <Container
                maxWidth="lg"
                component="main"
                sx={{ display: 'flex', flexDirection: 'column', my: 20 }}
            >
                <NavigationClient menus={menus} />
                {children}
            </Container>

            <Footer />
        </>
    );
}
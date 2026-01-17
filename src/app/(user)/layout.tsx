'use client'

import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import AppAppBar from './components/AppAppBar';
import Footer from './components/Footer';
import Hero from './components/Hero';



import { usePathname } from 'next/navigation'

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname()

    return (
        <>
            <CssBaseline enableColorScheme />
            {/* <AppAppBar /> */}
            {/* {
                pathname === "/" ?
                    <>
                        <Hero />
                        {children}
                    </> :
                    <Container
                        maxWidth="lg"
                        component="main"
                        sx={{ display: 'flex', flexDirection: 'column', my: 20 }}
                    >
                        {children}
                    </Container>
            } */}

            <Container
                maxWidth="lg"
                component="main"
                sx={{ display: 'flex', flexDirection: 'column', my: 20 }}
            >
                {children}
            </Container>

            <Footer />
        </>
    );
}
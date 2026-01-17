import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Footer from './components/Footer';

export default async function Layout({
    children,
}: {
    children: React.ReactNode
}) {

    return (
        <>
            <CssBaseline enableColorScheme />
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
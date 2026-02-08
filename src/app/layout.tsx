import * as React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
import theme from '@/theme';
import ModeSwitch from '@/app/components/ModeSwitch';

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <InitColorSchemeScript attribute="class" />
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <ModeSwitch />
            {props.children}
            <footer className="border-t mt-16 py-6 text-sm text-center">
              <a href="/about" className="mx-2">Tentang Kami</a>&ensp;
              <a href="/privacy-policy" className="mx-2">Kebijakan Privasi</a>&ensp;
              <a href="/contact" className="mx-2">Kontak</a>
            </footer>

          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
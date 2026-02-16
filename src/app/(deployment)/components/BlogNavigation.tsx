'use client'

import Link from 'next/link'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

interface MenuItem {
    label: string
    href: string
}

export default function BlogNavigation({
    menus
}: {
    menus: MenuItem[]
}) {
    return (
        <AppBar position="static" color="default">
            <Toolbar>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    {menus.map((menu, index) => (
                        <Button
                            key={index}
                            component={Link}
                            href={menu.href}
                            color="inherit"
                        >
                            {menu.label}
                        </Button>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    )
}

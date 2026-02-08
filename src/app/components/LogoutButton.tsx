'use client';

import { Button } from '@mui/material';
import { logout } from '@/lib/logout';

export default function LogoutButton() {
    return (
        <Button
            variant="outlined"
            color="error"
            onClick={logout}
        >
            Logout
        </Button>
    );
}

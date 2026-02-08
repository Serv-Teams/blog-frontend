'use client';

import { Button } from '@mui/material';

export default function LoginButton() {
    return (
        <Button
            variant="contained"
            onClick={() => {
                window.location.href =
                    `${process.env.NEXT_PUBLIC_API_URL}/auth/google`;
            }}
        >
            Login with Google
        </Button>
    );
}

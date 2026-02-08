// src/lib/fetchMe.ts
import { cookies } from 'next/headers';

export async function fetchMe() {
    const cookieStore = cookies();

    // serialize cookies -> "key=value; key2=value2"
    const cookieHeader = (await cookieStore)
        .getAll()
        .map(c => `${c.name}=${c.value}`)
        .join('; ');

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/users/me`,
        {
            headers: {
                Cookie: cookieHeader,
            },
            cache: 'no-store',
        }
    );

    if (!res.ok) {
        throw new Error('Unauthorized');
    }

    return res.json();
}

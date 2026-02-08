import { cookies } from 'next/headers';

export async function isAuthenticated(): Promise<boolean> {
    const cookieStore = cookies();
    return Boolean((await cookieStore).get('token'));
}

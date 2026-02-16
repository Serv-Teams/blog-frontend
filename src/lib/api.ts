export async function apiFetch(path: string) {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}${path}`,
        { cache: "no-store" }
    );

    if (!res.ok) {
        const text = await res.text();
        throw new Error(`API Error: ${text}`);
    }

    return res.json();
}

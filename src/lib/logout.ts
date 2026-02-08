import { getCsrfToken } from "./getCsrfToken";

export async function logout() {

    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`, {
        method: "POST",
        credentials: "include",
        headers: {
            "X-CSRF-Token": getCsrfToken()!,
        },
    });

    window.location.href = "/";
}

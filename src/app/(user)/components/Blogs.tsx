'use client'

import Link from "next/link";

export default function Blogs({ data }: { data: any[] }) {
    return (
        <div>
            {/* {data.map((d: any) => (

                <div key={d._id}>
                    {d.title}

                    {
                        d.slugs.map((s: any, index: number) => (
                            // `/${s}`
                            <a key={index} href={`/${s.join('/')}`}>read more</a>
                        )
                        )
                    }
                </div>
            ))} */}
            {data.map((post) => {
                // --- INI CARA MENGGABUNGKAN ARRAY SLUG ---
                // Mengubah ['blog', '2024', 'nextjs-tutorial'] menjadi "/blog/2024/nextjs-tutorial"
                const fullUrl = `/${post.slugs.join('/')}`;

                return (
                    <div key={post._id} style={{ marginBottom: '10px' }}>
                        <h2>{post.title}</h2>
                        <Link href={fullUrl} className="text-blue-500 hover:underline">
                            Baca Selengkapnya
                        </Link>
                    </div>
                );
            })}
        </div>
    )
}
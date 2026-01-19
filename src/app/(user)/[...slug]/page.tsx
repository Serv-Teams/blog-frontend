import { getPost, getPostsByTopic } from "@/actions/blog/Posts";
import Blog from "./components/Blog";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params

    if (slug.length === 1) {
        const data = JSON.parse(JSON.stringify(await getPostsByTopic(slug[0])));

        return (
            <>
                {
                    data.map((d: any) => {
                        const fullUrl = `/${d.slugs.join('/')}`;
                        return (

                            <div key={d._id}>
                                {d.title}
                                <Link href={fullUrl}>
                                    Baca Selengkapnya
                                </Link>
                            </div>
                        )
                    })
                }
            </>
        )

    } else if (slug.length === 2) {
        const blog = JSON.parse(JSON.stringify(await getPost(slug[1])));
        return <Blog content={blog.content} title={blog.title} />;
    } else
        return <div>My Post: {slug}</div>
}
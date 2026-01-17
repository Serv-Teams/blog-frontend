import { getBlogs, getBlog, getBlogsByTopic } from "@/actions/Blog";
import Blog from "./components/Blog";
import { notFound } from "next/navigation";

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params

    if (slug.length === 1) {
        const data = JSON.parse(JSON.stringify(await getBlogsByTopic(slug[0])));

        return (
            <>
                {
                    data.map((d: any) => (
                        <div key={d._id}>{d.title}</div>
                    ))
                }
            </>
        )

    } else if (slug.length === 2) {
        const blog = JSON.parse(JSON.stringify(await getBlog(slug[1])));
        return <Blog content={blog.content} title={blog.title} />;
    } else
        return <div>My Post: {slug}</div>
}
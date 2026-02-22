import Footer from "./_components/Footer";
import Header from "./_components/Header";

export default async function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}
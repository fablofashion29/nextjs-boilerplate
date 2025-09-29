export default function CollectionsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="max-w-7xl mx-auto py-12 px-4 collections-layout">
            {children}
        </div>
    );
}
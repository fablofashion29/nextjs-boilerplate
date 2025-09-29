import PageHeader from "@/components/Page/PageHeader"
import React from "react";

export default function CollectionsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="max-w-7xl mx-auto py-12 px-4 collections-layout">
            <PageHeader logoSrc="/fablo-fashion.png" altText="Fablo Fashion Logo" />
            {children}
        </div>
    );
}
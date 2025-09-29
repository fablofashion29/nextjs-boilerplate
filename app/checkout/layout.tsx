import PageHeader from "@/components/Page/PageHeader";
import MaintenanceBanner from "@/components/Blocks/MaintenanceBanner";
import React from "react";

export default function CheckoutLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="max-w-7xl mx-auto py-12 px-4 checkout-layout">
            <PageHeader logoSrc="/fablo-fashion.png" altText="Fablo Fashion Logo" />
            <MaintenanceBanner message="We are currently undergoing maintenance. Some features may not be available." />
            {children}
        </div>
    );
}
import React from 'react';

type PageHeaderProps = {
    logoSrc: string;
    altText?: string;
};

const PageHeader: React.FC<PageHeaderProps> = ({ logoSrc, altText = 'Logo' }) => (
    <header style={{ padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src={logoSrc} alt={altText} style={{ height: '48px' }} />
    </header>
);

export default PageHeader;
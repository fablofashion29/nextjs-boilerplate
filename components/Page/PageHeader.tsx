import React from 'react';

type PageHeaderProps = {
    logoSrc: string;
    altText?: string;
};

const PageHeader: React.FC<PageHeaderProps> = ({ logoSrc, altText = 'Logo' }) => (
    <header style={{ padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <a href="/" style={{ marginRight: '1rem', textDecoration: 'none', color: 'inherit', fontSize: '1.5rem', fontWeight: 'bold' }}>
            <img src={logoSrc} alt={altText} style={{ height: '48px' }} />
        </a>
    </header>
);

export default PageHeader;
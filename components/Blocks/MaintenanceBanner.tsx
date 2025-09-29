import React from 'react';

type MaintenanceBannerProps = {
    logoSrc: string;
    altText?: string;
};

const MaintenanceBanner: React.FC<MaintenanceBannerProps> = () => (
    <div className="bg-yellow-100 border border-yellow-400 text-yellow-800 p-3 rounded mb-4 text-center">
        <p className="text-sm">
            🚧 This site is currently under maintenance. Some features may not be available. 🚧
        </p>
        <div className="mt-2 text-xs text-yellow-700 italic">
            Thank you for your patience! If you have any questions, please contact support. falblofashion@outlook.com
        </div>
    </div>
);

export default MaintenanceBanner;
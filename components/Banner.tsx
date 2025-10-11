// components/Banner.tsx
import React from 'react';

interface BannerProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  className?: string;
}

const Banner: React.FC<BannerProps> = ({ 
  title, 
  subtitle, 
  backgroundImage,
  className = '' 
}) => {
  const bannerStyle = backgroundImage 
    ? { backgroundImage: `url(${backgroundImage})` }
    : {};

  return (
    <div 
      className={`relative bg-blue-600 text-white py-10 px-4 my-4 text-center hidden md:block bg-cover bg-center ${className}`}
      style={bannerStyle}
    >
      {backgroundImage && (
        <div className="absolute inset-0"></div>
      )}
      <div className="relative z-10 max-w-4xl mx-auto hidden">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl opacity-90">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default Banner;
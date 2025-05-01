
import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="36" height="36" rx="8" fill="url(#paint0_linear)" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18 10C16.3431 10 15 11.3431 15 13V17C15 18.6569 16.3431 20 18 20C19.6569 20 21 18.6569 21 17V13C21 11.3431 19.6569 10 18 10ZM13 13C13 10.2386 15.2386 8 18 8C20.7614 8 23 10.2386 23 13V17C23 19.7614 20.7614 22 18 22C15.2386 22 13 19.7614 13 17V13Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 18C10 16.3431 11.3431 15 13 15H23C24.6569 15 26 16.3431 26 18V23C26 24.6569 24.6569 26 23 26H13C11.3431 26 10 24.6569 10 23V18ZM13 17C12.4477 17 12 17.4477 12 18V23C12 23.5523 12.4477 24 13 24H23C23.5523 24 24 23.5523 24 23V18C24 17.4477 23.5523 17 23 17H13Z"
          fill="white"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="0"
            y1="0"
            x2="36"
            y2="36"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#9333EA" />
            <stop offset="1" stopColor="#4F46E5" />
          </linearGradient>
        </defs>
      </svg>
      <span className="font-bold text-xl tracking-tight">TaskMasterPy</span>
    </div>
  );
};

import React from 'react';

interface UrbanCrustLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  showGlow?: boolean;
  horizontal?: boolean;
}

export const UrbanCrustLogo: React.FC<UrbanCrustLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  showGlow = true,
  horizontal = false,
}) => {
  const dimensions = {
    sm: { width: 36, height: 36, textClass: 'text-sm' },
    md: { width: 48, height: 48, textClass: 'text-lg' },
    lg: { width: 72, height: 72, textClass: 'text-2xl' },
    xl: { width: 110, height: 110, textClass: 'text-3xl' },
  }[size];

  return (
    <div
      className={`inline-flex ${
        horizontal ? 'flex-row items-center gap-3' : 'flex-col items-center gap-2'
      } select-none ${className}`}
    >
      <div className="relative group flex items-center justify-center">
        {/* Subtle golden ambient glow behind the emblem */}
        {showGlow && (
          <div
            className="absolute inset-0 bg-[#FBBF24]/20 rounded-full blur-xl pointer-events-none transform group-hover:scale-110 transition-transform duration-500"
            aria-hidden="true"
          />
        )}

        <svg
          width={dimensions.width}
          height={dimensions.height}
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 drop-shadow-[0_2px_10px_rgba(251,191,36,0.35)] transition-transform duration-300 group-hover:scale-105"
        >
          {/* Circular Enclosure with Fork & Wings */}
          {/* Main circle arc from bottom around to fork */}
          <path
            d="M 125 125 C 105 145 68 145 48 125 C 26 103 26 67 48 45 C 70 23 105 23 128 45"
            stroke="#FBBF24"
            strokeWidth="11"
            strokeLinecap="round"
          />

          {/* Fork extension pointing up-right */}
          <g transform="translate(112, 22) rotate(42)">
            {/* Fork base & handle */}
            <path
              d="M 10 32 L 10 16 C 10 10 32 10 32 16 L 32 32"
              fill="#FBBF24"
            />
            {/* Fork prongs (3 tines) */}
            <rect x="10" y="-4" width="5" height="20" rx="2.5" fill="#FBBF24" />
            <rect x="18.5" y="-6" width="5" height="22" rx="2.5" fill="#FBBF24" />
            <rect x="27" y="-4" width="5" height="20" rx="2.5" fill="#FBBF24" />
          </g>

          {/* Speed wings / fast food trails on the bottom right */}
          <path
            d="M 116 112 L 176 112"
            stroke="#FBBF24"
            strokeWidth="9"
            strokeLinecap="round"
          />
          <path
            d="M 122 130 L 168 130"
            stroke="#FBBF24"
            strokeWidth="9"
            strokeLinecap="round"
          />
          <path
            d="M 122 148 L 158 148"
            stroke="#FBBF24"
            strokeWidth="9"
            strokeLinecap="round"
          />

          {/* Cup with straw on the left */}
          <g transform="translate(68, 62)">
            {/* Straw */}
            <path
              d="M 24 -14 L 32 -4 L 27 12"
              stroke="#FBBF24"
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Cup lid */}
            <rect x="8" y="10" width="34" height="6.5" rx="3.25" fill="#FBBF24" />
            {/* Cup body with tapered shape */}
            <path
              d="M 13 18 L 17 56 L 33 56 L 37 18 Z"
              fill="#FBBF24"
            />
            {/* Cutout stripes in the cup */}
            <rect x="14" y="24" width="22" height="3" fill="#080808" />
            <rect x="16" y="32" width="18" height="3" fill="#080808" />
          </g>

          {/* Burger on the right */}
          <g transform="translate(98, 90)">
            {/* Top Bun with sesame seeds */}
            <path
              d="M 0 14 C 0 3 9 -4 20 -4 C 31 -4 40 3 40 14 Z"
              fill="#FBBF24"
            />
            {/* Sesame seeds */}
            <circle cx="14" cy="5" r="1.3" fill="#080808" />
            <circle cx="21" cy="2" r="1.3" fill="#080808" />
            <circle cx="27" cy="6" r="1.3" fill="#080808" />
            <circle cx="19" cy="9" r="1.3" fill="#080808" />

            {/* Patty & cheese layer */}
            <rect x="-2" y="16" width="44" height="5.5" rx="2.75" fill="#FBBF24" />

            {/* Bottom Bun */}
            <path
              d="M 1 23.5 C 1 23.5 1 28 8 28 L 32 28 C 39 28 39 23.5 39 23.5 Z"
              fill="#FBBF24"
            />
          </g>
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col items-center">
          <span
            className={`font-sans font-extrabold tracking-[0.16em] uppercase text-[#FBBF24] ${dimensions.textClass}`}
            style={{ textShadow: '0 0 12px rgba(251,191,36,0.35)' }}
          >
            URBAN CRUST
          </span>
          {showGlow && (
            <div className="w-full h-[2px] mt-1 relative flex items-center justify-center">
              <div className="w-4/5 h-[1.5px] bg-gradient-to-r from-transparent via-[#FBBF24] to-transparent" />
              <div className="absolute w-2 h-2 rounded-full bg-[#FBBF24] blur-[2px]" />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

type Props = {
  className?: string;
};

// Simple mountain + trail logo with gradient fill
const Logo = ({ className = "w-10 h-10" }: Props) => (
  <svg
    className={className}
    viewBox="0 0 64 64"
    aria-label="Hiker logo"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="lg" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#16a34a" />
        <stop offset="100%" stopColor="#2563eb" />
      </linearGradient>
      <filter id="s" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.25" />
      </filter>
    </defs>
    <rect x="4" y="4" width="56" height="56" rx="14" fill="url(#lg)" />
    <g filter="url(#s)">
      <path
        d="M18 42l10-14 6 8 6-8 10 14H18z"
        fill="#fff"
        opacity="0.95"
      />
      <path
        d="M28 42c4.5-6 10-6 16 0"
        stroke="#ffffff"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        opacity="0.95"
      />
    </g>
  </svg>
);

export default Logo;



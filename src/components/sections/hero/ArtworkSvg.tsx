export function ArtworkSvg() {
  return (
    <svg
      className="w-full h-full object-cover"
      viewBox="0 0 1000 600"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Silhouettes de passants stylisées, représentation de l'œuvre Pontecorvo"
    >
      <defs>
        <linearGradient id="pBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EAEAE8" />
          <stop offset="100%" stopColor="#CCCCCC" />
        </linearGradient>
        <linearGradient id="pShadow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1A1A1A" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#1A1A1A" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <rect width="1000" height="600" fill="url(#pBg)" />
      <line x1="0" y1="200" x2="1000" y2="200" stroke="#C5C5C3" strokeWidth="1.5" />
      <line x1="0" y1="400" x2="1000" y2="400" stroke="#C5C5C3" strokeWidth="1.5" />
      <rect x="380" y="0" width="70" height="600" fill="#F0F0EE" opacity="0.5" />

      <polygon points="150,140 60,110 320,100 160,142" fill="url(#pShadow)" />
      <polygon points="280,240 70,210 480,195 290,243" fill="url(#pShadow)" />
      <polygon points="420,340 120,300 680,280 430,343" fill="url(#pShadow)" />
      <polygon points="580,440 220,390 850,360 590,443" fill="url(#pShadow)" />
      <polygon points="780,210 470,180 950,170 790,213" fill="url(#pShadow)" />

      <circle cx="150" cy="140" r="7" fill="#0F0E0D" />
      <circle cx="280" cy="240" r="8" fill="#0F0E0D" />
      <circle cx="420" cy="340" r="7" fill="#0F0E0D" />
      <circle cx="432" cy="345" r="6" fill="#777777" />
      <circle cx="580" cy="440" r="8" fill="#0F0E0D" />
      <circle cx="780" cy="210" r="7" fill="#0F0E0D" />
    </svg>
  )
}

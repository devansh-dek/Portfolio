export default function Logo() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="hover:scale-110 transition-transform duration-300"
    >
      {/* Background circle with gradient */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#a855f7', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#ec4899', stopOpacity: 1 }} />
        </linearGradient>
      </defs>

      {/* Outer circle border */}
      <circle cx="20" cy="20" r="19" stroke="url(#logoGradient)" strokeWidth="2" />

      {/* Inner geometric design - Represents D and K merged */}
      {/* D shape on left */}
      <path
        d="M 12 10 L 16 10 Q 18 10 18 13 L 18 27 Q 18 30 16 30 L 12 30"
        stroke="url(#logoGradient)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* K shape on right - Two diagonal lines */}
      <line
        x1="22"
        y1="10"
        x2="22"
        y2="30"
        stroke="url(#logoGradient)"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* K upper diagonal */}
      <line
        x1="22"
        y1="15"
        x2="28"
        y2="10"
        stroke="url(#logoGradient)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* K lower diagonal */}
      <line
        x1="22"
        y1="20"
        x2="28"
        y2="30"
        stroke="url(#logoGradient)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Mathematical symbol accent - integral symbol (∫) in corner */}
      <text
        x="32"
        y="36"
        fontSize="10"
        fill="url(#logoGradient)"
        fontWeight="bold"
        textAnchor="end"
      >
        ∫
      </text>
    </svg>
  );
}

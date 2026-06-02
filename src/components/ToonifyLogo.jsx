export default function ToonifyLogo({ iconSize = 40, textSize = 28, showText = true }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      {/* Icon: dark rounded square with cyan curly brace / code brackets */}
      <div style={{
        width: iconSize,
        height: iconSize,
        borderRadius: Math.round(iconSize * 0.275),
        background: '#0c0f13',
        border: '1px solid rgba(0,229,255,0.25)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
      }}>
        <svg
          width={iconSize * 0.55}
          height={iconSize * 0.55}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Curly braces code representation */}
          <path
            d="M8 5C8 5 4 6 4 9C4 11 6 12 6 12C6 12 4 13 4 15C4 18 8 19 8 19"
            stroke="#00E5FF"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 5C16 5 20 6 20 9C20 11 18 12 18 12C18 12 20 13 20 15C20 18 16 19 16 19"
            stroke="#00E5FF"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Separator colon */}
          <circle cx="12" cy="9" r="1.5" fill="#00E5FF" />
          <circle cx="12" cy="15" r="1.5" fill="#00E5FF" />
        </svg>
      </div>

      {/* Wordmark */}
      {showText && (
        <span style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: textSize,
          fontWeight: 700,
          color: '#F8FAFC',
          letterSpacing: '-0.03em',
          lineHeight: 1,
        }}>
          toonify<span style={{ color: '#00E5FF' }}>.</span>
        </span>
      )}
    </div>
  );
}

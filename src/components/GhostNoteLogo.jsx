export default function GhostNoteLogo({ iconSize = 40, textSize = 28, showText = true }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      {/* Icon: deep slate rounded square with neon green shield/lock outline */}
      <div style={{
        width: iconSize,
        height: iconSize,
        borderRadius: Math.round(iconSize * 0.275),
        background: '#0a0a0f',
        border: '1px solid rgba(16,185,129,0.25)',
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
          {/* Shield outline */}
          <path
            d="M12 2L3 7V12C3 17 8 21 12 22C16 21 21 17 21 12V7L12 2Z"
            stroke="#10B981"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Lock shackle inside */}
          <path
            d="M9 11V9C9 7.34 10.34 6 12 6C13.66 6 15 7.34 15 9V11"
            stroke="#10B981"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Lock body */}
          <rect
            x="7.5"
            y="11"
            width="9"
            height="6"
            rx="1.5"
            stroke="#10B981"
            strokeWidth="2"
            fill="none"
          />
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
          Ghost<span style={{ color: '#10B981' }}>Note</span>
        </span>
      )}
    </div>
  );
}

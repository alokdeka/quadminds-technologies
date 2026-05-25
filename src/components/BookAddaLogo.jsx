// Exact replica of the BookAdda frontend logo
export default function BookAddaLogo({ iconSize = 40, textSize = 28, showText = true }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      {/* Icon: dark rounded square with gold B */}
      <div style={{
        width: iconSize,
        height: iconSize,
        borderRadius: Math.round(iconSize * 0.275),
        background: '#0f0e13',
        border: '1px solid rgba(201,168,76,0.25)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
      }}>
        <svg
          width={iconSize * 0.6}
          height={iconSize * 0.6}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 8H22C26.4183 8 30 11.5817 30 16C30 18.2091 29.1046 20.2091 27.6569 21.6569C29.1046 23.1046 30 25.1046 30 27.3137C30 31.732 26.4183 35.3137 22 35.3137H12V8Z"
            stroke="#C9A84C"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 21.6569H27.6569"
            stroke="#C9A84C"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M18 14L24 14" stroke="#C9A84C" strokeWidth="3" strokeLinecap="round" />
          <path d="M18 29L24 29" stroke="#C9A84C" strokeWidth="3" strokeLinecap="round" />
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
          BookAdda<span style={{ color: '#C9A84C' }}>.</span>
        </span>
      )}
    </div>
  );
}

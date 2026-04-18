type DetectionFrameProps = {
  idTag: string;
  statusTag: string;
};

const strokeColor = "var(--primary)";

export default function DetectionFrame({
  idTag,
  statusTag,
}: DetectionFrameProps) {
  return (
    <svg
      viewBox="0 0 400 320"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    >
      <rect
        x="4"
        y="4"
        width="392"
        height="312"
        rx="2"
        fill="none"
        stroke={strokeColor}
        strokeOpacity="0.18"
        strokeWidth="1"
      />

      {[
        "M4 34 L4 4 L44 4",
        "M356 4 L396 4 L396 34",
        "M4 286 L4 316 L44 316",
        "M356 316 L396 316 L396 286",
      ].map((d) => (
        <path
          key={d}
          d={d}
          fill="none"
          stroke={strokeColor}
          strokeWidth="1.5"
        />
      ))}

      <rect x="4" y="4" width="138" height="22" fill={strokeColor} />
      <text
        x="12"
        y="19"
        fill="var(--surface)"
        fontFamily="'Azeret Mono', monospace"
        fontSize="10"
        fontWeight="600"
        letterSpacing="0.08em"
      >
        {idTag}
      </text>

      <rect x="262" y="294" width="134" height="22" fill={strokeColor} />
      <text
        x="269"
        y="309"
        fill="var(--surface)"
        fontFamily="'Azeret Mono', monospace"
        fontSize="10"
        fontWeight="600"
        letterSpacing="0.08em"
      >
        {statusTag}
      </text>

      <line
        x1="4"
        y1="108"
        x2="396"
        y2="108"
        stroke={strokeColor}
        strokeOpacity="0.12"
      />
      <line
        x1="4"
        y1="214"
        x2="396"
        y2="214"
        stroke={strokeColor}
        strokeOpacity="0.12"
      />

      <g opacity="0.45" stroke={strokeColor}>
        <line x1="188" y1="160" x2="212" y2="160" strokeWidth="1" />
        <line x1="200" y1="148" x2="200" y2="172" strokeWidth="1" />
        <circle
          cx="200"
          cy="160"
          r="14"
          fill="none"
          strokeWidth="1"
          strokeDasharray="4 3"
          opacity="0.7"
        />
      </g>
    </svg>
  );
}

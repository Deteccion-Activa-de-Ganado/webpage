import { useId } from "react";

type SparklineProps = {
  data: readonly number[];
  labels?: readonly string[];
  width?: number;
  height?: number;
};

export default function Sparkline({
  data,
  labels,
  width = 420,
  height = 130,
}: SparklineProps) {
  const rawId = useId();
  const gradientId = `sparkline-${rawId.replace(/:/g, "")}`;

  if (data.length < 2) return null;

  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;

  const padLeft = 6;
  const padRight = 10;
  const padTop = 14;
  const padBottom = labels ? 24 : 12;
  const plotW = width - padLeft - padRight;
  const plotH = height - padTop - padBottom;

  const points = data.map((value, i) => {
    const x = padLeft + (i / (data.length - 1)) * plotW;
    const y = padTop + ((max - value) / range) * plotH;
    return { x, y };
  });

  const linePath = points
    .map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(2)},${p.y.toFixed(2)}`)
    .join(" ");

  const baseY = padTop + plotH;
  const first = points[0];
  const last = points[points.length - 1];
  const areaPath = `${linePath} L${last.x.toFixed(2)},${baseY} L${first.x.toFixed(2)},${baseY} Z`;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      role="img"
      aria-hidden="true"
      style={{ width: "100%", display: "block" }}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.16" />
          <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
        </linearGradient>
      </defs>

      <path d={areaPath} fill={`url(#${gradientId})`} />
      <path
        d={linePath}
        fill="none"
        stroke="var(--primary)"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx={last.x}
        cy={last.y}
        r="4"
        fill="var(--primary)"
        stroke="var(--surface)"
        strokeWidth="2"
      />

      {labels
        ? labels.map((label, i) => {
            const x = padLeft + (i / (labels.length - 1)) * plotW;
            return (
              <text
                key={label}
                x={x}
                y={height - 6}
                textAnchor="middle"
                fontFamily="'Azeret Mono', monospace"
                fontSize="9"
                fill="var(--text-subtle)"
                letterSpacing="0.08em"
              >
                {label}
              </text>
            );
          })
        : null}
    </svg>
  );
}

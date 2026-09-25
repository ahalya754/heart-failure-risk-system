export const T = {
  bg: "#EEF2F1",
  panel: "#FFFFFF",
  ink: "#12262A",
  inkSoft: "#4B6660",
  line: "#D8E2E0",
  teal: "#0F6B63",
  tealDeep: "#0B4C46",
  low: "#1E8E5A",
  high: "#C98A1A",
  veryHigh: "#C1442B",
  lowBg: "#E7F5EC",
  highBg: "#FBF1DF",
  veryHighBg: "#FBEAE5",
};

export const mono = "'IBM Plex Mono', 'SFMono-Regular', Menlo, monospace";
export const sans = "'IBM Plex Sans', 'Inter', system-ui, sans-serif";

export const TIER_META = {
  LOW: { color: T.low, bg: T.lowBg, label: "Low risk" },
  HIGH: { color: T.high, bg: T.highBg, label: "High risk" },
  "VERY HIGH": { color: T.veryHigh, bg: T.veryHighBg, label: "Very high risk" },
};

export const ADVICE = {
  LOW: "Readings sit inside the normal range. Keep logging daily so trends stay visible.",
  HIGH: "One or more signals are drifting. Recheck tomorrow, and mention this trend at your next appointment.",
  "VERY HIGH":
    "This reading pattern matches a pre-hospitalization profile. Contact your care team today.",
};
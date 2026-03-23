export const theme = {
  colors: {
    primary: "#FF6B1A",
    primaryHover: "#E55A00",
    background: "#FFFFFF",
    backgroundSoft: "#F8F8F8",
    backgroundOrange: "#FFF4EE",
    textMain: "#0F0F0F",
    textSecondary: "#444444",
    textTertiary: "#888888",
    border: "#E5E5E5",
    success: "#22C55E",
    error: "#EF4444",
  },
  fonts: {
    heading: "Sora, sans-serif",
    body: "DM Sans, sans-serif",
  },
  radius: {
    sm: "8px",
    md: "12px",
    lg: "16px",
    xl: "24px",
  },
  shadows: {
    card: "0 2px 12px rgba(0,0,0,0.06)",
    cardHover: "0 8px 32px rgba(0,0,0,0.12)",
    navbar: "0 1px 0 #E5E5E5",
  },
} as const;

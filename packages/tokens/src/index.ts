export const colors = {
    primary: {
        DEFAULT: "#0077CC", // Ocean Blue
        foreground: "#FFFFFF",
        50: "#E3F2FF",
        100: "#B8DFFF",
        200: "#8AC9FF",
        300: "#5CB3FF",
        400: "#2E9CFF",
        500: "#0077CC",
        600: "#005FA3",
        700: "#00487A",
        800: "#003052",
        900: "#001829",
    },
    accent: {
        DEFAULT: "#EDC9AF", // Desert Sand
        foreground: "#1A202C",
        50: "#FDF8F5",
        100: "#F9ECE4",
        200: "#F2D5C3",
        300: "#EBBEA2",
        400: "#E4A781",
        500: "#EDC9AF",
        600: "#D69E7D",
        700: "#BF734B",
        800: "#A84819",
        900: "#8C2D00",
    },
    neutral: {
        50: "#F8FAFC",
        100: "#F1F5F9",
        200: "#E2E8F0",
        300: "#CBD5E1",
        400: "#94A3B8",
        500: "#64748B",
        600: "#475569",
        700: "#334155",
        800: "#1E293B",
        900: "#0F172A",
        950: "#020617",
    },
    dark: {
        background: "#0B1120", // Deep Navy
        surface: "#111827",
        border: "#1F2937",
    }
} as const;

export const spacing = {
    0: "0",
    px: "1px",
    0.5: "0.125rem",
    1: "0.25rem",
    1.5: "0.375rem",
    2: "0.5rem",
    2.5: "0.625rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    8: "2rem",
    10: "2.5rem",
    12: "3rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    32: "8rem",
    40: "10rem",
    48: "12rem",
    56: "14rem",
    64: "16rem",
} as const;

export const radius = {
    none: "0",
    sm: "0.125rem",
    DEFAULT: "0.25rem", // Soft but modern
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px",
} as const;

export const shadows = {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)", // Subtle SaaS elevation
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
    "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
    none: "none",
} as const;

export const typography = {
    fontFamily: {
        sans: "Inter, sans-serif",
    },
} as const;

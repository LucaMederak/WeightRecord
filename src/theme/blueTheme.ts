import { blueColors } from "./colors/blue";
import { typography } from "./typography";

export const blueTheme = {
  id: "T_01",
  name: "blue theme",
  shadows: {
    backdrop: "0px 4px 16px #3A4D6F;",
  },
  colors: {
    ...blueColors,
    background: {
      main: blueColors.neutral[0],
      contrast: "rgba(239, 234, 253, 0.26)",
      dark: blueColors.primary[900],
      backdrop: "rgba(9, 30, 66, 0.44)",
    },
    navigation: {
      main: blueColors.neutral[0],
      info: `linear-gradient(128.13deg, ${blueColors.primary[400]} 6.24%, ${blueColors.secondary[500]} 93.84%)`,
    },
    footer: {
      main: blueColors.neutral[20],
    },
    text: {
      heading: blueColors.neutral[900],
      description: blueColors.neutral[500],
    },
    loading: {
      page: blueColors.primary[500],
    },

    sidebar: {
      background: blueColors.neutral[0],
      header: {
        background: blueColors.primary[900],
        button: {
          background: blueColors.primary[700],
          icon: blueColors.neutral[0],
        },
      },
      link: {
        borderColor: {
          default: blueColors.neutral[0],
          active: blueColors.primary[100],
        },
        background: {
          default: blueColors.neutral[0],
          active: blueColors.primary[50],
        },
        text: {
          default: blueColors.primary[900],
          active: blueColors.primary[800],
        },
        icon: {
          default: blueColors.primary[900],
          active: blueColors.primary[800],
        },
      },
    },
    form: {
      heading1: blueColors.neutral[900],
      link: {
        default: blueColors.neutral[600],
        active: blueColors.primary[500],
      },
      step: {
        requiredInfo: {
          text: blueColors.warning[500],
          background: blueColors.warning[50],
          border: blueColors.warning[100],
        },
        heading: blueColors.neutral[900],
        description: blueColors.neutral[200],
        input: {
          text: blueColors.neutral[900],
          label: blueColors.neutral[600],
          error: blueColors.danger[500],
          border: {
            default: blueColors.neutral[30],
            active: blueColors.primary[500],
          },
        },
      },
    },
    dashboard: {
      background: " #FAF8FE",
    },
    button: {
      primary: {
        default: {
          text: blueColors.neutral[0],
          icon: blueColors.neutral[0],
          background: blueColors.primary[500],
        },
        hover: {
          text: blueColors.neutral[0],
          icon: blueColors.neutral[0],
          background: blueColors.primary[600],
        },
        active: {
          text: blueColors.neutral[0],
          icon: blueColors.neutral[0],
          background: blueColors.primary[700],
        },
      },
      secondary: {
        default: {
          text: blueColors.primary[500],
          icon: blueColors.primary[500],
          background: blueColors.primary[50],
        },
        hover: {
          text: blueColors.neutral[0],
          icon: blueColors.neutral[0],
          background: blueColors.primary[300],
        },
        active: {
          text: blueColors.neutral[0],
          icon: blueColors.neutral[0],
          background: blueColors.primary[400],
        },
      },
      disabled: {
        text: blueColors.neutral[0],
        icon: blueColors.neutral[0],
        background: blueColors.primary[100],
      },
    },
    border: {
      grey: blueColors.neutral[30],
      contrast: blueColors.primary[50],
    },
  },
  typography: {
    ...typography,
  },
  media: {
    up: (breakpoint: string, vertical = false) =>
      `@media (min-${
        vertical ? "height" : "width"
      }: calc(${breakpoint} + 0.02px))`,
    down: (breakpoint: string, vertical = false) =>
      `@media (max-${vertical ? "height" : "width"}: ${breakpoint})`,

    breakpoints: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  spacing: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64],
  borderRadius: [
    0, 2, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64,
  ],
};

export const darkBlueTheme = {
  ...blueTheme,
  id: "T_01Dark",
  name: "dark blue theme",
  blueColors: {
    ...blueTheme.colors,
    background: {
      main: blueColors.neutral[900],
      contrast: blueColors.neutral[800],
      dark: blueColors.primary[900],
    },
    navigation: {
      main: blueColors.neutral[900],
      info: blueColors.success[50],
    },
    footer: {
      main: blueColors.neutral[900],
    },
    text: {
      heading: blueColors.neutral[0],
      description: blueColors.neutral[20],
    },
  },
};

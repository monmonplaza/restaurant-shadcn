/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },

      textColor: {
        accent: "var(--accent)",
        accentDark: "var(--accentDark)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        line: "var(--line)",
        header: "var(--header)",
        body: "var(--body)",
        alert: "var(--alert)",
        disable: "var(--disable)",
        alertDark: "var(--alertDark)",
        warning: "var(--warning)",
        warningDark: "var(--warningDark)",
        success: "var(--success)",
        successDark: "var(--successDark)",
        info: "var(--info)",
        infoDark: "var(--infoDark)",
      },

      backgroundColor: {
        accent: "var(--accent)",
        accentDark: "var(--accentDark)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        line: "var(--line)",
        header: "var(--header)",
        body: "var(--body)",
        alert: "var(--alert)",
        disable: "var(--disable)",
        alertDark: "var(--alertDark)",
        warning: "var(--warning)",
        warningDark: "var(--warningDark)",
        success: "var(--success)",
        successDark: "var(--successDark)",
        info: "var(--info)",
        infoDark: "var(--infoDark)",
      },

      borderColor: {
        accent: "var(--accent)",
        accentDark: "var(--accentDark)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        line: "var(--line)",
        header: "var(--header)",
        body: "var(--body)",
        alert: "var(--alert)",
        disable: "var(--disable)",
        alertDark: "var(--alertDark)",
        warning: "var(--warning)",
        warningDark: "var(--warningDark)",
        success: "var(--success)",
        successDark: "var(--successDark)",
        info: "var(--info)",
        infoDark: "var(--infoDark)",
      },

      fontFamily: {
        poppins: "Poppins",
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        rotate: {
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        rotate: "rotate 2s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

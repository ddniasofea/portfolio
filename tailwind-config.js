/* Tailwind Configuration: Editorial Pearl (Light) & Velvet Noir (Dark) */
tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['"Outfit"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        pearl: {
          bg: '#F7F4EF',
          card: '#FFFFFF',
          soft: '#F1ECE4',
          border: '#E6DFD5',
          ink: '#171514',
          muted: '#5E5751',
        },
        noir: {
          bg: '#0C0B0E',
          card: '#141218',
          border: 'rgba(255, 255, 255, 0.09)',
          ink: '#F5F1EB',
          muted: '#A39B93',
        },
        wine: {
          DEFAULT: '#8B2E4A',
          hover: '#73233B',
          soft: '#F5E8EC',
          rose: '#E88CA5',
          roseHover: '#F1A4B9',
        },
        champagne: {
          DEFAULT: '#C59B6D',
          dark: '#DFBE92',
          soft: '#F5EFE6',
        }
      }
    }
  }
};
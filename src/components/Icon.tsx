type IconProps = { className?: string };

const base = 'h-6 w-6';

export const IconLeaf = ({ className = '' }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${base} ${className}`} fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M20 4c-9 0-16 6-16 14 0 2 1 3 2 3 8 0 14-7 14-17Z" />
    <path d="M4 21c4-5 9-10 15-12" />
  </svg>
);

export const IconFish = ({ className = '' }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${base} ${className}`} fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M3 12c3-6 9-7 13-7 3 0 5 2 5 7s-2 7-5 7c-4 0-10-1-13-7Z" />
    <path d="M3 12c1-1 2-1 3 0M16 11.5h.01" />
    <path d="M21 12c-2-3-2-7 0-10M21 12c-2 3-2 7 0 10" />
  </svg>
);

export const IconMap = ({ className = '' }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${base} ${className}`} fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="m3 7 6-3 6 3 6-3v14l-6 3-6-3-6 3z" />
    <path d="M9 4v17M15 7v17" />
  </svg>
);

export const IconCalendar = ({ className = '' }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${base} ${className}`} fill="none" stroke="currentColor" strokeWidth="1.6">
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M8 3v4M16 3v4M3 10h18" />
  </svg>
);

export const IconRoute = ({ className = '' }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${base} ${className}`} fill="none" stroke="currentColor" strokeWidth="1.6">
    <circle cx="6" cy="19" r="2" />
    <circle cx="18" cy="5" r="2" />
    <path d="M8 19h7a4 4 0 0 0 0-8H9a4 4 0 0 1 0-8h7" />
  </svg>
);

export const IconTent = ({ className = '' }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${base} ${className}`} fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M3 21 12 4l9 17M12 4v17M8 21l4-6 4 6" />
  </svg>
);

export const IconSeed = ({ className = '' }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${base} ${className}`} fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M12 21V10" />
    <path d="M12 10c-4 0-7-3-7-7 4 0 7 3 7 7Z" />
    <path d="M12 10c4 0 7-3 7-7-4 0-7 3-7 7Z" />
  </svg>
);

export const IconBath = ({ className = '' }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${base} ${className}`} fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M3 12h18v4a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-4Z" />
    <path d="M6 12V6a3 3 0 0 1 6 0M8 4v0" />
  </svg>
);

export const IconShield = ({ className = '' }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${base} ${className}`} fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M12 3 4 6v6c0 5 4 9 8 9s8-4 8-9V6l-8-3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const IconChart = ({ className = '' }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${base} ${className}`} fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M3 21h18M6 17V9M11 17V5M16 17v-6M21 17v-3" />
  </svg>
);

export const IconSparkle = ({ className = '' }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${base} ${className}`} fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l3 3M15 15l3 3M18 6l-3 3M9 15l-3 3" />
  </svg>
);

export const IconArrowRight = ({ className = '' }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${base} ${className}`} fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14m-6-6 6 6-6 6" />
  </svg>
);

export const IconPhone = ({ className = '' }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${base} ${className}`} fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2Z" />
  </svg>
);

export const IconMail = ({ className = '' }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${base} ${className}`} fill="none" stroke="currentColor" strokeWidth="1.6">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 7 9-7" />
  </svg>
);

export const IconPin = ({ className = '' }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${base} ${className}`} fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M12 22s-7-6-7-12a7 7 0 0 1 14 0c0 6-7 12-7 12Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

export const IconPlay = ({ className = '' }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${base} ${className}`} fill="currentColor">
    <path d="M8 5v14l11-7L8 5Z" />
  </svg>
);

export const IconCheck = ({ className = '' }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${base} ${className}`} fill="none" stroke="currentColor" strokeWidth="2">
    <path d="m5 12 5 5 9-11" />
  </svg>
);

export const IconWaves = ({ className = '' }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${base} ${className}`} fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M2 10c3-3 5-3 8 0s5 3 8 0 4-3 4-3M2 16c3-3 5-3 8 0s5 3 8 0 4-3 4-3" />
  </svg>
);

export const IconSheep = ({ className = '' }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${base} ${className}`} fill="none" stroke="currentColor" strokeWidth="1.6">
    <circle cx="8" cy="8" r="3" />
    <circle cx="14" cy="9" r="2.5" />
    <circle cx="19" cy="11" r="2" />
    <path d="M6 14h12v4a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-4ZM9 21v-2M15 21v-2" />
  </svg>
);

export const IconWhatsApp = ({ className = '' }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${base} ${className}`} fill="currentColor">
    <path d="M19.07 4.93A10 10 0 0 0 2.55 16.4L1 22l5.74-1.5a10 10 0 0 0 14.78-8.69 10 10 0 0 0-2.45-6.88ZM12 20a8 8 0 0 1-4.07-1.12l-.29-.18-3.4.9.91-3.32-.19-.31A8 8 0 1 1 12 20Zm4.5-5.93-.43-.22c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.69.15-.21.3-.79.98-.97 1.18-.18.21-.36.23-.66.08a6.6 6.6 0 0 1-1.95-1.2 7.4 7.4 0 0 1-1.36-1.7c-.14-.24 0-.37.11-.5.11-.13.24-.31.36-.46.12-.16.16-.27.24-.45.08-.18.04-.34-.02-.49-.06-.15-.66-1.6-.9-2.18-.24-.57-.49-.5-.68-.51h-.58c-.2 0-.5.07-.77.37-.27.3-1 1-1 2.45 0 1.45 1.03 2.85 1.17 3.05.14.2 2.03 3.1 4.92 4.34a16 16 0 0 0 1.65.61c.69.22 1.32.19 1.81.12.55-.08 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.07-.13-.27-.21-.57-.36Z" />
  </svg>
);

export const IconInstagram = ({ className = '' }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${base} ${className}`} fill="none" stroke="currentColor" strokeWidth="1.6">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
  </svg>
);

export const IconTikTok = ({ className = '' }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${base} ${className}`} fill="currentColor">
    <path d="M21 8.5a7 7 0 0 1-4.7-1.7v8.4a6.3 6.3 0 1 1-5.4-6.2v3.2a3.1 3.1 0 1 0 2.2 3v-12h3.1A4 4 0 0 0 21 5.3v3.2Z" />
  </svg>
);

export const IconPlus = ({ className = '' }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${base} ${className}`} fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 5v14M5 12h14" />
  </svg>
);

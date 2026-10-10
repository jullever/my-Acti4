/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import '@/global.css';

import { Platform } from 'react-native';

export const Colors = {
  light: {
    // core
    text: '#0F172A',
    background: '#F8FAFC',
    backgroundElement: '#EEF2FF',
    backgroundSelected: '#C7D2FE',
    textSecondary: '#64748B',
    // extended
    accent: '#6366F1',
    accentSoft: '#EEF2FF',
    card: '#FFFFFF',
    cardBorder: '#E2E8F0',
    muted: '#94A3B8',
    success: '#22C55E',
    warning: '#F59E0B',
    danger: '#EF4444',
  },
  dark: {
    // core
    text: '#F1F5F9',
    background: '#0F172A',
    backgroundElement: '#1E293B',
    backgroundSelected: '#334155',
    textSecondary: '#94A3B8',
    // extended
    accent: '#818CF8',
    accentSoft: '#1E1B4B',
    card: '#1E293B',
    cardBorder: '#334155',
    muted: '#475569',
    success: '#4ADE80',
    warning: '#FCD34D',
    danger: '#F87171',
  },
} as const;

export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: 'var(--font-display)',
    serif: 'var(--font-serif)',
    rounded: 'var(--font-rounded)',
    mono: 'var(--font-mono)',
  },
});

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
  seven: 80,
  eight: 96,
} as const;

export const BottomTabInset = Platform.select({ ios: 50, android: 80 }) ?? 0;
export const MaxContentWidth = 800;

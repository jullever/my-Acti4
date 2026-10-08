/**
 * src/styles.js
 *
 * Shared stylesheet for the app.
 * Built on top of the Spacing / Colors tokens from @/constants/theme so every
 * value stays in sync with the design system.
 *
 * Usage:
 *   import { sharedStyles, typography } from '@/styles';
 */

import { StyleSheet, Platform } from 'react-native';
import { Spacing } from '@/constants/theme';

// ─────────────────────────────────────────────────────────────────────────────
// Layout helpers
// ─────────────────────────────────────────────────────────────────────────────
export const layout = StyleSheet.create({
  /** Full-screen flex container */
  screen: {
    flex: 1,
  },
  /** Row that centres its children horizontally */
  centeredRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  /** Column that centres everything */
  centeredColumn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  /** Stretch a child to fill its parent horizontally */
  fullWidth: {
    alignSelf: 'stretch',
  },
});

// ─────────────────────────────────────────────────────────────────────────────
// Spacing / padding presets  (maps to Spacing tokens)
// ─────────────────────────────────────────────────────────────────────────────
export const spacing = StyleSheet.create({
  /** Small horizontal screen gutters */
  screenPaddingSmall: {
    paddingHorizontal: Spacing.three,
  },
  /** Standard horizontal screen gutters */
  screenPadding: {
    paddingHorizontal: Spacing.four,
  },
  /** Large horizontal screen gutters */
  screenPaddingLarge: {
    paddingHorizontal: Spacing.five,
  },
  /** Standard vertical section gap */
  sectionGap: {
    marginBottom: Spacing.five,
  },
  /** Tight gap between stacked items */
  itemGapSmall: {
    marginBottom: Spacing.two,
  },
  /** Normal gap between stacked items */
  itemGap: {
    marginBottom: Spacing.three,
  },
});

// ─────────────────────────────────────────────────────────────────────────────
// Typography scale  (colour is intentionally omitted — apply via ThemedText)
// ─────────────────────────────────────────────────────────────────────────────
export const typography = StyleSheet.create({
  /** Hero / page-level title */
  hero: {
    fontSize: 48,
    fontWeight: '600',
    lineHeight: 52,
    textAlign: 'center',
  },
  /** Section sub-heading */
  subtitle: {
    fontSize: 32,
    fontWeight: '600',
    lineHeight: 44,
  },
  /** Standard body copy */
  body: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
  },
  /** Slightly smaller body copy */
  small: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
  },
  /** Small bold label */
  smallBold: {
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 20,
  },
  /** Monospace snippet — font resolved per-platform */
  code: {
    fontFamily: Platform.select({
      ios: 'ui-monospace',
      android: 'monospace',
      web: 'var(--font-mono)',
      default: 'monospace',
    }),
    fontSize: 12,
    fontWeight: Platform.OS === 'android' ? '700' : '500',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  /** Centred helper text */
  centered: {
    textAlign: 'center',
  },
});

// ─────────────────────────────────────────────────────────────────────────────
// Surface / card shapes
// ─────────────────────────────────────────────────────────────────────────────
export const surfaces = StyleSheet.create({
  /** Rounded card with standard padding */
  card: {
    borderRadius: Spacing.four,
    padding: Spacing.three,
  },
  /** Pill-shaped chip / badge */
  pill: {
    borderRadius: Spacing.five,
    paddingVertical: Spacing.two,
    paddingHorizontal: Spacing.four,
  },
  /** Row inside a card — icon + label pattern */
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

// ─────────────────────────────────────────────────────────────────────────────
// Interactive elements
// ─────────────────────────────────────────────────────────────────────────────
export const interactive = StyleSheet.create({
  /** Standard touchable press feedback */
  pressed: {
    opacity: 0.7,
  },
  /** Row-style link button */
  linkButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.one,
    paddingHorizontal: Spacing.four,
    paddingVertical: Spacing.two,
    borderRadius: Spacing.five,
  },
});

// ─────────────────────────────────────────────────────────────────────────────
// Image presets
// ─────────────────────────────────────────────────────────────────────────────
export const images = StyleSheet.create({
  /** Tutorial / banner — full-width with fixed aspect ratio */
  wideBanner: {
    width: '100%',
    aspectRatio: 296 / 171,
    borderRadius: Spacing.three,
    marginTop: Spacing.two,
  },
  /** Small square logo / icon */
  smallLogo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
});

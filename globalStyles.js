import { StyleSheet } from 'react-native';

export const colors = {
  background: '#0D0D0D',
  card: '#1A1A2E',
  cardBorder: '#16213E',
  accent: '#E94560',
  accentLight: '#FF6B81',
  textPrimary: '#EAEAEA',
  textSecondary: '#A0A0B0',
  textMuted: '#606070',
  gold: '#FFD700',
  buttonBg: '#E94560',
  buttonText: '#FFFFFF',
  tagBg: '#16213E',
  tagText: '#A0A0B0',
};

export const globalStyles = StyleSheet.create({
  // ── Screen containers ──────────────────────────────────────────
  screenContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },

  // ── Typography ─────────────────────────────────────────────────
  screenTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.textPrimary,
    letterSpacing: 0.5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: 12,
  },
  bodyText: {
    fontSize: 15,
    color: colors.textSecondary,
    lineHeight: 22,
  },
  mutedText: {
    fontSize: 13,
    color: colors.textMuted,
  },

  // ── Buttons ────────────────────────────────────────────────────
  primaryButton: {
    backgroundColor: colors.buttonBg,
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 30,
    alignItems: 'center',
    shadowColor: colors.accent,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 6,
  },
  primaryButtonText: {
    color: colors.buttonText,
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.5,
  },

  // ── Cards ──────────────────────────────────────────────────────
  card: {
    backgroundColor: colors.card,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.cardBorder,
    overflow: 'hidden',
  },

  // ── Divider ────────────────────────────────────────────────────
  divider: {
    height: 1,
    backgroundColor: colors.cardBorder,
    marginVertical: 16,
  },
});

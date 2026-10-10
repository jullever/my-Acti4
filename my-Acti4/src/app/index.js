import * as Device from 'expo-device';
import { Platform, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AnimatedIcon } from '@/components/animated-icon';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { WebBadge } from '@/components/web-badge';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

// ── Feature grid data ──────────────────────────────────────────────────────────
const FEATURES = [
  {
    emoji: '✏️',
    title: 'Edit Live',
    desc: 'Changes reflect instantly — no rebuild needed.',
  },
  {
    emoji: '🌗',
    title: 'Dark & Light',
    desc: 'Full theme support out of the box.',
  },
  {
    emoji: '📱',
    title: 'Cross-Platform',
    desc: 'Runs on Android, iOS and the web.',
  },
  {
    emoji: '⚡',
    title: 'Fast Refresh',
    desc: 'Save and see updates in under a second.',
  },
];

function getDevMenuHint() {
  if (Platform.OS === 'web') return 'browser devtools';
  if (Device.isDevice) return 'shake device or press m in terminal';
  return Platform.OS === 'android' ? 'cmd+m (or ctrl+m)' : 'cmd+d';
}

export default function HomeScreen() {
  const theme = useTheme();

  return (
    <ThemedView style={styles.root}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[
            styles.scroll,
            { paddingBottom: BottomTabInset + Spacing.five },
          ]}>

          {/* ── Hero banner ─────────────────────────────────────────────── */}
          <View style={[styles.hero, { backgroundColor: theme.accentSoft }]}>
            <AnimatedIcon />
            <ThemedText style={styles.heroTitle}>
              Welcome to{'\n'}Expo Starter
            </ThemedText>
            <ThemedText style={[styles.heroSub, { color: theme.textSecondary }]}>
              A clean foundation for your next mobile app.
            </ThemedText>
          </View>

          {/* ── Section label ───────────────────────────────────────────── */}
          <View style={styles.sectionHeader}>
            <View style={[styles.sectionPill, { backgroundColor: theme.accentSoft }]}>
              <ThemedText style={[styles.sectionPillText, { color: theme.accent }]}>
                What's included
              </ThemedText>
            </View>
            <ThemedText style={[styles.sectionTitle, { color: theme.text }]}>
              Built-in Features
            </ThemedText>
          </View>

          {/* ── 2-column feature grid ────────────────────────────────────── */}
          <View style={styles.grid}>
            {FEATURES.map((f) => (
              <View
                key={f.title}
                style={[
                  styles.featureCard,
                  { backgroundColor: theme.card, borderColor: theme.cardBorder },
                ]}>
                <ThemedText style={styles.featureEmoji}>{f.emoji}</ThemedText>
                <ThemedText style={[styles.featureTitle, { color: theme.text }]}>
                  {f.title}
                </ThemedText>
                <ThemedText style={[styles.featureDesc, { color: theme.textSecondary }]}>
                  {f.desc}
                </ThemedText>
              </View>
            ))}
          </View>

          {/* ── Divider ─────────────────────────────────────────────────── */}
          <View style={[styles.divider, { backgroundColor: theme.cardBorder }]} />

          {/* ── Quick-start card ─────────────────────────────────────────── */}
          <View style={styles.sectionHeader}>
            <ThemedText style={[styles.sectionTitle, { color: theme.text }]}>
              Quick Start
            </ThemedText>
          </View>

          <View style={[styles.quickCard, { backgroundColor: theme.card, borderColor: theme.cardBorder }]}>
            <QuickRow
              accent={theme.accent}
              label="Edit this screen"
              value="src/app/index.js"
            />
            <View style={[styles.quickDivider, { backgroundColor: theme.cardBorder }]} />
            <QuickRow
              accent={theme.accent}
              label="Open dev menu"
              value={getDevMenuHint()}
            />
            <View style={[styles.quickDivider, { backgroundColor: theme.cardBorder }]} />
            <QuickRow
              accent={theme.accent}
              label="Reset project"
              value="npm run reset-project"
            />
          </View>

          {Platform.OS === 'web' && (
            <View style={styles.webBadgeContainer}>
              <WebBadge />
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
}

function QuickRow({ label, value, accent }) {
  return (
    <View style={styles.quickRow}>
      <ThemedText style={styles.quickLabel}>{label}</ThemedText>
      <View style={[styles.quickValuePill, { backgroundColor: accent + '18' }]}>
        <ThemedText style={[styles.quickValue, { color: accent }]} numberOfLines={1}>
          {value}
        </ThemedText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  scroll: {
    alignItems: 'stretch',
    maxWidth: MaxContentWidth,
    alignSelf: 'center',
    width: '100%',
  },

  // Hero
  hero: {
    alignItems: 'center',
    paddingTop: Spacing.six,
    paddingBottom: Spacing.five,
    paddingHorizontal: Spacing.four,
    gap: Spacing.three,
  },
  heroTitle: {
    fontSize: 36,
    fontWeight: '800',
    lineHeight: 44,
    textAlign: 'center',
    letterSpacing: -0.5,
  },
  heroSub: {
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 22,
    textAlign: 'center',
    maxWidth: 280,
  },

  // Section header
  sectionHeader: {
    paddingHorizontal: Spacing.four,
    paddingTop: Spacing.four,
    paddingBottom: Spacing.two,
    gap: Spacing.two,
  },
  sectionPill: {
    alignSelf: 'flex-start',
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.half,
    borderRadius: 100,
  },
  sectionPillText: {
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    letterSpacing: -0.3,
  },

  // Feature grid
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: Spacing.three,
    gap: Spacing.two,
  },
  featureCard: {
    flex: 1,
    minWidth: '44%',
    borderRadius: 16,
    borderWidth: 1,
    padding: Spacing.three,
    gap: Spacing.one,
  },
  featureEmoji: {
    fontSize: 26,
    marginBottom: Spacing.one,
  },
  featureTitle: {
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: -0.2,
  },
  featureDesc: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 18,
  },

  // Divider
  divider: {
    height: 1,
    marginHorizontal: Spacing.four,
    marginTop: Spacing.four,
  },

  // Quick-start card
  quickCard: {
    marginHorizontal: Spacing.four,
    borderRadius: 16,
    borderWidth: 1,
    overflow: 'hidden',
  },
  quickRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.three,
    gap: Spacing.two,
  },
  quickDivider: {
    height: 1,
    marginHorizontal: Spacing.three,
  },
  quickLabel: {
    fontSize: 14,
    fontWeight: '500',
    flex: 1,
  },
  quickValuePill: {
    borderRadius: 8,
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.half,
    maxWidth: 180,
  },
  quickValue: {
    fontSize: 12,
    fontWeight: '600',
    fontFamily: Platform.select({
      ios: 'ui-monospace',
      android: 'monospace',
      default: 'monospace',
    }),
  },

  webBadgeContainer: {
    marginTop: Spacing.four,
    alignItems: 'center',
  },
});

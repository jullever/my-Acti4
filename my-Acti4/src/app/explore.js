import { Image } from 'expo-image';
import { SymbolView } from 'expo-symbols';
import { Platform, Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ExternalLink } from '@/components/external-link';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { WebBadge } from '@/components/web-badge';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

// ── Numbered step list data ────────────────────────────────────────────────────
const STEPS = [
  {
    number: '01',
    title: 'File-based routing',
    body: 'Every file in src/app/ becomes a screen automatically. _layout.js files define navigators.',
    link: 'https://docs.expo.dev/router/introduction',
    linkLabel: 'Router docs →',
    image: null,
  },
  {
    number: '02',
    title: 'Android, iOS & Web',
    body: 'Run on any platform from one codebase. Press w in the terminal to open the web version.',
    link: null,
    linkLabel: null,
    image: require('@/assets/images/tutorial-web.png'),
    imageRatio: 296 / 171,
  },
  {
    number: '03',
    title: 'Optimised images',
    body: 'Use @2x / @3x suffixes to serve the right resolution per screen density.',
    link: 'https://reactnative.dev/docs/images',
    linkLabel: 'Images docs →',
    image: require('@/assets/images/react-logo.png'),
    imageSquare: true,
  },
  {
    number: '04',
    title: 'Dark & Light themes',
    body: 'useColorScheme() gives you the user\'s preference so you can adapt colors on the fly.',
    link: 'https://docs.expo.dev/develop/user-interface/color-themes/',
    linkLabel: 'Theming docs →',
    image: null,
  },
  {
    number: '05',
    title: 'Animations',
    body: 'react-native-reanimated powers smooth, native-thread animations throughout the app.',
    link: null,
    linkLabel: null,
    image: null,
  },
];

// ── Resource links shown at the bottom ────────────────────────────────────────
const RESOURCES = [
  { label: 'Expo Docs', href: 'https://docs.expo.dev' },
  { label: 'React Native', href: 'https://reactnative.dev' },
  { label: 'EAS Build', href: 'https://docs.expo.dev/eas/' },
];

export default function ExploreScreen() {
  const safeAreaInsets = useSafeAreaInsets();
  const theme = useTheme();

  const scrollPadding = {
    paddingBottom: safeAreaInsets.bottom + BottomTabInset + Spacing.five,
    paddingTop: Platform.OS === 'android' ? safeAreaInsets.top : 0,
  };

  return (
    <ThemedView style={styles.root}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.scroll, scrollPadding]}>

        {/* ── Page header ───────────────────────────────────────────────── */}
        <View style={[styles.pageHeader, { borderBottomColor: theme.cardBorder }]}>
          <View style={[styles.headerBadge, { backgroundColor: theme.accentSoft }]}>
            <ThemedText style={[styles.headerBadgeText, { color: theme.accent }]}>
              Guide
            </ThemedText>
          </View>
          <ThemedText style={styles.pageTitle}>Explore the Starter</ThemedText>
          <ThemedText style={[styles.pageSubtitle, { color: theme.textSecondary }]}>
            A walkthrough of what's inside and how to build on it.
          </ThemedText>
        </View>

        {/* ── Numbered steps ────────────────────────────────────────────── */}
        <View style={styles.stepsContainer}>
          {STEPS.map((step, index) => (
            <StepCard
              key={step.number}
              step={step}
              theme={theme}
              isLast={index === STEPS.length - 1}
            />
          ))}
        </View>

        {/* ── Resources row ─────────────────────────────────────────────── */}
        <View style={styles.sectionHeader}>
          <ThemedText style={[styles.sectionTitle, { color: theme.text }]}>
            Resources
          </ThemedText>
        </View>

        <View style={styles.resourcesRow}>
          {RESOURCES.map((r) => (
            <ExternalLink key={r.label} href={r.href} asChild>
              <Pressable
                style={({ pressed }) => [
                  styles.resourceCard,
                  { backgroundColor: theme.card, borderColor: theme.cardBorder },
                  pressed && styles.pressed,
                ]}>
                <ThemedText style={[styles.resourceLabel, { color: theme.accent }]}>
                  {r.label}
                </ThemedText>
                <SymbolView
                  tintColor={theme.accent}
                  name={{ ios: 'arrow.up.right', android: 'link', web: 'link' }}
                  size={12}
                />
              </Pressable>
            </ExternalLink>
          ))}
        </View>

        {Platform.OS === 'web' && (
          <View style={styles.webBadgeContainer}>
            <WebBadge />
          </View>
        )}
      </ScrollView>
    </ThemedView>
  );
}

function StepCard({ step, theme, isLast }) {
  return (
    <View style={styles.stepRow}>
      {/* Left: number + connector line */}
      <View style={styles.stepLeft}>
        <View style={[styles.stepNumber, { backgroundColor: theme.accentSoft }]}>
          <ThemedText style={[styles.stepNumberText, { color: theme.accent }]}>
            {step.number}
          </ThemedText>
        </View>
        {!isLast && (
          <View style={[styles.connector, { backgroundColor: theme.cardBorder }]} />
        )}
      </View>

      {/* Right: content */}
      <View style={styles.stepContent}>
        <ThemedText style={[styles.stepTitle, { color: theme.text }]}>
          {step.title}
        </ThemedText>
        <ThemedText style={[styles.stepBody, { color: theme.textSecondary }]}>
          {step.body}
        </ThemedText>

        {step.image && !step.imageSquare && (
          <Image
            source={step.image}
            style={[styles.bannerImage, { borderColor: theme.cardBorder }]}
          />
        )}
        {step.image && step.imageSquare && (
          <Image source={step.image} style={styles.squareImage} />
        )}

        {step.link && (
          <ExternalLink href={step.link} asChild>
            <Pressable style={({ pressed }) => pressed && styles.pressed}>
              <ThemedText style={[styles.stepLink, { color: theme.accent }]}>
                {step.linkLabel}
              </ThemedText>
            </Pressable>
          </ExternalLink>
        )}

        {!isLast && <View style={styles.stepSpacer} />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  scroll: {
    maxWidth: MaxContentWidth,
    alignSelf: 'center',
    width: '100%',
  },

  // Page header
  pageHeader: {
    paddingHorizontal: Spacing.four,
    paddingTop: Spacing.five,
    paddingBottom: Spacing.four,
    gap: Spacing.two,
    borderBottomWidth: 1,
  },
  headerBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.half,
    borderRadius: 100,
    marginBottom: Spacing.one,
  },
  headerBadgeText: {
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  pageTitle: {
    fontSize: 30,
    fontWeight: '800',
    letterSpacing: -0.5,
    lineHeight: 36,
  },
  pageSubtitle: {
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 22,
  },

  // Steps
  stepsContainer: {
    paddingTop: Spacing.four,
    paddingHorizontal: Spacing.four,
  },
  stepRow: {
    flexDirection: 'row',
    gap: Spacing.three,
  },
  stepLeft: {
    alignItems: 'center',
    width: 40,
  },
  stepNumber: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepNumberText: {
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  connector: {
    width: 2,
    flex: 1,
    marginVertical: Spacing.one,
    borderRadius: 1,
  },
  stepContent: {
    flex: 1,
    paddingTop: Spacing.two,
  },
  stepTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: Spacing.one,
    letterSpacing: -0.2,
  },
  stepBody: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
  },
  stepLink: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: Spacing.two,
  },
  stepSpacer: {
    height: Spacing.four,
  },

  // Images inside steps
  bannerImage: {
    width: '100%',
    aspectRatio: 296 / 171,
    borderRadius: 12,
    marginTop: Spacing.two,
    borderWidth: 1,
  },
  squareImage: {
    width: 80,
    height: 80,
    borderRadius: 12,
    marginTop: Spacing.two,
    alignSelf: 'center',
  },

  // Section header
  sectionHeader: {
    paddingHorizontal: Spacing.four,
    paddingTop: Spacing.five,
    paddingBottom: Spacing.two,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: -0.3,
  },

  // Resources
  resourcesRow: {
    flexDirection: 'row',
    paddingHorizontal: Spacing.four,
    gap: Spacing.two,
  },
  resourceCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.one,
    paddingVertical: Spacing.three,
    borderRadius: 14,
    borderWidth: 1,
  },
  resourceLabel: {
    fontSize: 13,
    fontWeight: '700',
  },
  pressed: {
    opacity: 0.65,
  },

  webBadgeContainer: {
    marginTop: Spacing.four,
    alignItems: 'center',
  },
});

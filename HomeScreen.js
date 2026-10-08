import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import { globalStyles, colors } from './globalStyles';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={globalStyles.screenContainer}>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />

      {/* Hero section */}
      <View style={styles.hero}>
        <Text style={styles.brandLabel}>🎬  MOVIE EXPLORER</Text>
        <Text style={styles.heroTitle}>Discover Your{'\n'}Next Favourite Film</Text>
        <Text style={styles.heroSubtitle}>
          Browse our curated collection of top-rated movies across every genre.
        </Text>
      </View>

      {/* Stats row */}
      <View style={styles.statsRow}>
        <StatCard value="10+" label="Movies" />
        <StatCard value="6" label="Genres" />
        <StatCard value="IMDb" label="Ratings" />
      </View>

      {/* CTA button */}
      <View style={styles.ctaContainer}>
        <TouchableOpacity
          style={globalStyles.primaryButton}
          onPress={() => navigation.navigate('MovieList')}
          activeOpacity={0.85}
        >
          <Text style={globalStyles.primaryButtonText}>Browse Movies →</Text>
        </TouchableOpacity>

        <Text style={styles.hint}>Tap a movie to see full details</Text>
      </View>
    </SafeAreaView>
  );
}

function StatCard({ value, label }) {
  return (
    <View style={styles.statCard}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  hero: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 28,
    paddingTop: 20,
  },
  brandLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.accent,
    letterSpacing: 2,
    textTransform: 'uppercase',
    marginBottom: 16,
  },
  heroTitle: {
    fontSize: 38,
    fontWeight: '900',
    color: colors.textPrimary,
    lineHeight: 46,
    marginBottom: 16,
  },
  heroSubtitle: {
    fontSize: 16,
    color: colors.textSecondary,
    lineHeight: 24,
    maxWidth: 300,
  },

  // Stats
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 24,
    marginBottom: 32,
  },
  statCard: {
    alignItems: 'center',
    backgroundColor: colors.card,
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: colors.cardBorder,
    minWidth: 90,
  },
  statValue: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.accent,
  },
  statLabel: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 4,
    fontWeight: '600',
  },

  // CTA
  ctaContainer: {
    alignItems: 'center',
    paddingBottom: 40,
    paddingHorizontal: 28,
  },
  hint: {
    marginTop: 14,
    fontSize: 13,
    color: colors.textMuted,
  },
});

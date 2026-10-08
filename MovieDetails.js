import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { globalStyles, colors } from './globalStyles';

export default function MovieDetails({ route, navigation }) {
  // Data passed via route.params from MovieList
  const { movie } = route.params;

  const ratingColor = movie.rating >= 9 ? '#4CAF50' : movie.rating >= 8 ? colors.gold : '#FF9800';

  return (
    <SafeAreaView style={globalStyles.screenContainer}>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

        {/* ── Hero poster ── */}
        <View style={styles.heroContainer}>
          <Text style={styles.heroEmoji}>{movie.emoji}</Text>

          {/* Genre tag */}
          <View style={styles.genreTag}>
            <Text style={styles.genreTagText}>{movie.genre.toUpperCase()}</Text>
          </View>
        </View>

        {/* ── Title block ── */}
        <View style={styles.titleBlock}>
          <Text style={styles.title}>{movie.title}</Text>

          <View style={styles.metaRow}>
            <Text style={styles.year}>{movie.year}</Text>
            <Text style={styles.dot}>·</Text>
            <Text style={styles.duration}>{movie.duration}</Text>
            <Text style={styles.dot}>·</Text>
            <View style={[styles.ratingBadge, { backgroundColor: ratingColor + '22', borderColor: ratingColor }]}>
              <Text style={[styles.ratingText, { color: ratingColor }]}>⭐ {movie.rating}</Text>
            </View>
          </View>

          <Text style={styles.director}>Directed by {movie.director}</Text>
        </View>

        <View style={globalStyles.divider} />

        {/* ── Overview ── */}
        <View style={styles.section}>
          <Text style={globalStyles.sectionTitle}>Overview</Text>
          <Text style={globalStyles.bodyText}>{movie.description}</Text>
        </View>

        <View style={globalStyles.divider} />

        {/* ── Cast ── */}
        <View style={styles.section}>
          <Text style={globalStyles.sectionTitle}>Top Cast</Text>
          <View style={styles.castRow}>
            {movie.cast.map((actor, index) => (
              <View key={index} style={styles.castChip}>
                <Text style={styles.castEmoji}>🎭</Text>
                <Text style={styles.castName}>{actor}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={globalStyles.divider} />

        {/* ── Back button (manual goBack) ── */}
        <View style={styles.backSection}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
            activeOpacity={0.85}
          >
            <Text style={styles.backButtonText}>← Back to Movies</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[globalStyles.primaryButton, styles.homeButton]}
            onPress={() => navigation.navigate('Home')}
            activeOpacity={0.85}
          >
            <Text style={globalStyles.primaryButtonText}>🏠  Go to Home</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: 40,
  },

  // Hero
  heroContainer: {
    alignItems: 'center',
    paddingVertical: 40,
    backgroundColor: colors.card,
    borderBottomWidth: 1,
    borderBottomColor: colors.cardBorder,
    position: 'relative',
  },
  heroEmoji: {
    fontSize: 90,
  },
  genreTag: {
    marginTop: 12,
    paddingVertical: 4,
    paddingHorizontal: 14,
    borderRadius: 20,
    backgroundColor: colors.accent + '22',
    borderWidth: 1,
    borderColor: colors.accent,
  },
  genreTagText: {
    fontSize: 11,
    fontWeight: '800',
    color: colors.accent,
    letterSpacing: 1.5,
  },

  // Title block
  titleBlock: {
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 4,
  },
  title: {
    fontSize: 30,
    fontWeight: '900',
    color: colors.textPrimary,
    marginBottom: 10,
    lineHeight: 36,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  year: {
    fontSize: 14,
    color: colors.textSecondary,
    fontWeight: '600',
  },
  duration: {
    fontSize: 14,
    color: colors.textSecondary,
    fontWeight: '600',
  },
  dot: {
    color: colors.textMuted,
    marginHorizontal: 8,
    fontSize: 16,
  },
  ratingBadge: {
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 12,
    borderWidth: 1,
  },
  ratingText: {
    fontSize: 13,
    fontWeight: '800',
  },
  director: {
    fontSize: 14,
    color: colors.textMuted,
    fontStyle: 'italic',
    marginTop: 4,
  },

  // Sections
  section: {
    paddingHorizontal: 24,
    paddingVertical: 4,
  },

  // Cast
  castRow: {
    gap: 10,
  },
  castChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.card,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: colors.cardBorder,
    marginBottom: 2,
  },
  castEmoji: {
    fontSize: 18,
    marginRight: 10,
  },
  castName: {
    fontSize: 15,
    color: colors.textPrimary,
    fontWeight: '600',
  },

  // Back / Home buttons
  backSection: {
    paddingHorizontal: 24,
    paddingTop: 8,
    gap: 12,
  },
  backButton: {
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 30,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: colors.accent,
  },
  backButtonText: {
    color: colors.accent,
    fontSize: 16,
    fontWeight: '700',
  },
  homeButton: {
    marginTop: 4,
  },
});

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { globalStyles, colors } from './globalStyles';

// ── Mock data ──────────────────────────────────────────────────────────────────
export const MOVIES = [
  {
    id: '1',
    title: 'Interstellar',
    genre: 'Sci-Fi',
    year: 2014,
    rating: 8.7,
    director: 'Christopher Nolan',
    duration: '2h 49m',
    description:
      'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival on a dying Earth.',
    cast: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain'],
    emoji: '🚀',
  },
  {
    id: '2',
    title: 'The Shawshank Redemption',
    genre: 'Drama',
    year: 1994,
    rating: 9.3,
    director: 'Frank Darabont',
    duration: '2h 22m',
    description:
      'Two imprisoned men bond over years, finding solace and eventual redemption through acts of common decency.',
    cast: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
    emoji: '🏛️',
  },
  {
    id: '3',
    title: 'The Dark Knight',
    genre: 'Action',
    year: 2008,
    rating: 9.0,
    director: 'Christopher Nolan',
    duration: '2h 32m',
    description:
      'Batman raises the stakes in his war on crime as the Joker wreaks havoc and chaos on Gotham City.',
    cast: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart'],
    emoji: '🦇',
  },
  {
    id: '4',
    title: 'Pulp Fiction',
    genre: 'Crime',
    year: 1994,
    rating: 8.9,
    director: 'Quentin Tarantino',
    duration: '2h 34m',
    description:
      'The lives of two mob hitmen, a boxer, a gangster, and his wife intertwine in four tales of violence and redemption.',
    cast: ['John Travolta', 'Uma Thurman', 'Samuel L. Jackson'],
    emoji: '💼',
  },
  {
    id: '5',
    title: 'Inception',
    genre: 'Sci-Fi',
    year: 2010,
    rating: 8.8,
    director: 'Christopher Nolan',
    duration: '2h 28m',
    description:
      'A thief who steals corporate secrets through dream-sharing technology is given the task of planting an idea.',
    cast: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Elliot Page'],
    emoji: '🌀',
  },
  {
    id: '6',
    title: 'Parasite',
    genre: 'Thriller',
    year: 2019,
    rating: 8.5,
    director: 'Bong Joon-ho',
    duration: '2h 12m',
    description:
      'A poor family schemes to become employed by a wealthy family, but a sudden discovery threatens their plan.',
    cast: ['Song Kang-ho', 'Lee Sun-kyun', 'Cho Yeo-jeong'],
    emoji: '🏠',
  },
  {
    id: '7',
    title: 'The Godfather',
    genre: 'Crime',
    year: 1972,
    rating: 9.2,
    director: 'Francis Ford Coppola',
    duration: '2h 55m',
    description:
      'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    cast: ['Marlon Brando', 'Al Pacino', 'James Caan'],
    emoji: '🤵',
  },
  {
    id: '8',
    title: 'Spirited Away',
    genre: 'Animation',
    year: 2001,
    rating: 8.6,
    director: 'Hayao Miyazaki',
    duration: '2h 5m',
    description:
      'A young girl becomes trapped in a mysterious spirit world and must work to free herself and her parents.',
    cast: ['Daveigh Chase', 'Suzanne Pleshette', 'Miyu Irino'],
    emoji: '✨',
  },
  {
    id: '9',
    title: 'Forrest Gump',
    genre: 'Drama',
    year: 1994,
    rating: 8.8,
    director: 'Robert Zemeckis',
    duration: '2h 22m',
    description:
      'The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate and other history unfold from the perspective of an Alabama man.',
    cast: ['Tom Hanks', 'Robin Wright', 'Gary Sinise'],
    emoji: '🏃',
  },
  {
    id: '10',
    title: 'Goodfellas',
    genre: 'Crime',
    year: 1990,
    rating: 8.7,
    director: 'Martin Scorsese',
    duration: '2h 26m',
    description:
      'The story of Henry Hill and his life through the criminal underworld of New York\'s mob scene.',
    cast: ['Ray Liotta', 'Robert De Niro', 'Joe Pesci'],
    emoji: '🔫',
  },
];

// ── Genre filter chips ─────────────────────────────────────────────────────────
const ALL_GENRES = ['All', ...new Set(MOVIES.map(m => m.genre))];

export default function MovieList({ navigation }) {
  const [activeGenre, setActiveGenre] = useState('All');

  const filtered =
    activeGenre === 'All' ? MOVIES : MOVIES.filter(m => m.genre === activeGenre);

  return (
    <SafeAreaView style={globalStyles.screenContainer}>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />

      {/* Header */}
      <View style={styles.header}>
        <Text style={globalStyles.screenTitle}>All Movies</Text>
        <Text style={styles.count}>{filtered.length} titles</Text>
      </View>

      {/* Genre filter */}
      <FlatList
        data={ALL_GENRES}
        keyExtractor={item => item}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.genreRow}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.chip, activeGenre === item && styles.chipActive]}
            onPress={() => setActiveGenre(item)}
            activeOpacity={0.8}
          >
            <Text style={[styles.chipText, activeGenre === item && styles.chipTextActive]}>
              {item}
            </Text>
          </TouchableOpacity>
        )}
      />

      {/* Movie list */}
      <FlatList
        data={filtered}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <MovieCard movie={item} onPress={() => navigation.navigate('MovieDetails', { movie: item })} />
        )}
      />
    </SafeAreaView>
  );
}

function MovieCard({ movie, onPress }) {
  return (
    <TouchableOpacity style={[globalStyles.card, styles.movieCard]} onPress={onPress} activeOpacity={0.85}>
      {/* Left: emoji poster */}
      <View style={styles.poster}>
        <Text style={styles.posterEmoji}>{movie.emoji}</Text>
      </View>

      {/* Right: info */}
      <View style={styles.info}>
        <View style={styles.titleRow}>
          <Text style={styles.movieTitle} numberOfLines={1}>{movie.title}</Text>
          <Text style={styles.ratingBadge}>⭐ {movie.rating}</Text>
        </View>

        <View style={styles.metaRow}>
          <Text style={styles.genre}>{movie.genre}</Text>
          <Text style={styles.dot}>·</Text>
          <Text style={styles.meta}>{movie.year}</Text>
          <Text style={styles.dot}>·</Text>
          <Text style={styles.meta}>{movie.duration}</Text>
        </View>

        <Text style={styles.director} numberOfLines={1}>
          Dir. {movie.director}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 8,
  },
  count: {
    fontSize: 14,
    color: colors.textMuted,
    fontWeight: '600',
  },

  // Genre chips
  genreRow: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    gap: 8,
  },
  chip: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.cardBorder,
    marginRight: 8,
  },
  chipActive: {
    backgroundColor: colors.accent,
    borderColor: colors.accent,
  },
  chipText: {
    fontSize: 13,
    color: colors.textSecondary,
    fontWeight: '600',
  },
  chipTextActive: {
    color: '#fff',
  },

  // Movie cards
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 24,
    gap: 12,
  },
  movieCard: {
    flexDirection: 'row',
    padding: 14,
    marginBottom: 2,
  },
  poster: {
    width: 60,
    height: 60,
    borderRadius: 10,
    backgroundColor: colors.cardBorder,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  posterEmoji: {
    fontSize: 30,
  },
  info: {
    flex: 1,
    justifyContent: 'center',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  movieTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.textPrimary,
    flex: 1,
    marginRight: 8,
  },
  ratingBadge: {
    fontSize: 13,
    color: colors.gold,
    fontWeight: '700',
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  genre: {
    fontSize: 12,
    color: colors.accent,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  dot: {
    color: colors.textMuted,
    marginHorizontal: 6,
  },
  meta: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  director: {
    fontSize: 12,
    color: colors.textMuted,
    fontStyle: 'italic',
  },
});

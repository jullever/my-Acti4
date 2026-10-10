import { Image } from 'expo-image';
import * as SplashScreen from 'expo-splash-screen';
import { useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Animated, { Easing, Keyframe } from 'react-native-reanimated';
import { scheduleOnRN } from 'react-native-worklets';

const INITIAL_SCALE_FACTOR = Dimensions.get('screen').height / 90;
const DURATION = 600;

export function AnimatedSplashOverlay() {
  const [animate, setAnimate] = useState(false);
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const splashKeyframe = new Keyframe({
    0: {
      transform: [{ scale: 1 }],
      opacity: 1,
    },
    20: {
      opacity: 1,
    },
    70: {
      opacity: 0,
      easing: Easing.elastic(0.7),
    },
    100: {
      opacity: 0,
      transform: [{ scale: 1 }],
      easing: Easing.elastic(0.7),
    },
  });

  const image = <Image style={styles.image} source={require('@/assets/images/expo-logo.png')} />;

  return animate ? (
    <Animated.View
      entering={splashKeyframe.duration(DURATION).withCallback((finished) => {
        'worklet';
        if (finished) {
          scheduleOnRN(setVisible, false);
        }
      })}
      style={styles.splashOverlay}>
      {image}
    </Animated.View>
  ) : (
    <View
      onLayout={() => {
        SplashScreen.hideAsync().finally(() => {
          setAnimate(true);
        });
      }}
      style={styles.splashOverlay}>
      {image}
    </View>
  );
}

const keyframe = new Keyframe({
  0: {
    transform: [{ scale: INITIAL_SCALE_FACTOR }],
  },
  100: {
    transform: [{ scale: 1 }],
    easing: Easing.elastic(0.7),
  },
});

const logoKeyframe = new Keyframe({
  0: {
    transform: [{ scale: 1.3 }],
    opacity: 0,
  },
  40: {
    transform: [{ scale: 1.3 }],
    opacity: 0,
    easing: Easing.elastic(0.7),
  },
  100: {
    opacity: 1,
    transform: [{ scale: 1 }],
    easing: Easing.elastic(0.7),
  },
});

const glowKeyframe = new Keyframe({
  0: {
    transform: [{ rotateZ: '0deg' }],
  },
  100: {
    transform: [{ rotateZ: '7200deg' }],
  },
});

export function AnimatedIcon() {
  return (
    <View style={styles.iconContainer}>
      {/* Spinning glow halo — larger to match new icon size */}
      <Animated.View entering={glowKeyframe.duration(60 * 1000 * 4)} style={styles.glow}>
        <Image style={styles.glow} source={require('@/assets/images/logo-glow.png')} />
      </Animated.View>

      {/* Background squircle with indigo → violet gradient */}
      <Animated.View entering={keyframe.duration(DURATION)} style={styles.background} />

      {/* Logo image */}
      <Animated.View style={styles.imageContainer} entering={logoKeyframe.duration(DURATION)}>
        <Image style={styles.image} source={require('@/assets/images/expo-logo.png')} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Glow halo — scaled up to wrap the larger icon
  glow: {
    width: 240,
    height: 240,
    position: 'absolute',
  },

  // Icon container — 160×160 (was 128×128)
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 160,
    height: 160,
    zIndex: 100,
  },

  // Logo — proportionally scaled up
  image: {
    width: 92,
    height: 86,
  },

  // Background squircle — indigo #6366F1 → violet #A855F7, softer radius
  background: {
    borderRadius: 48,
    experimental_backgroundImage: `linear-gradient(145deg, #6366F1, #A855F7)`,
    width: 160,
    height: 160,
    position: 'absolute',
    // Subtle inner shadow via shadow props (iOS) / elevation (Android)
    shadowColor: '#A855F7',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.45,
    shadowRadius: 20,
    elevation: 12,
  },

  // Splash screen overlay — deep indigo to match the new gradient start
  splashOverlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: '#1E1B4B',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
});

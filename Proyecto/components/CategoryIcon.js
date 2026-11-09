/**
 * components/CategoryIcon.js
 * Cuadrado redondeado de color pastel con icono representativo de categoría
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { borderRadius } from '../styles/theme';

export default function CategoryIcon({ type = 'tech', size = 52, iconText }) {
  const getScheme = () => {
    switch (type) {
      case 'languages':
      case 'idiomas':
        return { bg: '#E6F8F0', color: '#10B981', defaultEmoji: '💬' };
      case 'design':
      case 'diseño':
        return { bg: '#FEF3E2', color: '#F59E0B', defaultEmoji: '🎨' };
      case 'education':
      case 'educacion':
      case 'math':
        return { bg: '#EDE9FE', color: '#8B5CF6', defaultEmoji: '📖' };
      case 'music':
      case 'musica':
        return { bg: '#FCE7F3', color: '#EC4899', defaultEmoji: '🎵' };
      case 'tech':
      case 'tecnologia':
      default:
        return { bg: '#E8EDF9', color: '#1D3B8B', defaultEmoji: '💻' };
    }
  };

  const scheme = getScheme();

  return (
    <View
      style={[
        styles.container,
        {
          width: size,
          height: size,
          backgroundColor: scheme.bg,
        },
      ]}
    >
      <Text style={[styles.iconText, { fontSize: size * 0.45 }]}>
        {iconText || scheme.defaultEmoji}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: borderRadius.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    textAlign: 'center',
  },
});

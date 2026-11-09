/**
 * components/Header.js
 * Encabezado reutilizable con fondo azul institucional, título,
 * subtítulo y botón de retroceso opcional.
 */

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import { colors, typography, spacing } from '../styles/theme';

export default function Header({
  title,
  subtitle,
  showBack = false,
  onBack,
  rightComponent,
}) {
  return (
    <View style={globalStyles.topHeaderContainer}>
      <View style={globalStyles.headerLeftGroup}>
        {showBack && (
          <TouchableOpacity
            style={globalStyles.backButton}
            onPress={onBack}
            activeOpacity={0.7}
          >
            {/* Ícono de flecha izquierda simple */}
            <Text style={styles.backArrow}>←</Text>
          </TouchableOpacity>
        )}
        <View style={globalStyles.headerTitles}>
          <Text style={globalStyles.headerMainTitle}>{title}</Text>
          {subtitle ? (
            <Text style={globalStyles.headerSubtitle}>{subtitle}</Text>
          ) : null}
        </View>
      </View>

      {rightComponent ? (
        <View>{rightComponent}</View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  backArrow: {
    color: colors.white,
    fontSize: 22,
    fontWeight: 'bold',
  },
});

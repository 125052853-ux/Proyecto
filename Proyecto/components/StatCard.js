/**
 * components/StatCard.js
 * Tarjeta estadística compacta con número destacado y etiqueta
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import { colors, spacing, borderRadius, typography } from '../styles/theme';

export default function StatCard({
  icon,
  number,
  label,
  sublabel,
  variant = 'blue', // 'blue' | 'green' | 'yellow' | 'pink'
  style,
}) {
  const getCardBg = () => {
    switch (variant) {
      case 'green':
        return globalStyles.statCardGreen;
      case 'yellow':
        return globalStyles.statCardYellow;
      case 'pink':
        return globalStyles.statCardPink;
      default:
        return globalStyles.statCardBlue;
    }
  };

  return (
    <View style={[globalStyles.statCard, getCardBg(), style]}>
      {icon ? <View style={styles.iconWrapper}>{icon}</View> : null}
      <Text style={globalStyles.statNumber}>{number}</Text>
      <Text style={globalStyles.statLabel}>{label}</Text>
      {sublabel ? <Text style={globalStyles.statSubLabel}>{sublabel}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  iconWrapper: {
    marginBottom: 2,
  },
});

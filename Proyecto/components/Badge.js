/**
 * components/Badge.js
 * Insignia de estado o rol con colores estandarizados
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import { colors, borderRadius, typography } from '../styles/theme';

export default function Badge({ label, type = 'default', showDot = false }) {
  const getBadgeStyle = () => {
    switch (type) {
      case 'admin':
        return globalStyles.badgeRoleAdmin;
      case 'user':
        return globalStyles.badgeRoleUser;
      case 'active':
        return globalStyles.badgeActive;
      case 'inactive':
        return globalStyles.badgeInactive;
      case 'pending':
        return globalStyles.badgePending;
      case 'tag':
        return styles.badgeTag;
      case 'quota':
        return styles.badgeQuota;
      default:
        return styles.badgeDefault;
    }
  };

  const getTextStyle = () => {
    switch (type) {
      case 'admin':
        return globalStyles.badgeRoleAdminText;
      case 'user':
        return globalStyles.badgeRoleUserText;
      case 'active':
        return globalStyles.badgeActiveText;
      case 'inactive':
        return globalStyles.badgeInactiveText;
      case 'pending':
        return globalStyles.badgePendingText;
      case 'tag':
        return styles.badgeTagText;
      case 'quota':
        return styles.badgeQuotaText;
      default:
        return styles.badgeDefaultText;
    }
  };

  const getDotColor = () => {
    if (type === 'active') return colors.accentGreen;
    if (type === 'inactive') return colors.danger;
    if (type === 'pending') return colors.accentYellow;
    return colors.primary;
  };

  return (
    <View style={[globalStyles.badge, getBadgeStyle(), styles.container]}>
      {showDot && (
        <View style={[styles.dot, { backgroundColor: getDotColor() }]} />
      )}
      <Text style={[globalStyles.badgeText, getTextStyle()]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 5,
  },
  badgeTag: {
    backgroundColor: '#EDE9FE',
  },
  badgeTagText: {
    color: '#6D28D9',
  },
  badgeQuota: {
    backgroundColor: '#E6F8F0',
  },
  badgeQuotaText: {
    color: '#065F46',
  },
  badgeDefault: {
    backgroundColor: '#F1F5F9',
  },
  badgeDefaultText: {
    color: colors.textSecondary,
  },
});

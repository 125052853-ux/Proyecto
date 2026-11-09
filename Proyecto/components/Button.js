/**
 * components/Button.js
 * Botón reutilizable con variantes: primary, secondary, danger, destructive
 */

import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import { colors, spacing, borderRadius, typography } from '../styles/theme';

export default function Button({
  title,
  onPress,
  variant = 'primary', // 'primary' | 'secondary' | 'danger' | 'destructive' | 'outline'
  icon,
  style,
  textStyle,
  disabled = false,
}) {
  const getButtonStyle = () => {
    switch (variant) {
      case 'secondary':
        return globalStyles.secondaryButton;
      case 'danger':
        return globalStyles.dangerButton;
      case 'destructive':
        return globalStyles.destructiveSolidButton;
      case 'outline':
        return styles.outlineButton;
      default:
        return globalStyles.primaryButton;
    }
  };

  const getTextStyle = () => {
    switch (variant) {
      case 'secondary':
        return globalStyles.secondaryButtonText;
      case 'danger':
        return globalStyles.dangerButtonText;
      case 'destructive':
        return globalStyles.destructiveSolidButtonText;
      case 'outline':
        return styles.outlineButtonText;
      default:
        return globalStyles.primaryButtonText;
    }
  };

  return (
    <TouchableOpacity
      style={[getButtonStyle(), disabled && styles.disabled, style]}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={disabled}
    >
      {icon && <View style={styles.iconContainer}>{icon}</View>}
      <Text style={[getTextStyle(), textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  disabled: {
    opacity: 0.6,
  },
  iconContainer: {
    marginRight: spacing.sm,
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 1.2,
    borderColor: colors.primary,
    borderRadius: borderRadius.md,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: spacing.xl,
  },
  outlineButtonText: {
    color: colors.primary,
    fontSize: typography.fontSizes.md,
    fontWeight: typography.fontWeights.semiBold,
  },
});

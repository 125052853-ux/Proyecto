/**
 * components/Input.js
 * Campo de texto reutilizable con etiqueta, icono opcional y soporte multilínea
 */

import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import { colors, spacing, borderRadius, typography } from '../styles/theme';

export default function Input({
  label,
  placeholder,
  value,
  onChangeText,
  icon,
  rightIcon,
  multiline = false,
  numberOfLines = 4,
  secureTextEntry = false,
  keyboardType = 'default',
  charLimit,
  style,
}) {
  return (
    <View style={[globalStyles.formGroup, style]}>
      {label ? <Text style={globalStyles.inputLabel}>{label}</Text> : null}

      {multiline ? (
        <View>
          <TextInput
            style={globalStyles.textArea}
            placeholder={placeholder}
            placeholderTextColor={colors.textMuted}
            value={value}
            onChangeText={onChangeText}
            multiline={true}
            numberOfLines={numberOfLines}
          />
          {charLimit ? (
            <Text style={globalStyles.charCount}>
              {(value ? value.length : 0)}/{charLimit}
            </Text>
          ) : null}
        </View>
      ) : (
        <View style={globalStyles.inputContainer}>
          {icon ? <View style={globalStyles.inputIcon}>{icon}</View> : null}
          <TextInput
            style={globalStyles.textInput}
            placeholder={placeholder}
            placeholderTextColor={colors.textMuted}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
          />
          {rightIcon ? <View style={styles.rightIcon}>{rightIcon}</View> : null}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  rightIcon: {
    marginLeft: spacing.sm,
  },
});

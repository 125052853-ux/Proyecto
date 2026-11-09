//Pantalla de login

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import { colors, spacing, borderRadius, typography } from '../styles/theme';
import Input from '../components/Input';
import Button from '../components/Button';

export default function LoginScreen() {
  return (
    <View style={globalStyles.screenContainer}>
      {/* Cabecera institucional con Logo */}
      <View style={styles.heroSection}>
        <View style={styles.logoBadge}>
        </View>
        <Text style={styles.appTitle}>Banco de Tiempo y Talento</Text>
        <Text style={styles.appSubtitle}>
          Intercambia habilidades, comparte tiempo
        </Text>
      </View>

      {/* Contenedor blanco con curva superior */}
      <View style={globalStyles.bodyContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={globalStyles.scrollContent}
        >
          <Text style={styles.loginTitle}>Iniciar sesión</Text>
          <Text style={styles.loginSubtitle}>
            Ingresa con tu cuenta para continuar
          </Text>

          {/* Campo Correo Electrónico */}
          <Input
            label="Correo electrónico"
            placeholder="correo@ejemplo.com"
            keyboardType="email-address"
          />

          {/* Campo Contraseña */}
          <Input
            label="Contraseña"
            placeholder="Ingresa tu contraseña"
            secureTextEntry={true}
          />

          {/* Opciones Recordarme y Olvidaste tu contraseña */}
          <View style={styles.optionsRow}>
            <TouchableOpacity style={styles.rememberRow} activeOpacity={0.7}>
              <View style={styles.checkbox} />
              <Text style={styles.rememberText}>Recordarme</Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.7}>
              <Text style={styles.forgotText}>¿Olvidaste tu contraseña?</Text>
            </TouchableOpacity>
          </View>

          {/* Botón Principal */}
          <Button
            title="Iniciar sesión"
            style={styles.loginButton}
          />

          {/* Botón Continuar como invitado */}
          <Button
            title="Continuar como invitado"
            variant="secondary"
          />

          {/* Enlace Crear cuenta */}
          <View style={styles.footerRow}>
            <Text style={styles.noAccountText}>¿No tienes cuenta? </Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={styles.createAccountLink}>Crear cuenta</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heroSection: {
    paddingTop: 48,
    paddingBottom: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  logoBadge: {
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: colors.white,
    borderWidth: 3.5,
    borderColor: colors.accentRed,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.md,
  },
  appTitle: {
    color: colors.white,
    fontSize: typography.fontSizes.xl,
    fontWeight: typography.fontWeights.bold,
    textAlign: 'center',
  },
  appSubtitle: {
    color: 'rgba(255, 255, 255, 0.75)',
    fontSize: typography.fontSizes.xs,
    marginTop: 4,
    textAlign: 'center',
  },
  loginTitle: {
    fontSize: typography.fontSizes.xxl,
    fontWeight: typography.fontWeights.bold,
    color: colors.textPrimary,
    marginTop: spacing.xs,
  },
  loginSubtitle: {
    fontSize: typography.fontSizes.sm,
    color: colors.textSecondary,
    marginBottom: spacing.xl,
    marginTop: 4,
  },
  inputPrefixIcon: {
    fontSize: 16,
    color: colors.textSecondary,
  },
  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.xl,
  },
  rememberRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 18,
    height: 18,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: colors.border,
    marginRight: 8,
    backgroundColor: colors.white,
  },
  rememberText: {
    fontSize: typography.fontSizes.xs,
    color: colors.textSecondary,
  },
  forgotText: {
    fontSize: typography.fontSizes.xs,
    color: colors.primary,
    fontWeight: typography.fontWeights.semiBold,
  },
  loginButton: {
    marginBottom: spacing.xl,
  },
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: spacing.lg,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: colors.border,
  },
  dividerText: {
    marginHorizontal: spacing.md,
    fontSize: typography.fontSizes.xs,
    color: colors.textMuted,
  },
  footerRow: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing.xxl,
    gap: 4,
  },
  noAccountText: {
    fontSize: typography.fontSizes.sm,
    color: colors.textSecondary,
  },
  createAccountLink: {
    fontSize: typography.fontSizes.sm,
    color: colors.primary,
    fontWeight: typography.fontWeights.bold,
  },
});

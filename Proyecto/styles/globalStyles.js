// Estilos globales

import { StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, typography } from './theme';

export const globalStyles = StyleSheet.create({
  // Contenedores principales
  screenContainer: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  safeArea: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  bodyContainer: {
    flex: 1,
    backgroundColor: colors.background,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xl,
    paddingBottom: spacing.xxl,
  },
  scrollContent: {
    paddingBottom: 40,
  },

  // Encabezados con fondo azul
  topHeaderContainer: {
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    paddingBottom: spacing.xl,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerLeftGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    width: 36,
    height: 36,
    borderRadius: borderRadius.full,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.sm,
  },
  headerTitles: {
    marginLeft: spacing.xs,
  },
  headerMainTitle: {
    color: colors.white,
    fontSize: typography.fontSizes.xxl,
    fontWeight: typography.fontWeights.bold,
  },
  headerSubtitle: {
    color: 'rgba(255, 255, 255, 0.75)',
    fontSize: typography.fontSizes.sm,
    marginTop: 2,
  },
  adminProfilePill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: borderRadius.full,
  },
  adminProfileText: {
    color: colors.white,
    fontSize: typography.fontSizes.xs,
    fontWeight: typography.fontWeights.medium,
    marginRight: 4,
  },

  // Tarjetas comunes
  card: {
    backgroundColor: colors.cardBackground,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: colors.borderLight,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },
  cardTitle: {
    fontSize: typography.fontSizes.lg,
    fontWeight: typography.fontWeights.bold,
    color: colors.textPrimary,
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: typography.fontSizes.sm,
    color: colors.textSecondary,
    lineHeight: 18,
  },

  // Cajas estadísticas (KPI cards)
  statsRow: {
    flexDirection: 'row',
    gap: spacing.md,
    marginBottom: spacing.lg,
  },
  statCard: {
    flex: 1,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statCardBlue: {
    backgroundColor: '#E8EDF9',
  },
  statCardGreen: {
    backgroundColor: '#E6F8F0',
  },
  statCardYellow: {
    backgroundColor: '#FEF6E6',
  },
  statCardPink: {
    backgroundColor: '#FDECF0',
  },
  statNumber: {
    fontSize: typography.fontSizes.xxl,
    fontWeight: typography.fontWeights.bold,
    color: colors.textPrimary,
    marginTop: 4,
  },
  statLabel: {
    fontSize: typography.fontSizes.xs,
    color: colors.textSecondary,
    fontWeight: typography.fontWeights.medium,
    textAlign: 'center',
    marginTop: 2,
  },
  statSubLabel: {
    fontSize: 10,
    color: colors.textMuted,
    marginTop: 2,
  },

  // Formularios e inputs
  formGroup: {
    marginBottom: spacing.lg,
  },
  inputLabel: {
    fontSize: typography.fontSizes.sm,
    fontWeight: typography.fontWeights.semiBold,
    color: colors.textPrimary,
    marginBottom: spacing.xs,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderWidth: 1.2,
    borderColor: colors.border,
    borderRadius: borderRadius.md,
    paddingHorizontal: spacing.md,
    height: 50,
  },
  inputIcon: {
    marginRight: spacing.sm,
  },
  textInput: {
    flex: 1,
    fontSize: typography.fontSizes.md,
    color: colors.textPrimary,
  },
  textArea: {
    backgroundColor: colors.white,
    borderWidth: 1.2,
    borderColor: colors.border,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    minHeight: 110,
    textAlignVertical: 'top',
    fontSize: typography.fontSizes.md,
    color: colors.textPrimary,
  },
  charCount: {
    alignSelf: 'flex-end',
    fontSize: typography.fontSizes.xs,
    color: colors.textMuted,
    marginTop: 4,
  },

  // Botones primarios, secundarios y de acción
  primaryButton: {
    backgroundColor: colors.primary,
    borderRadius: borderRadius.md,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: spacing.xl,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 3,
  },
  primaryButtonText: {
    color: colors.white,
    fontSize: typography.fontSizes.md,
    fontWeight: typography.fontWeights.semiBold,
  },
  secondaryButton: {
    backgroundColor: colors.white,
    borderWidth: 1.2,
    borderColor: colors.border,
    borderRadius: borderRadius.md,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: spacing.xl,
  },
  secondaryButtonText: {
    color: colors.textPrimary,
    fontSize: typography.fontSizes.md,
    fontWeight: typography.fontWeights.semiBold,
  },
  dangerButton: {
    backgroundColor: colors.dangerBg,
    borderRadius: borderRadius.md,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: spacing.xl,
    marginTop: spacing.md,
  },
  dangerButtonText: {
    color: colors.dangerText,
    fontSize: typography.fontSizes.md,
    fontWeight: typography.fontWeights.semiBold,
  },
  destructiveSolidButton: {
    backgroundColor: '#BE123C',
    borderRadius: borderRadius.md,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: spacing.xl,
  },
  destructiveSolidButtonText: {
    color: colors.white,
    fontSize: typography.fontSizes.md,
    fontWeight: typography.fontWeights.semiBold,
  },

  // Insignias (Badges / Tags)
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: borderRadius.full,
    alignSelf: 'flex-start',
  },
  badgeText: {
    fontSize: typography.fontSizes.xs,
    fontWeight: typography.fontWeights.medium,
  },
  badgeRoleAdmin: {
    backgroundColor: '#E0E7FF',
  },
  badgeRoleAdminText: {
    color: '#3730A3',
  },
  badgeRoleUser: {
    backgroundColor: '#EDE9FE',
  },
  badgeRoleUserText: {
    color: '#6D28D9',
  },
  badgeActive: {
    backgroundColor: colors.accentGreenBg,
  },
  badgeActiveText: {
    color: '#065F46',
  },
  badgeInactive: {
    backgroundColor: '#FEE2E2',
  },
  badgeInactiveText: {
    color: '#991B1B',
  },
  badgePending: {
    backgroundColor: colors.accentYellowBg,
  },
  badgePendingText: {
    color: '#92400E',
  },

  // Barra de navegación inferior
  bottomNav: {
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.borderLight,
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: spacing.sm,
  },
  bottomNavItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  bottomNavText: {
    fontSize: 10,
    color: colors.textSecondary,
    marginTop: 3,
  },
  bottomNavTextActive: {
    color: colors.primary,
    fontWeight: typography.fontWeights.bold,
  },
  bottomNavIndicator: {
    width: 24,
    height: 3,
    backgroundColor: colors.danger,
    borderRadius: 2,
    position: 'absolute',
    top: 0,
  },
});

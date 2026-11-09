//Screen de perfil del administrador

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
import Header from '../components/Header';
import Button from '../components/Button';
import BottomNav from '../components/BottomNav';

export default function AdminProfileScreen() {
  return (
    <View style={globalStyles.screenContainer}>
      {/* Encabezado */}
      <Header
        title="Mi perfil"
        subtitle="Información de la cuenta"
        showBack={true}
      />

      {/* Contenido en ScrollView */}
      <View style={styles.body}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Tarjeta Superior con Avatar y Rol */}
          <View style={styles.profileSummaryCard}>
            <View style={styles.avatarWrapper}>
              <View style={styles.avatarCircle}>
                <Text style={styles.avatarEmoji}>👤</Text>
              </View>
              <View style={styles.cameraBadge}>
                <Text style={styles.cameraIcon}>📷</Text>
              </View>
            </View>

            <View style={styles.profileMeta}>
              <Text style={styles.profileName}>Antonio Ramirez</Text>
              <Text style={styles.profileEmail}>Antonio.Ramirez@correo.com</Text>
              <View style={styles.roleBadgePill}>
                <Text style={styles.roleCheckIcon}>✓</Text>
                <Text style={styles.roleBadgeText}>Administrador</Text>
              </View>
            </View>

            <TouchableOpacity style={styles.editPencilBtn} activeOpacity={0.7}>
              <Text style={styles.editPencilIcon}>✏️</Text>
            </TouchableOpacity>
          </View>

          {/* Tarjeta Información Personal */}
          <View style={styles.sectionCard}>
            <View style={styles.sectionTitleRow}>
              <View style={styles.titleWithIcon}>
                <Text style={styles.sectionIcon}>👤</Text>
                <Text style={styles.sectionTitle}>Información personal</Text>
              </View>
              <TouchableOpacity style={styles.editSmallBtn} activeOpacity={0.7}>
                <Text style={styles.editSmallText}>✏️ Editar</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.infoFieldRow}>
              <Text style={styles.infoFieldLabel}>Nombre completo</Text>
              <Text style={styles.infoFieldValue}>Antonio Ramirez Regla</Text>
            </View>

            <View style={styles.infoFieldRow}>
              <Text style={styles.infoFieldLabel}>Correo electrónico</Text>
              <Text style={styles.infoFieldValue}>Antonio.Ramirez@correo.com</Text>
            </View>

            <View style={[styles.infoFieldRow, { borderBottomWidth: 0 }]}>
              <Text style={styles.infoFieldLabel}>Teléfono</Text>
              <Text style={styles.infoFieldValue}>+52 448 103 0355</Text>
            </View>
          </View>

          {/* Tarjeta Seguridad */}
          <View style={styles.sectionCard}>
            <View style={styles.titleWithIcon}>
              <Text style={styles.sectionIcon}>🔒</Text>
              <Text style={styles.sectionTitle}>Seguridad</Text>
            </View>

            <TouchableOpacity style={styles.menuRow} activeOpacity={0.7}>
              <View style={[styles.menuIconBox, { backgroundColor: '#E8EDF9' }]}>
                <Text style={{ fontSize: 16 }}>🔑</Text>
              </View>
              <View style={styles.menuTextGroup}>
                <Text style={styles.menuTitle}>Cambiar contraseña</Text>
                <Text style={styles.menuSubtitle}>
                  Actualiza tu contraseña de acceso
                </Text>
              </View>
              <Text style={styles.chevron}>›</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuRow} activeOpacity={0.7}>
              <View style={[styles.menuIconBox, { backgroundColor: '#E6F8F0' }]}>
                <Text style={{ fontSize: 16 }}>🛡️</Text>
              </View>
              <View style={styles.menuTextGroup}>
                <Text style={styles.menuTitle}>Verificación en dos pasos</Text>
                <Text style={styles.menuSubtitle}>
                  Añade una capa extra de seguridad
                </Text>
              </View>
              <Text style={styles.chevron}>›</Text>
            </TouchableOpacity>
          </View>

          {/* Tarjeta Preferencias */}
          <View style={styles.sectionCard}>
            <View style={styles.titleWithIcon}>
              <Text style={styles.sectionIcon}>⚙️</Text>
              <Text style={styles.sectionTitle}>Preferencias</Text>
            </View>

            <TouchableOpacity style={styles.menuRow} activeOpacity={0.7}>
              <View style={[styles.menuIconBox, { backgroundColor: '#EEF2F6' }]}>
                <Text style={{ fontSize: 16 }}>🔔</Text>
              </View>
              <View style={styles.menuTextGroup}>
                <Text style={styles.menuTitle}>Notificaciones</Text>
                <Text style={styles.menuSubtitle}>
                  Gestiona tus notificaciones
                </Text>
              </View>
              <Text style={styles.chevron}>›</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuRow} activeOpacity={0.7}>
              <View style={[styles.menuIconBox, { backgroundColor: '#EEF2F6' }]}>
                <Text style={{ fontSize: 16 }}>🎨</Text>
              </View>
              <View style={styles.menuTextGroup}>
                <Text style={styles.menuTitle}>Tema de la aplicación</Text>
                <Text style={styles.menuSubtitle}>
                  Claro / Oscuro / Sistema
                </Text>
              </View>
              <Text style={styles.chevron}>›</Text>
            </TouchableOpacity>
          </View>

          {/* Botón Cerrar Sesión */}
          <Button
            title="Cerrar sesión"
            variant="destructive"
            icon={<Text style={{ color: colors.white, marginRight: 6 }}>🚪</Text>}
            style={styles.logoutBtn}
          />
        </ScrollView>
      </View>

      {/* Navegación inferior Admin */}
      <BottomNav role="admin" activeTab="Reportes" />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
  },
  scrollContent: {
    paddingBottom: 24,
  },
  profileSummaryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  avatarWrapper: {
    position: 'relative',
    marginRight: spacing.md,
  },
  avatarCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#E0E7FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarEmoji: {
    fontSize: 28,
  },
  cameraBadge: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: colors.white,
  },
  cameraIcon: {
    fontSize: 10,
  },
  profileMeta: {
    flex: 1,
  },
  profileName: {
    fontSize: typography.fontSizes.lg,
    fontWeight: typography.fontWeights.bold,
    color: colors.textPrimary,
  },
  profileEmail: {
    fontSize: typography.fontSizes.xs,
    color: colors.textSecondary,
    marginTop: 2,
  },
  roleBadgePill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DCE6F8',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: borderRadius.full,
    alignSelf: 'flex-start',
    marginTop: 6,
  },
  roleCheckIcon: {
    fontSize: 10,
    color: colors.primary,
    marginRight: 4,
    fontWeight: 'bold',
  },
  roleBadgeText: {
    fontSize: 11,
    color: colors.primary,
    fontWeight: typography.fontWeights.semiBold,
  },
  editPencilBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#EEF2F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  editPencilIcon: {
    fontSize: 16,
  },
  sectionCard: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  sectionTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.md,
  },
  titleWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  sectionIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  sectionTitle: {
    fontSize: typography.fontSizes.md,
    fontWeight: typography.fontWeights.bold,
    color: colors.textPrimary,
  },
  editSmallBtn: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    backgroundColor: '#EEF2F6',
    borderRadius: borderRadius.md,
  },
  editSmallText: {
    fontSize: typography.fontSizes.xs,
    color: colors.primary,
    fontWeight: typography.fontWeights.semiBold,
  },
  infoFieldRow: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F8FAFC',
  },
  infoFieldLabel: {
    fontSize: 11,
    color: colors.textSecondary,
    marginBottom: 2,
  },
  infoFieldValue: {
    fontSize: typography.fontSizes.sm,
    color: colors.textPrimary,
    fontWeight: typography.fontWeights.medium,
  },
  menuRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  menuIconBox: {
    width: 36,
    height: 36,
    borderRadius: borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },
  menuTextGroup: {
    flex: 1,
  },
  menuTitle: {
    fontSize: typography.fontSizes.sm,
    fontWeight: typography.fontWeights.semiBold,
    color: colors.textPrimary,
  },
  menuSubtitle: {
    fontSize: 11,
    color: colors.textSecondary,
    marginTop: 2,
  },
  chevron: {
    fontSize: 18,
    color: colors.textMuted,
  },
  logoutBtn: {
    marginVertical: spacing.md,
  },
});

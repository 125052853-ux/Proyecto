//Screen reportes administrador

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

export default function AdminReportsScreen() {
  const chartData = [
    { label: 'Usuarios', value: 25, color: '#1D3B8B' },
    { label: 'Participantes', value: 18, color: '#10B981' },
    { label: 'Categorías', value: 10, color: '#F97316' },
    { label: 'Habilidades', value: 42, color: '#8B5CF6' },
    { label: 'Solicitudes', value: 7, color: '#BE123C' },
  ];

  const reportTypes = [
    {
      id: '1',
      title: 'Reporte de usuarios',
      subtitle: 'Lista de todos los usuarios con su rol y estado.',
      icon: '👥',
      bg: '#E0E7FF',
    },
    {
      id: '2',
      title: 'Reporte de participantes',
      subtitle: 'Participantes activos, habilidades y servicios.',
      icon: '👤',
      bg: '#DCFCE7',
    },
    {
      id: '3',
      title: 'Reporte de habilidades',
      subtitle: 'Habilidades registradas por categoría y participante.',
      icon: '🧑‍🚒',
      bg: '#FEF3C7',
    },
    {
      id: '4',
      title: 'Reporte de solicitudes',
      subtitle: 'Solicitudes de servicios e intercambios.',
      icon: '📄',
      bg: '#FCE7F3',
    },
    {
      id: '5',
      title: 'Reporte general',
      subtitle: 'Vista general de la actividad del sistema.',
      icon: '📊',
      bg: '#EDE9FE',
    },
  ];

  return (
    <View style={globalStyles.screenContainer}>
      {/* Encabezado */}
      <Header
        title="Reportes"
        subtitle="Consulta y genera reportes del sistema"
        showBack={true}
        rightComponent={
          <View style={globalStyles.adminProfilePill}>
            <Text style={{ marginRight: 4 }}>👤</Text>
            <Text style={globalStyles.adminProfileText}>Administrador ▾</Text>
          </View>
        }
      />

      {/* Contenido en ScrollView */}
      <View style={styles.body}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Fila de 4 tarjetas estadísticas (KPIs) */}
          <View style={styles.statsRow}>
            {/* 1. Usuarios */}
            <View style={[styles.statBox, { backgroundColor: '#E8EDF9' }]}>
              <Text style={styles.statIcon}>👥</Text>
              <Text style={styles.statNumber}>25</Text>
              <Text style={styles.statLabel}>Usuarios registrados</Text>
            </View>

            {/* 2. Participantes */}
            <View style={[styles.statBox, { backgroundColor: '#E6F8F0' }]}>
              <Text style={styles.statIcon}>👤</Text>
              <Text style={styles.statNumber}>18</Text>
              <Text style={styles.statLabel}>Participantes activos</Text>
            </View>

            {/* 3. Habilidades */}
            <View style={[styles.statBox, { backgroundColor: '#FEF6E6' }]}>
              <Text style={styles.statIcon}>🧑‍🚒</Text>
              <Text style={styles.statNumber}>42</Text>
              <Text style={styles.statLabel}>Habilidades registradas</Text>
            </View>

            {/* 4. Solicitudes */}
            <View style={[styles.statBox, { backgroundColor: '#FDECF0' }]}>
              <Text style={styles.statIcon}>📄</Text>
              <Text style={styles.statNumber}>7</Text>
              <Text style={styles.statLabel}>Solicitudes pendientes</Text>
            </View>
          </View>

          {/* Tarjeta de Filtros */}
          <View style={styles.filterCard}>
            <View style={styles.sectionHeaderRow}>
              <Text style={styles.filterTitle}>▼ Filtros</Text>
            </View>

            <View style={styles.filterFieldsRow}>
              <View style={{ flex: 1 }}>
                <Text style={styles.fieldLabel}>Tipo de reporte</Text>
                <View style={styles.dropdownBox}>
                  <Text style={styles.dropdownText}>Todos</Text>
                  <Text style={styles.dropdownArrow}>▾</Text>
                </View>
              </View>

              <View style={{ flex: 1 }}>
                <Text style={styles.fieldLabel}>Fecha desde</Text>
                <View style={styles.dateBox}>
                  <Text style={styles.dateText}>01/09/2026</Text>
                  <Text>📅</Text>
                </View>
              </View>

              <View style={{ flex: 1 }}>
                <Text style={styles.fieldLabel}>Fecha hasta</Text>
                <View style={styles.dateBox}>
                  <Text style={styles.dateText}>30/09/2026</Text>
                  <Text>📅</Text>
                </View>
              </View>
            </View>

            <Button
              title="Generar reporte"
              icon={<Text style={styles.btnIcon}>🔍</Text>}
              style={styles.generateButton}
            />
          </View>

          {/* Tarjeta Resumen General con Gráfico de Barras */}
          <View style={styles.chartCard}>
            <View style={styles.chartHeader}>
              <Text style={styles.chartTitle}>Resumen general</Text>
              <View style={styles.periodPill}>
                <Text style={styles.periodText}>Este mes ▾</Text>
              </View>
            </View>

            {/* Barras verticales */}
            <View style={styles.chartContainer}>
              {chartData.map((item, idx) => {
                const maxVal = 50;
                const barHeight = (item.value / maxVal) * 110;
                return (
                  <View key={idx} style={styles.barColumn}>
                    <Text style={styles.barValue}>{item.value}</Text>
                    <View style={styles.barTrack}>
                      <View
                        style={[
                          styles.barFill,
                          {
                            height: barHeight,
                            backgroundColor: item.color,
                          },
                        ]}
                      />
                    </View>
                    <Text style={styles.barLabel}>{item.label}</Text>
                  </View>
                );
              })}
            </View>
          </View>

          {/* Sección Tipos de Reportes */}
          <View style={styles.reportTypesCard}>
            <Text style={styles.reportTypesHeader}>Tipos de reportes</Text>

            {reportTypes.map((rt) => (
              <TouchableOpacity
                key={rt.id}
                style={styles.reportTypeRow}
                activeOpacity={0.7}
              >
                <View style={[styles.reportIconBox, { backgroundColor: rt.bg }]}>
                  <Text style={{ fontSize: 18 }}>{rt.icon}</Text>
                </View>

                <View style={styles.reportTextGroup}>
                  <Text style={styles.reportItemTitle}>{rt.title}</Text>
                  <Text style={styles.reportItemSubtitle}>{rt.subtitle}</Text>
                </View>

                <Text style={styles.chevron}>›</Text>
              </TouchableOpacity>
            ))}
          </View>
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
  statsRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: spacing.md,
  },
  statBox: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 6,
    borderRadius: borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statIcon: {
    fontSize: 16,
    marginBottom: 2,
  },
  statNumber: {
    fontSize: typography.fontSizes.lg,
    fontWeight: typography.fontWeights.bold,
    color: colors.textPrimary,
  },
  statLabel: {
    fontSize: 9,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: 2,
    lineHeight: 11,
  },
  filterCard: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  sectionHeaderRow: {
    marginBottom: spacing.sm,
  },
  filterTitle: {
    fontSize: typography.fontSizes.sm,
    fontWeight: typography.fontWeights.bold,
    color: colors.textPrimary,
  },
  filterFieldsRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: spacing.md,
  },
  fieldLabel: {
    fontSize: 11,
    color: colors.textSecondary,
    marginBottom: 4,
  },
  dropdownBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: borderRadius.sm,
    paddingHorizontal: 8,
    height: 38,
  },
  dropdownText: {
    fontSize: 12,
    color: colors.textPrimary,
  },
  dropdownArrow: {
    fontSize: 10,
    color: colors.textSecondary,
  },
  dateBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: borderRadius.sm,
    paddingHorizontal: 6,
    height: 38,
  },
  dateText: {
    fontSize: 11,
    color: colors.textPrimary,
  },
  generateButton: {
    height: 42,
  },
  btnIcon: {
    fontSize: 14,
    color: colors.white,
    marginRight: 6,
  },
  chartCard: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  chartHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.lg,
  },
  chartTitle: {
    fontSize: typography.fontSizes.md,
    fontWeight: typography.fontWeights.bold,
    color: colors.textPrimary,
  },
  periodPill: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: borderRadius.sm,
    borderWidth: 1,
    borderColor: colors.border,
  },
  periodText: {
    fontSize: typography.fontSizes.xs,
    color: colors.textSecondary,
  },
  chartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 140,
    paddingBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  barColumn: {
    alignItems: 'center',
    flex: 1,
  },
  barValue: {
    fontSize: 11,
    fontWeight: typography.fontWeights.bold,
    color: colors.textPrimary,
    marginBottom: 4,
  },
  barTrack: {
    width: 28,
    height: 110,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  barFill: {
    width: '100%',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  barLabel: {
    fontSize: 9,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: 6,
  },
  reportTypesCard: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  reportTypesHeader: {
    fontSize: typography.fontSizes.md,
    fontWeight: typography.fontWeights.bold,
    color: colors.textPrimary,
    marginBottom: spacing.md,
  },
  reportTypeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: '#F8FAFC',
  },
  reportIconBox: {
    width: 38,
    height: 38,
    borderRadius: borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },
  reportTextGroup: {
    flex: 1,
  },
  reportItemTitle: {
    fontSize: typography.fontSizes.sm,
    fontWeight: typography.fontWeights.semiBold,
    color: colors.textPrimary,
  },
  reportItemSubtitle: {
    fontSize: 11,
    color: colors.textSecondary,
    marginTop: 2,
  },
  chevron: {
    fontSize: 20,
    color: colors.textMuted,
  },
});
